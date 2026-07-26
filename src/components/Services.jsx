import React from 'react'

import "./Services.css";
import { FaCode, FaPaintBrush, FaApple } from "react-icons/fa";

function Services() {
    return (
        <div className="services" id="services">
            <h2 className="heading">
                My <span>Services</span>
            </h2>

            <div className="services-container">

                <div className="service-box">
                    <FaCode className="icon" />
                    <h3>Frontend Development</h3>
                    <p>
                        I Build responsive, interactive and <br />visually appealing websites using <br />HTML, CSS, JavaScript and React <br />with a focus on creating smooth user experience.
                    </p>

                    {/* <button>Read More</button> */}
                </div>

                <div className="service-box">
                    <FaCode className="icon" />
                    <h3>Backend Development</h3>
                    <p>
                        I develop secure and scalable <br />server-side applications using <br />Node.js,
                        Express.js and MongoDB, <br />creating efficient APIs and handling <br />data
                        management.
                    </p>

                    {/* <button>Read More</button> */}
                </div>

                <div className="service-box">
                    <FaApple className="icon" />

                    <h3>UI/UX & Graphic Design</h3>

                    <p>
                        I design clean user interfaces, <br />branding materials, flyers <br />and social
                        media graphics that combine <br />creativity with functionality.
                    </p>

                    {/* <button>Read More</button> */}
                </div>

            </div>
        </div>
    );
}

export default Services;
