import { useState } from "react";
import { useForm } from "react-hook-form";
import "./ContactSection.css";
import { sendInquiry } from "../../services/emailService";

const ContactSection = () => {
    const { register, handleSubmit, reset } = useForm();

    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);

    const onSubmit = async (data) => {
        try {
            setSending(true);
            setSuccess(false);

            await sendInquiry(data);

            reset();

            setSuccess(true);

        } catch (error) {
            console.error(error);

            alert("❌ Failed to send inquiry. Please try again.");

        } finally {
            setSending(false);
        }
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
                        <span>+971525694039</span>
                    </div>

                    <div className="contact-item">
                        <strong>✉ Email</strong>
                        <span>info@carwashtrolley.co</span>
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

                    <button type="submit" disabled={sending}>
                        {sending ? "Sending..." : "Send Inquiry"}
                    </button>

                    {success && (
                        <div className="success-message">
                            ✅ Thank you! Your inquiry has been sent successfully.
                            Our team will contact you shortly.
                        </div>
                    )}

                </form>

            </div>
        </section>
    );
};

export default ContactSection;