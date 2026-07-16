import { Link } from "react-router-dom";
import "./Hero.css";
import img1 from "./img1.jpeg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-badge">
            Premium Fiberglass  Manufacturer
          </span>

          <h1 className="hero-title">
            <span>Car Wash Trolleys</span>
          </h1>

          <p className="hero-description">
            We manufacture durable, lightweight and corrosion-resistant Fiberglass 
            car wash trolleys designed for professional detailing companies,
            workshops and industrial cleaning businesses worldwide.
          </p>

          <div className="hero-buttons">

            <Link
              to="/products"
              className="hero-btn hero-btn-primary"
            >
              Explore Products
            </Link>

            <Link
              to="/contact"
              className="hero-btn hero-btn-secondary"
            >
              Contact Us
            </Link>

          </div>

          <div className="hero-features">

            <div className="hero-feature">
              ✔ 15+ Years Experience
            </div>

            <div className="hero-feature">
              ✔ Export Worldwide
            </div>

            <div className="hero-feature">
              ✔ Custom Manufacturing
            </div>

          </div>

        </div>

        <div className="hero-image">

          <div className="hero-placeholder">

            <div className="hero-placeholder-icon">
              <img src={img1} alt="Product Image" />
            </div>

            <h3>Product Image</h3>

            <p>
              Premium Fiberglass  Car Wash Trolley
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;