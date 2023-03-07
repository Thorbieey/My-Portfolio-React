import React from "react";
import profilePicture from "../images/profile-picture.jpg";
import "../css/about.css";

function About() {
  return (
    <div className="row about-container">
      <h1 className="page-header">ABOUT ME</h1>
      <img src={profilePicture} className="col-lg-4 col-sm-8 profile-picture" alt="Tobi Olajide"></img>
      <div className="col-lg-6 col-sm-12 about-text">
        <p>As an innovative front-end web developer, I am passionate about creating cutting-edge apps that provide an exceptional user experience. My focus is on mobile-first design and development, and I am continuously expanding my skillset to stay ahead of the curve. Currently, I am training at the Trilogy coding boot camp to earn a certificate in front-end web development and further enhance my abilities.</p>
        <p>I am an adaptable problem-solver, and my background in mechatronics allows me to bring unique perspectives and innovative solutions to the table. Throughout my front-end certification program and academic journey, I have honed my ability to identify and resolve technical issues with efficiency and effectiveness. Additionally, I am a strong team player with experience in collaborating with web designers and other developers to bring projects to fruition. I am eager to continue growing as a front-end web developer and bring my skills and creativity to the industry.</p>
      </div>
    </div>
  );
}

export default About;
