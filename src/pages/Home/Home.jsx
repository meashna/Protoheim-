import React from "react";
import "./Home.css";
import { FaArrowRight } from "react-icons/fa";
import heroimg from "../../assets/hero-img.png";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="homecol">
          <div className="home-col1">
            <div className="hometitle">
              Grow up your skills<br></br> with{" "}
              <span class="highlight-word">Protoheim.</span>
            </div>

            <div className="home-subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </div>
            <div className="homebutton">
              <div className="home-btn">Explore Protoheim</div>
              <div className="home-arrow">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="home-col2">
            <img src={heroimg} className="hero-img" />
          </div>
        </div>
      </div>
      <div className="bars">
        <div className="bar1"></div>
        <div className="bar2">
          <div className="bar-text">Learn with Protoheim..</div>
        </div>
      </div>
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
