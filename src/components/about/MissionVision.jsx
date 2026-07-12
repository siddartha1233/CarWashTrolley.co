import "./MissionVision.css";

const MissionVision = () => {
  return (
    <section className="mission-vision">

      <div className="mission-vision-container">

        <div className="mission-header">

          <span className="mission-subtitle">
            OUR PURPOSE
          </span>

          <h2 className="mission-title">
            Driven by Quality & Innovation
          </h2>

        </div>

        <div className="mission-grid">

          <div className="mission-card">

            <div className="mission-icon">
              🚀
            </div>

            <h3>Our Mission</h3>

            <p>
              To manufacture premium FRP products that help
              businesses improve efficiency through durable,
              reliable and innovative fiberglass solutions.
            </p>

          </div>

          <div className="mission-card">

            <div className="mission-icon">
              🎯
            </div>

            <h3>Our Vision</h3>

            <p>
              To become a trusted global manufacturer known
              for quality craftsmanship, innovation and
              customer-focused engineering.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default MissionVision;