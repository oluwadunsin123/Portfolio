import React from 'react'

import "./Services.css";
import { FaCode, FaPaintBrush } from "react-icons/fa";

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
                        I Build responsive, interactive and visually appealing websites using HTML, CSS, JavaScript and React with a focus on creating smooth user experience.
                    </p>

                    {/* <button>Read More</button> */}
                </div>

                <div className="service-box">
                    <FaCode className="icon" />
                    <h3>Backend Development</h3>
                    <p>
                        I develop secure and scalable server-side applications using Node.js,
                        Express.js and MongoDB, creating efficient APIs and handling data
                        management.
                    </p>

                    {/* <button>Read More</button> */}
                </div>

                <div className="service-box">
                    <FaPaintBrush className="icon" />

                    <h3>UI/UX & Graphic Design</h3>

                    <p>
                        I design clean user interfaces, branding materials, flyers and social
                        media graphics that combine creativity with functionality.
                    </p>

                    {/* <button>Read More</button> */}
                </div>

            </div>
        </div>
    );
}

export default Services;
