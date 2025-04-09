import PropTypes from "prop-types";
import "@/components/Footer/Footer.css"; // Assuming you will add relevant CSS for the footer here
import Link from "next/link";

const Footer = ({ options }) => {
  return (
    <footer className="footer">
      <div className="footer-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Links on the left side */}
        <ul className="footer-links flex space-x-6">
        {options.map((option, index) => (
  <li key={index} data-testid={`li${index}`}>
    <Link className="link" href={option.path}>
      {option.label}
    </Link>
  </li>
))}
        </ul>

        {/* Rights reserved text on the right side */}
        <div className="footer-rights text-sm">
          <p>© 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Footer;
