import React from "react";
import "./Team.css";
import { FaXTwitter } from "react-icons/fa6";
import { RiFacebookLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import sharan from "../../assets/sharan.png";

const Team = () => {
  return (
    <div>
      <div className="team-subtitle">Meet the pillars</div>
      <div className="team-title">Our Team</div>

      <div className="team-container">
        <div className="team-box">
          <img className="team-pic" src={sharan} />
          <div className="team-name">Sharan K.S</div>
          <div className="team-position">Director</div>
          <div className="team-socials">
            <a href="https://twitter.com">
              <FaXTwitter />
            </a>
            <a href="https://facebook.com">
              <RiFacebookLine />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com">
              <RiLinkedinLine />
            </a>
          </div>
        </div>

        <div className="team-box">
          <img className="team-pic" src={sharan} />
          <div className="team-name">Sharan K.S</div>
          <div className="team-position">Director</div>
          <div className="team-socials">
            <a href="https://twitter.com">
              <FaXTwitter />
            </a>
            <a href="https://facebook.com">
              <RiFacebookLine />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com">
              <RiLinkedinLine />
            </a>
          </div>
        </div>

        <div className="team-box">
          <img className="team-pic" src={sharan} />
          <div className="team-name">Sharan K.S</div>
          <div className="team-position">Director</div>
          <div className="team-socials">
            <a href="https://twitter.com">
              <FaXTwitter />
            </a>
            <a href="https://facebook.com">
              <RiFacebookLine />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com">
              <RiLinkedinLine />
            </a>
          </div>
        </div>

        <div className="team-box">
          <img className="team-pic" src={sharan} />
          <div className="team-name">Sharan K.S</div>
          <div className="team-position">Director</div>
          <div className="team-socials">
            <a href="https://twitter.com">
              <FaXTwitter />
            </a>
            <a href="https://facebook.com">
              <RiFacebookLine />
            </a>
            <a href="https://instagram.com">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com">
              <RiLinkedinLine />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
