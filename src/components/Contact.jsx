import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ztggmvh",
        "template_7fmch2f",
        form.current,
        "t0doVnmxPVRV3Ow6o"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-text">
        <h2>
          Contact <span>Me</span>
        </h2>

        <h4>Let's Work Together</h4>

        <p>
          Have a project in mind or want to collaborate?
          <br />
          I'd love to hear from you. Feel free to reach out with any
          questions,
          <br />
          opportunities, or ideas, and I'll get back to you as soon as
          possible.
          <br />
          Let's build something amazing together!
        </p>

        <div className="contact-list">
          <li>
            <FaEnvelope className="contact-icon" />
            oluwadunsin017@gmail.com
          </li>

          <li>
            <FaPhoneAlt className="contact-icon" />
            +234 808 270 3112
          </li>
        </div>

        <div className="contact-icons">
          <a href="https://www.tiktok.com/@softiedunsin_0?_r=1&_t=ZS-98KHHnKyt53">
            <FaTiktok />
          </a>

          <a href="https://www.instagram.com/oluwadunsin_1706?igsh=NXE3eWw1ZjhjbHk4&utm_source=qr">
            <FaInstagram />
          </a>

          <a href="https://x.com/oluwadunsin0017?s=11">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Enter Your Subject"
            required
          />

          <textarea
            name="message"
            rows="10"
            placeholder="Enter Your Message"
            required
          ></textarea>

          <p className="form-note">
            I'll get back to you within 24 hours.
          </p>

          <button type="submit" className="send">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
