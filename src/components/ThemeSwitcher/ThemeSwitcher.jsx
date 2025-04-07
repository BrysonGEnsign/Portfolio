"use client";

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "src/components/ThemeSwitcher/ThemeSwitcher.css";

const ThemeSwitcher = ({ darkClassName }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");

      if (storedTheme === "dark") {
        setIsDarkMode(true);
        document.documentElement.classList.add(darkClassName);
      } else if (storedTheme === "light") {
        setIsDarkMode(false);
        document.documentElement.classList.remove(darkClassName);
      } else {
        // fallback to system preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(prefersDark.matches);
        document.documentElement.classList.toggle(darkClassName, prefersDark.matches);
      }
    }
  }, [darkClassName]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      const theme = newMode ? "dark" : "light";

      document.documentElement.classList.toggle(darkClassName, newMode);
      localStorage.setItem("theme", theme);

      return newMode;
    });
  };

  return (
    <div className="theme-switcher" onClick={toggleTheme}>
      <div className={`theme-switcher-button ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <div className="theme-switcher-ring">
          <div className="theme-switcher-icon">
            {isDarkMode ? (
              <span className="moon-icon">🌜</span>
            ) : (
              <img src="/Sun.svg" alt="Sun Icon" className="sun-icon" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string,
};

ThemeSwitcher.defaultProps = {
  darkClassName: "dark",
};

export default ThemeSwitcher;
