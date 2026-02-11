import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div
      className="contact-page"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0.85)
          ),
          url(${process.env.PUBLIC_URL}/images/contact-bg.webp)
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <section className="contact-hero">
        <h1>Get in Touch</h1>
        <p>
          Have questions about events, registrations, or partnerships?  
          We’re here to help.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>

          <p>
            📍 <strong>Location:</strong><br />
            Mumbai, Maharashtra, India
          </p>

          <p>
            📧 <strong>Email:</strong><br />
            support@activepulse.com
          </p>

          <p>
            📞 <strong>Phone:</strong><br />
            +91 98765 43210
          </p>

          <div className="contact-note">
            We usually respond within <strong>24 hours</strong>.
          </div>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
