import "./AboutCompany.css";
import trolley10 from "../../assets/images/trolley-11.jpeg";

const AboutCompany = () => {
  return (
    <section className="about-company">
      <div className="about-company-container">

        <div className="about-company-image">

          <div className="about-company-placeholder">

            <div className="placeholder-icon">
              <img src={trolley10} alt="Factory Image" />
            </div>

            <h3>Factory Image</h3>

            <p>Manufacturing Facility Placeholder</p>

          </div>

        </div>

        <div className="about-company-content">

          <span className="about-company-subtitle">
            ABOUT AMANI FIBERGLASS
          </span>

          <h2 className="about-company-title">
            Manufacturing Reliable Fiberglass  Solutions
            <span>for Modern Businesses</span>
          </h2>

          <p className="about-company-description">
            Amani Fiberglass is dedicated to designing and
            manufacturing high-quality fiberglass (Fiberglass ) products
            for the automotive and industrial sectors. Our focus
            is on innovation, durability and delivering products
            that help businesses operate more efficiently.
          </p>

          <ul className="about-company-features">
            <li>Premium Fiberglass  Manufacturing</li>
            <li>Custom Product Solutions</li>
            <li>Built for Long-Term Performance</li>
          </ul>

        </div>

      </div>
    </section>
  );
};

export default AboutCompany;