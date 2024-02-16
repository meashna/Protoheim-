import React from "react";
import "./Contact.css";
import contact from "../../assets/contact.png";
import { BsArrowRight } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <div className="contact-subtitle">Want to know more?</div>
      <div className="contact-title">Get in Touch</div>
      <div className="contact-containermain">
        <div className="contact-left">
          <div className="contact-form">
            <form className="contactform-areas">
              <input
                className="contact-inputs"
                type="text"
                name="name"
                placeholder="Full Name"
                // value={formData.name}
                // onChange={handleChange}
              />
              <input
                className="contact-inputs"
                type="email"
                name="email"
                placeholder="Email Address"
                // value={formData.email}
                // onChange={handleChange}
              />
              <input
                className="contact-inputs"
                type="text"
                name="subject"
                placeholder="Write any message here..."
                // value={formData.subject}
                // onChange={handleChange}
              />
              <button type="submit" className="contact-submit">
                <div>Get in Touch </div>
                <div>
                  {" "}
                  <BsArrowRight />
                </div>
              </button>
            </form>
          </div>
          <div className="contact-details">
            <div className="contact-info">Contact Info</div>
            <div className="full-contacts">
              <div className="contact-containerup">
                <div className="contactrows-up">
                  <div className="contactinfologo-box">
                    <div className="contactinfo-logo">
                      <IoMailOutline />
                    </div>
                  </div>
                  <div className="contact-details">
                    <div className="top-details">Mail</div>
                    <div className="bottom-details">protoheim@gmail.com</div>
                  </div>
                </div>
                <div className="contactrows-up">
                  <div className="contactinfologo-box">
                    <div className="contactinfo-logo">
                      <IoCallOutline />
                    </div>
                  </div>
                  <div className="contact-details">
                    <div className="top-details">Contact</div>
                    <div className="bottom-details">12345678</div>
                  </div>
                </div>
              </div>

              <div className="contactrows-down">
                <div className="contactinfologo-box">
                  <div className="contactinfo-logo">
                    <MdOutlineLocationOn />
                  </div>
                </div>
                <div className="contact-details">
                  <div className="top-details">Location</div>
                  <div className="bottom-details">
                    KMEA College of Engineering, Mochamkulam, Aluva
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <img src={contact} alt="" className="contact-png" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
