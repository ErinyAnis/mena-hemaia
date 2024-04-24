import React from "react";
import SocialIcons from "./SocialIcons";
import * as FaIcons from "react-icons/fa";

function About() {

  const socialLinks = [
    { url: 'https://www.facebook.com', icon: <FaIcons.FaLinkedinIn /> },
    { url: 'https://www.instagram.com', icon: <FaIcons.FaYoutube /> },
    { url: 'https://twitter.com', icon: <FaIcons.FaLinkedinIn /> },
    { url: 'https://www.linkedin.com', icon: <FaIcons.FaYoutube /> },
  ];


  return (
    <>
      <section className="about" id="about">
        <div className="container sec-padding">
          <h2>About</h2>
          <h3>About</h3>
          <div className="row mt-3">
            <div className="col-lg-8">
              <p>
                I am motivated by my passion for education and teaching on
                people and tools for resource technology, financial and
                financial strategies, and inclusive finance
              </p>
              <p>
                Thanks to artificial intelligence and digital development, I
                decided to integrate artificial intelligence to clarify complex
                accounting models. I use social media, interactive tutorials,
                and insightful posts to guide audiences on a transformational
                journey toward financial prosperity.
              </p>
            </div>
            <div className="col-lg-4">
              <div className="social-icons-sec">
                <div className="social-heading text-center">
                  Join me on this exciting financial journey guided by my wealth
                  of experience!
                </div>
                <SocialIcons links={socialLinks} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
