"use client"; // Ensures the component runs on the client side

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "/workspaces/Portfolio/src/components/ThemeSwitcher/ThemeSwitcher.css";

const ThemeSwitcher = ({ darkClassName }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

      setIsDarkMode(prefersDark.matches);
      document.documentElement.classList.toggle(darkClassName, prefersDark.matches);

      const handleChange = (e) => {
        setIsDarkMode(e.matches);
        document.documentElement.classList.toggle(darkClassName, e.matches);
      };

      prefersDark.addEventListener("change", handleChange);

      return () => prefersDark.removeEventListener("change", handleChange);
    }
  }, [darkClassName]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle(darkClassName, newMode);
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
