import React from 'react'
import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>

      <div className="skills-container">

        {/* Technical Skills */}
        <div className="technical-skills">
          <h3>Technical Skills</h3>

          <div className="skill">
            <p>HTML <span>95%</span></p>
            <div className="bar"><span className="html"></span></div>
          </div>

          <div className="skill">
            <p>CSS <span>90%</span></p>
            <div className="bar"><span className="css"></span></div>
          </div>

          <div className="skill">
            <p>JavaScript <span>85%</span></p>
            <div className="bar"><span className="javascript"></span></div>
          </div>

          <div className="skill">
            <p>React <span>80%</span></p>
            <div className="bar"><span className="react"></span></div>
          </div>

          <div className="skill">
            <p>Node.js <span>75%</span></p>
            <div className="bar"><span className="node"></span></div>
          </div>

          <div className="skill">
            <p>Express.js <span>75%</span></p>
            <div className="bar"><span className="express"></span></div>
          </div>

          <div className="skill">
            <p>MongoDB <span>70%</span></p>
            <div className="bar"><span className="mongo"></span></div>
          </div>

          <div className="skill">
            <p>Git & GitHub <span>80%</span></p>
            <div className="bar"><span className="git"></span></div>
          </div>
          <div className="skill">
            <p>Tailwind CSS<span>90%</span></p>
            <div className="bar"><span className="tailwin"></span></div>
          </div>
        </div>

        {/* Professional Skills */}
       <div className="professional-skills">
  <h3>Professional Skills</h3>

  <div className="professional-container">

    <div className="radial">
      <div className="circle">90%</div>
      <p>Creativity</p>
    </div>

    <div className="radial">
      <div className="circle">85%</div>
      <p>Communication</p>
    </div>

    <div className="radial">
      <div className="circle">80%</div>
      <p>Problem Solving</p>
    </div>

    <div className="radial">
      <div className="circle">90%</div>
      <p>Teamwork</p>
    </div>

  </div>
</div>

      </div>
    </section>
  );
}

export default Skills;