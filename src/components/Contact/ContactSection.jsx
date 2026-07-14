import { useForm } from "react-hook-form";
import "./ContactSection.css";

const ContactSection = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert("Inquiry submitted successfully!");
        reset();
    };

    return (
        <section className="contact-section">

            <div className="contact-section-container">

                {/* Contact Information */}

                <div className="contact-info">

                    <span className="contact-info-subtitle">
                        GET IN TOUCH
                    </span>

                    <h2>Let's Talk About Your Project</h2>

                    <p>
                        Whether you need a standard FRP trolley or a
                        completely customized solution, our team is
                        ready to assist you.
                    </p>

                    <div className="contact-item">
                        <strong>📍 Address</strong>
                        <span>To Be Updated</span>
                    </div>

                    <div className="contact-item">
                        <strong>📞 Phone</strong>
                        <span>To Be Updated</span>
                    </div>

                    <div className="contact-item">
                        <strong>✉ Email</strong>
                        <span>To Be Updated</span>
                    </div>

                    <div className="contact-item">
                        <strong>🌐 Website</strong>
                        <span>www.carwashtrolley.co</span>
                    </div>

                </div>

                {/* Contact Form */}

                <form
                    className="contact-form"
                    onSubmit={handleSubmit(onSubmit)}
                >

                    <input
                        type="text"
                        placeholder="Your Name"
                        {...register("name")}
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        {...register("email")}
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        {...register("phone")}
                    />

                    <input
                        type="text"
                        placeholder="Company Name"
                        {...register("company")}
                    />

                    <textarea
                        rows="6"
                        placeholder="Tell us about your requirements..."
                        {...register("message")}
                    />

                    <button type="submit">
                        Send Inquiry
                    </button>

                </form>

            </div>

        </section>
    );
};

export default ContactSection;