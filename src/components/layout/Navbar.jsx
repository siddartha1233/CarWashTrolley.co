import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import "./Navbar.css";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Logo />

        <nav className={`navbar-navigation ${menuOpen ? "active" : ""}`}>
          <NavLinks closeMenu={() => setMenuOpen(false)} />
        </nav>

        <div className="navbar-actions">

          <Link to="/contact" className="navbar-button">
            Contact Us
          </Link>

          <button
            className="navbar-mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>
    </header>
  );
};

export default Navbar;