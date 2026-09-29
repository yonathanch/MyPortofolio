// Cross-route + same-page hash scrolling helpers.
//
// - A manual tween (setInterval, not rAF — rAF is paused in occluded windows)
//   with a watchdog so nav clicks always arrive, even in throttled tabs.
// - The pending hash is time-bombed, not single-use: React StrictMode runs
//   effects twice on mount, so the second ScrollToTop run must still see the
//   pending hash instead of resetting scroll to the top over it.
// - After a jump we keep re-applying the offset while the document keeps
//   growing (late fonts/images), so we land exactly on the section.

const NAV_OFFSET = 96; // matches `section[id] scroll-margin-top` in index.css

let pendingHash = null;
let pendingAt = 0;
const PENDING_TTL = 1500;

export const setPendingHash = (hash) => {
  pendingHash = hash;
  pendingAt = Date.now();
};

export const hasPendingHash = () =>
  !!pendingHash && Date.now() - pendingAt < PENDING_TTL;

// Returns the pending hash while it is still fresh; never consumed early so
// double-invoked effects (StrictMode) can both act on it. It expires itself.
export const peekPendingHash = () => (hasPendingHash() ? pendingHash : null);

const targetYFor = (el) =>
  el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

// ~700ms easeOutCubic tween. Recomputes the destination every tick so late
// layout shifts cannot make us land in the wrong place. Watchdog: if the
// environment throttles timers so hard the tween window has passed, snap.
const smoothScrollToEl = (el) => {
  const startY = window.scrollY;
  const duration = 700;
  const t0 = performance.now();
  const timer = setInterval(() => {
    const elapsed = performance.now() - t0;
    if (elapsed > duration + 500) {
      window.scrollTo(0, targetYFor(el));
      clearInterval(timer);
      return;
    }
    const p = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const targetY = targetYFor(el);
    window.scrollTo(0, startY + (targetY - startY) * eased);
    if (p >= 1) clearInterval(timer);
  }, 16);
};

// Instant jump (route changes), then hold the position while the freshly
// mounted page settles. Chrome can clamp/reset scroll while the new route's
// content is still mounting, so we re-apply whenever we drift off-target
// during the settle window.
const jumpToEl = (el) => {
  const hold = () => window.scrollTo(0, targetYFor(el));
  hold();
  const t0 = Date.now();
  const watcher = setInterval(() => {
    if (Date.now() - t0 > 4000) {
      clearInterval(watcher);
      return;
    }
    const targetY = targetYFor(el);
    if (Math.abs(window.scrollY - targetY) > 4) hold();
  }, 100);
};

// Scroll to `hash`. If the element isn't mounted yet (route just changed),
// poll briefly until it appears.
export const scrollToIdWhenReady = (hash, attempt = 0, instant = false) => {
  const el = document.querySelector(hash);
  if (el) {
    if (instant) jumpToEl(el);
    else smoothScrollToEl(el);
    return;
  }
  if (attempt < 25) {
    setTimeout(() => scrollToIdWhenReady(hash, attempt + 1, instant), 60);
  }
};
