import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex h-20 items-center justify-between">

        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <NavLinks />
        </nav>

        {/* CTA Button */}
        <Link
          to="/quote"
          className="hidden lg:inline-flex items-center justify-center rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white"
        >
          Request Quote
        </Link>

        {/* Mobile Menu Placeholder */}
        <button className="lg:hidden text-3xl">
          ☰
        </button>

      </div>
    </header>
  );
};

export default Navbar;