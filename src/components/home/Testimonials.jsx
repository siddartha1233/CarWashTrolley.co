import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Ahmed R.",
    position: "Operations Manager",
    country: "UAE",
    review:
      "The FRP trolley quality exceeded our expectations. Durable, lightweight and perfect for our detailing operation.",
  },
  {
    id: 2,
    name: "James P.",
    position: "Car Wash Owner",
    country: "South Africa",
    review:
      "Excellent manufacturing quality and timely delivery. Highly recommended for professional car wash businesses.",
  },
  {
    id: 3,
    name: "Carlos M.",
    position: "Fleet Services",
    country: "Saudi Arabia",
    review:
      "Professional team and custom manufacturing solutions that perfectly matched our operational requirements.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container">

        <div className="section-header">
          <span className="section-subtitle">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="section-title">
            Trusted by Professionals Worldwide
          </h2>
        </div>

        <div className="testimonial-grid">

          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>

              <div className="testimonial-stars">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="testimonial-review">
                "{item.review}"
              </p>

              <div className="testimonial-author">

                <h4>{item.name}</h4>

                <span>
                  {item.position}
                </span>

                <small>{item.country}</small>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;