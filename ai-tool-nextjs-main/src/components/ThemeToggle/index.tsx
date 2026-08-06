"use client";

import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage may be unavailable (private browsing, etc.)
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/10 text-ink transition-colors duration-200 hover:border-ink/25"
    >
      {isDark ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="4.5" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M12 2v2.2" />
            <path d="M12 19.8V22" />
            <path d="M4.2 4.2l1.6 1.6" />
            <path d="M18.2 18.2l1.6 1.6" />
            <path d="M2 12h2.2" />
            <path d="M19.8 12H22" />
            <path d="M4.2 19.8l1.6-1.6" />
            <path d="M18.2 5.8l1.6-1.6" />
          </g>
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.5 14.4A8.5 8.5 0 0 1 9.6 3.5a.6.6 0 0 0-.75-.75A10 10 0 1 0 21.25 15.15a.6.6 0 0 0-.75-.75Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
