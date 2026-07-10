import { NavLink } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig";

const NavLinks = () => {
  return (
    <ul className="flex items-center gap-8">
      {siteConfig.navigation.map((item) => (
        <li key={item.name}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `text-[15px] font-medium transition-colors duration-300 ${
                isActive
                  ? "text-[var(--primary)]"
                  : "text-gray-700 hover:text-[var(--primary)]"
              }`
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