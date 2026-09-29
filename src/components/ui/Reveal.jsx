/* eslint-disable react/prop-types -- plain JSX props, matching codebase convention */
import { motion, useReducedMotion } from "framer-motion";

// Scroll-triggered reveal in the 21st.dev style: soft rise + fade with a
// gentle spring, triggered once when the element enters the viewport.
// Respects prefers-reduced-motion (falls back to a plain fade).
const EASE = [0.22, 1, 0.36, 1];

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className = "",
  as = "div",
  once = true,
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerGroup({ children, className = "", stagger = 0.08 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", y = 24 }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: reduce ? { opacity: 0 } : { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
