import { Link } from "react-router-dom";
import "./FactoryPreview.css";

const FactoryPreview = () => {
  return (
    <section className="factory-preview">

      <div className="factory-preview-container">

        <div className="factory-header">

          <span className="factory-subtitle">
            OUR MANUFACTURING FACILITY
          </span>

          <h2 className="factory-title">
            See Where Quality Comes to Life
          </h2>

          <p className="factory-description">
            Every FRP product is manufactured with precision,
            quality materials and careful craftsmanship to
            ensure long-lasting performance.
          </p>

        </div>

        <div className="factory-gallery">

          <div className="factory-image">
            <span>🏭</span>
            <p>Factory Photo</p>
          </div>

          <div className="factory-image">
            <span>⚙️</span>
            <p>Production Area</p>
          </div>

        </div>

        <div className="factory-button">

          <Link to="/gallery" className="factory-link">
            View Gallery
          </Link>

        </div>

      </div>

    </section>
  );
};

export default FactoryPreview;