/* eslint-disable react/prop-types -- plain JSX props, matching codebase convention */
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../theme/ThemeProvider";

// Adapted from the theme-toggle component: sliding pill with sun/moon,
// wired to the app-wide theme context instead of local state.
export function ThemeToggle({ className = "" }) {
  const { isDark, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      className={`flex h-8 w-16 cursor-pointer rounded-full border p-1 transition-all duration-300 ${
        isDark
          ? "border-white/15 bg-ink"
          : "border-ink/15 bg-paper"
      } ${className}`}
    >
      <span className="flex w-full items-center justify-between">
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300 ${
            isDark ? "translate-x-0 bg-white/10" : "translate-x-8 bg-ink/10"
          }`}
        >
          {isDark ? (
            <Moon className="h-4 w-4 text-paper" strokeWidth={1.5} />
          ) : (
            <Sun className="h-4 w-4 text-ink" strokeWidth={1.5} />
          )}
        </span>
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-300 ${
            isDark ? "bg-transparent" : "-translate-x-8"
          }`}
        >
          {isDark ? (
            <Sun className="h-4 w-4 text-paper/60" strokeWidth={1.5} />
          ) : (
            <Moon className="h-4 w-4 text-ink/60" strokeWidth={1.5} />
          )}
        </span>
      </span>
    </button>
  );
}

export default ThemeToggle;
