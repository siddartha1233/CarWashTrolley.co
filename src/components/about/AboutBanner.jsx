import "./AboutBanner.css";

const AboutBanner = () => {
  return (
    <section className="about-banner">
      <div className="about-banner-container">

        <span className="about-banner-subtitle">
          ABOUT US
        </span>

        <h1 className="about-banner-title">
          Engineering Premium Fiberglass 
          <span>Solutions Since 2010</span>
        </h1>

        <p className="about-banner-description">
          Learn about our manufacturing expertise, commitment to
          quality and dedication to delivering durable fiberglass
          solutions for professional car wash businesses worldwide.
        </p>

      </div>
    </section>
  );
};

export default AboutBanner;