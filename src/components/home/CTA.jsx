import { Link } from "react-router-dom";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-container">

        <h2 className="cta-title">
          Ready to Upgrade Your Car Wash Equipment?
        </h2>

        <p className="cta-description">
          Let's discuss your requirements and help you choose
          the ideal FRP trolley solution for your business.
        </p>

        <div className="cta-buttons">

          <Link to="/contact" className="cta-button">
              Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CTA;