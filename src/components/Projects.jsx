import React from 'react'

import "./Projects.css";

import Sign from "../assets/image/Sign.png"
import KBK from "../assets/image/KBK.png";
import Restaurant from "../assets/image/Restaurant.png";
import KBK2 from "../assets/image/KBK2.png";

import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
  return (
    <div className="projects" id="projects">

      <div className="project-title">

        <h5>Portfolio</h5>

        <h2>Latest <span>Project</span></h2>

      </div>

      <div className="project-container">

        {/* Project One */}

        <div className="project-box">

          <img src={Sign} alt="Portfolio Website" />

          <div className="project-layer">

            <h4>Signin project</h4>

            <p>
              A responsive Signin website built 
               showcasing my skills .
            </p>

            <div className="project-icons">

              <a
                href="https://signin-theta-mauve.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FiExternalLink />
              </a>

              <a
                href="https://github.com/oluwadunsin123"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

            </div>

          </div>

        </div>
        {/* Project four */}

        <div className="project-box">

          <img src={KBK2} alt="cake site" />

          <div className="project-layer">

            <h4>KBK new site</h4>

            <p>
              A responsive cake website built 
               showcasing my skills and designs.
            </p>

            <div className="project-icons">

              <a
                href="https://kbk-cake-site.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FiExternalLink />
              </a>

              <a
                href="https://github.com/oluwadunsin123"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

            </div>

          </div>

        </div>

        {/* Project Two */}

        <div className="project-box">

          <img src={KBK} alt="Restaurant Website" />

          <div className="project-layer">

            <h4>Baking Website</h4>

            <p>
              A fully responsive Cake website with
              menu, gallery and reservation features.
            </p>

            <div className="project-icons">

              <a
                href="https://kbk-cakes.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <FiExternalLink />
              </a>

              <a
                href="https://github.com/oluwadunsin123"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

            </div>

          </div>

        </div>

        {/* Project Three */}

        <div className="project-box">

          <img src={Restaurant} alt="E-Commerce Website" />

          <div className="project-layer">

            <h4>Restaurant Website</h4>

            <p>
              A fully responsive Restaurant website with
              menu, gallery and reservation features.
            </p>

            <div className="project-icons">

              <a
                href="https://dunsin-restaurant-site.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <FiExternalLink />
              </a>

              <a
                href="https://github.com/oluwadunsin123"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Projects;
