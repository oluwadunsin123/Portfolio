import React from 'react'

import "./About.css";

import myPicture from "../assets/image/myPicture.png"

function About() {
    return (
        <div className="about" id="about">
            <div className="about-image">
                <img src={myPicture} alt="Profile" />
            </div>

            <div className="about-content">
                <h2>
                    About <span>Me</span>
                </h2>

                <h3>Frontend Developer</h3>

                <p>
                    I am a passionate Full-Stack Developer who enjoys transforming
                    ideas into functional digital solutions <br />by combining clean frontend designs
                    with powerful backend development. <br />
                    I believe great applications should be visually appealing, fast, and easy to use.
                    <br />Every project is an opportunity to create seamless user experiences while writing clean,<br />
                    and maintainable code.
                    I’m constantly learning new technologies and improving my skills to deliver high-quality solutions.
                </p>

                {/* <button>Read More</button> */}
            </div>
        </div>
    );
}

export default About;
