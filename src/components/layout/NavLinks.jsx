import { NavLink } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig";
import "./NavLinks.css";

const NavLinks = ({ closeMenu }) => {
  return (
    <ul className="nav-links">
      {siteConfig.navigation.map((item) => (
        <li key={item.name} className="nav-item">
          <NavLink
            to={item.path}
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;