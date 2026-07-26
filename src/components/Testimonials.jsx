import React from 'react'

import "./Testimonials.css";

import Testimony1 from "../assets/image/Testimony1.jpeg";
import Testimony2 from "../assets/image/Testimony2.jpeg";
import Testimony3 from "../assets/image/Testimony3.jpeg";


import { FaQuoteLeft, FaStar } from "react-icons/fa";

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">

      <div className="testimonial-heading">

        <h5>Testimonials</h5>

        <h2>What People Say</h2>

      </div>

      <div className="testimonial-container">

        {/* Testimonial 1 */}

        <div className="testimonial-card">

          <FaQuoteLeft className="quote" />

          <p>
            Working with Dunsin was an amazing experience.
            The website was modern, responsive and delivered
            exactly as requested.
          </p>

          <div className="stars">

            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

          </div>

          <div className="client">

            <img src={Testimony1} alt="Client" />

            <div>

              <h4>Sarah Johnson</h4>

              <span>Business Owner</span>

            </div>

          </div>

        </div>

        {/* Testimonial 2 */}

        <div className="testimonial-card">

          <FaQuoteLeft className="quote" />

          <p>
            Professional, creative and easy to work with.
            I loved the design and smooth user experience
            of my website.
          </p>

          <div className="stars">

            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

          </div>

          <div className="client">

            <img src={Testimony2} alt="Client" />

            <div>

              <h4>Mary Brown</h4>

              <span>Entrepreneur</span>

            </div>

          </div>

        </div>

        {/* Testimonial 3 */}

        <div className="testimonial-card">

          <FaQuoteLeft className="quote" />

          <p>
            Excellent communication and attention to detail.
            The final project exceeded my expectations.
          </p>

          <div className="stars">

            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />

          </div>

          <div className="client">

            <img src={Testimony3} alt="Client" />

            <div>

              <h4>Emily Wilson</h4>

              <span>Startup Founder</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;
