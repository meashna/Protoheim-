import React from "react";
import "./About.css";
import abtimg from "../../assets/abtimg.png";
import Team from "../Team/Team";

const About = () => {
  return (
    <div>
      <div className="abt-subtitle">Who are we?</div>
      <div className="abt-title">About Us</div>
      <div className="abt-container">
        <div className="abt-left">
          <img src={abtimg} alt="abt-img" className="abt-img" />
        </div>
        <div className="abt-right">
          Protoheim is established in 2023 with the motive to develop industrial
          knowledge, mentorship, and hardware innovation. Protoheim is mainly
          concentrated on the development of robotics and automation solutions
          to address the most significant social challenges as well as providing
          education-related services. In the future, we are planning for the
          development of new AR, VR, and MR technologies in Education and other
          industries.
        </div>
      </div>
      <Team />
    </div>
  );
};

export default About;
