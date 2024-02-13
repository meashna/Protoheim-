import React from "react";
import "./Footer.css";
import footerlogo from "../../assets/footer-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div>
      <footer className="footer">
        <div className="footer-hori1">
          <div className="ver1">
            <div className="footer-logo">
              <img src={footerlogo} className="logo-imgfooter" />
            </div>
            <div className="termspolicy">
              <div className="terms">
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className="termspolicy-link"
                >
                  Terms and Conditions
                </a>
              </div>
              <div className="policy">
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className="termspolicy-link"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
          <div className="ver2">
            <div className="footer-title">OUR MENTORS</div>
            <div className="footerp">
              <p>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className="footer-link"
                >
                  IoT Mentors
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className="footer-link"
                >
                  Cyber Security Mentors
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className="footer-link"
                >
                  Hardware Mentors
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className="footer-link"
                >
                  AR/VR Mentors
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className="footer-link"
                >
                  Web Mentors
                </a>
              </p>
            </div>
          </div>
          <div className="ver3">
            <div className="footer-title">OUR SOCIALS</div>
            <div className="footerp">
              {/* <p>Instagram</p>
              <p>Facebook</p>
              <p>Linkedin</p>
              <p>X</p>
              <p>Youtube</p> */}
              <p>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className="footer-link"
                >
                  Instagram
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className="footer-link"
                >
                  X
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className="footer-link"
                >
                  Twitter
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className="footer-link"
                >
                  Linkedin
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className="footer-link"
                >
                  YouTube
                </a>
              </p>
            </div>
          </div>
          <div className="ver4">
            <div className="footer-title">OTHER LINKS</div>
            <div className="footerp">
              <p>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className="footer-link"
                >
                  About
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className="footer-link"
                >
                  Courses
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className="footer-link"
                >
                  Founders
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className="footer-link"
                >
                  Testimonials
                </a>
              </p>
              <p>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  className="footer-link"
                >
                  Careers
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-hori2">
          <div className="copy">
            Copyright © {currentYear} Protoheim. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
