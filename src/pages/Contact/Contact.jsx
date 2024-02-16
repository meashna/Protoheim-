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
      <div className="contact-subtitle">hi</div>
      <div className="contact-title">hlo</div>
      <div className="contact-conatainer">
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
              <div className="mail-number">
                <div className="mail">
                  <div className="mail-logo">
                    <div className="mail-box">
                      <div className="mailbox-logo">
                        <IoMailOutline />
                      </div>
                    </div>
                  </div>
                  <div className="mail-details">
                    <div className="top-mail">Mail</div>
                    <div className="bottom-mail">protoheim@gmail.com</div>
                  </div>
                </div>
                <div className="mail">
                  <div className="mail-logo">
                    <div className="mail-box">
                      <div className="mailbox-logo">
                        <IoCallOutline />
                      </div>
                    </div>
                  </div>
                  <div className="mail-details">
                    <div className="top-mail">Mail</div>
                    <div className="bottom-mail">protoheim@gmail.com</div>
                  </div>
                </div>
              </div>
              <div className="loc">
                {" "}
                <div className="loc">
                  <div className="mail-logo">
                    <div className="mail-box">
                      <div className="mailbox-logo">
                        <MdOutlineLocationOn />
                      </div>
                    </div>
                  </div>
                  <div className="mail-details">
                    <div className="top-mail">Mail</div>
                    <div className="bottom-mail">protoheim@gmail.com</div>
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
