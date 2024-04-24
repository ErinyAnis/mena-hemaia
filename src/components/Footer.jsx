import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/coloredlogo.webp";
import SocialIcons from "./SocialIcons";
import * as FaIcons from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const socialLinks = [
    { url: "https://www.facebook.com", icon: <FaIcons.FaLinkedinIn /> },
    { url: "https://www.instagram.com", icon: <FaIcons.FaYoutube /> },
    { url: "https://twitter.com", icon: <FaIcons.FaLinkedinIn /> },
    { url: "https://www.linkedin.com", icon: <FaIcons.FaYoutube /> },
  ];

  return (
    <footer>
      <div className="container">
        <div className="sec-padding">
          <div className="text-center mt-3">
            <div className="title">
              <h2 className="mb-1">Subscribe Now</h2>
              <p>Stay up to date with our latest news.</p>
            </div>

            <form action="#">
              <div className="d-flex align-items-center gap-3 flex-wrap justify-content-center">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your email address"
                  required
                />
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </div>
          <div className="d-flex quick-links justify-content-center">
            <div className="">
              <div className="logo-holder">
                <img src={logo} alt="mena hemaia" />
              </div>
            </div>
            <div className="links-container">
              <h3 className="mb-3">Quick Links</h3>
              <div className="d-flex links flex-wrap">
                <div>
                  <Link to="#about" className="link d-block">
                    About me
                  </Link>
                  <Link to="#amazon-book" className="link d-block">
                    Intelligent Strategies Book
                  </Link>
                  <Link to="#" className="link d-block">
                    Subscribe
                  </Link>
                </div>
                <div>
                  <Link to="#accounts" className="link d-block">
                    Visit Accountack Website
                  </Link>
                  <Link to="#accounts" className="link d-block">
                    Visit MenaTCP Website
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-social-links mt-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
              <div className="copy-writes">
                © Copyright 2022, All Rights Reserved by{" "}
                <a href="#">Innovation Scope</a>
              </div>
              <div className="">
                <SocialIcons links={socialLinks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
