import { Link } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig";
import "./Logo.css";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <div className="logo-icon">
        CW
      </div>

      <div className="logo-content">
        <h1 className="logo-title">
          {siteConfig.company.name}
        </h1>

        <p className="logo-tagline">
          Fiberglass  Trolley Manufacturer
        </p>
      </div>
    </Link>
  );
};

export default Logo;