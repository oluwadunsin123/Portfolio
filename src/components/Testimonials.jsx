import React, { useState, useEffect } from "react";
import "./Testimonials.css";

import Testimony1 from "../assets/image/Testimony1.jpeg";
import Testimony2 from "../assets/image/Testimony2.jpeg";
import Testimony3 from "../assets/image/Testimony3.jpeg";

import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Testimonials() {

  const testimonials = [

    {
      image: Testimony1,
      name: "Sarah Johnson",
      role: "Business Owner",
      text: "Working with Oluwadunsin was an amazing experience. The website was modern, responsive and delivered exactly as requested."
    },

    {
      image: Testimony2,
      name: "Mary Brown",
      role: "Entrepreneur",
      text: "Professional, creative and easy to work with. I loved the design and smooth user experience of my website."
    },

    {
      image: Testimony3,
      name: "Emily Wilson",
      role: "Startup Founder",
      text: "Excellent communication and attention to detail. The final project exceeded my expectations."
    }

  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const slider = setInterval(() => {

      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );

    }, 5000);

    return () => clearInterval(slider);

  }, []);

  const nextSlide = () => {

    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);

  };

  const prevSlide = () => {

    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);

  };

  return (

    <section className="testimonials" id="testimonials">

      <div className="testimonial-heading">

        <h5>Testimonials</h5>

        <h2>What Clients Say</h2>

      </div>

      <div className="slider">

        <button className="arrow left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div className="testimonial-card fade">

          <FaQuoteLeft className="quote" />

          <div className="stars">

            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

          </div>

          <p>{testimonials[current].text}</p>

          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
          />

          <h4>{testimonials[current].name}</h4>

          <span>{testimonials[current].role}</span>

        </div>

        <button className="arrow right" onClick={nextSlide}>
          <FaChevronRight />
        </button>

      </div>

      <div className="dots">

        {testimonials.map((item, index) => (

          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>

        ))}

      </div>

    </section>

  );

}

export default Testimonials;