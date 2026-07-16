import { Link } from "react-router-dom";
import "./CompanyOverview.css";
import trolley10 from "../../assets/images/trolley-10.jpeg";

const CompanyOverview = () => {
  return (
    <section className="company-overview">
      <div className="company-container">

        {/* Image */}
        <div className="company-image">

          <div className="company-placeholder">

            <div className="placeholder-icon">
              <img src={trolley10} alt="Product Image" />
            </div>

            <h3>Factory Image</h3>

            <p>
              Manufacturing Facility Placeholder
            </p>

          </div>

        </div>

        {/* Content */}
        <div className="company-content">

          <span className="company-subtitle">
            WHO WE ARE
          </span>

          <h2 className="company-title">
            Engineering Durable Fiberglass  Solutions
            <span>for the Car Wash Industry</span>
          </h2>

          <p className="company-description">
            We specialize in manufacturing premium fiberglass
            car wash trolleys designed for durability,
            performance, and long service life. Every product
            is engineered to meet the needs of professional
            detailing companies and industrial cleaning
            businesses worldwide.
          </p>

          <ul className="company-features">
            <li>Premium Fiberglass  Materials</li>
            <li>Custom Manufacturing Solutions</li>
            <li>Worldwide Supply & Export</li>
          </ul>

          <Link to="/about" className="company-button">
            Learn More
          </Link>

        </div>

      </div>
    </section>
  );
};

export default CompanyOverview;