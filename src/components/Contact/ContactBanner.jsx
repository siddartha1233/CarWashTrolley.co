import "./ContactBanner.css";

const ContactBanner = () => {
  return (
    <section className="contact-banner">
      <div className="contact-banner-container">

        <span className="contact-banner-subtitle">
          CONTACT US
        </span>

        <h1 className="contact-banner-title">
          Let's Start Your
          <span>Next Project</span>
        </h1>

        <p className="contact-banner-description">
          Have questions about our FRP products or need a custom
          manufacturing solution? Our team is ready to assist you.
        </p>

      </div>
    </section>
  );
};

export default ContactBanner;