"use client";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Dropdown from "@/components/Navbar/Dropdown/Dropdown.jsx";
import "@/components/Navbar/Navbar.css";
import Link from "next/link";

const Navbar = ({ options }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Set initial state based on screen width
    window.addEventListener("resize", handleResize); // Listen for window resize
    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  return (
    <nav data-testid="nav" className="navbar-outer">
      {isMobile ? (
        <Dropdown options={options} />
      ) : (
        <div className="navbar-bubble">
          <ul data-testid="ul" className="navbar-links">
          {options.map((option, index) => (
  <li key={index} data-testid={`li${index}`}>
    <Link className="link" href={option.path}>
      {option.label}
    </Link>
  </li>
))}
          </ul>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navbar;
