import React from "react";
import "./Services.css";

import { RiSpeakLine } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import { TiSpannerOutline } from "react-icons/ti";
import { PiStudent } from "react-icons/pi";
import { MdLaptopWindows } from "react-icons/md";
import { IoHardwareChipOutline } from "react-icons/io5";

const Services = () => {
  return (
    <div>
      <div className="services">
        <div className="service-subtitle ">Why are we the best?</div>
        <div className="service-title">Our Services</div>
        <div className="service-container">
          <div className="servicecontainer-1">
            <div className="service-box">
              <div>
                <IoHardwareChipOutline className="service-logo" />
              </div>
              <div className="service-descp">Hardware Solutions</div>
            </div>
            <div className="service-box">
              <RiSpeakLine className="service-logo" />
              <div className="service-descp">Webinars & Talk sessions</div>
            </div>
            <div className="service-box">
              <MdOutlineDesignServices className="service-logo" />
              <div className="service-descp">Product Design & Development</div>
            </div>
          </div>
          <div className="servicecontainer-2">
            <div className="service-box">
              <TiSpannerOutline className="service-logo" />
              <div className="service-descp">Manufacturing & Assembly</div>
            </div>
            <div className="service-box">
              <PiStudent className="service-logo" />

              <div className="service-descp">Trainings & Workshops</div>
            </div>
            <div className="service-box">
              <MdLaptopWindows className="service-logo" />

              <div className="service-descp">Consulting & Tech Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
