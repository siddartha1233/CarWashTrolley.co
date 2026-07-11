import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Logo />

        <nav className="navbar-navigation">
          <NavLinks />
        </nav>

        <div className="navbar-actions">
          <Link to="/quote" className="navbar-button">
            Request Quote
          </Link>

          <button className="navbar-mobile-toggle">
            ☰
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;