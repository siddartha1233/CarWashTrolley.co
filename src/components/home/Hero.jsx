import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-badge">
            Premium FRP Manufacturer
          </span>

          <h1 className="hero-title">
            Engineering Premium
            <span>Car Wash Trolleys</span>
          </h1>

          <p className="hero-description">
            We manufacture durable, lightweight and corrosion-resistant FRP
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
              to="/quote"
              className="hero-btn hero-btn-secondary"
            >
              Request Quote
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
              📦
            </div>

            <h3>Product Image</h3>

            <p>
              Premium FRP Car Wash Trolley
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;