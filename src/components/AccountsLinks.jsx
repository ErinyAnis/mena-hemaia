import React from "react";
import Card from "./Card";
import cardImg1 from "../assets/card-img-1.png";
import CardImg2 from "../assets/card-img-2.png";
import * as FaIcons from "react-icons/fa";

const AccountsLinks = () => {

    const socialLinks = [
        { url: 'https://www.facebook.com', icon: <FaIcons.FaLinkedinIn /> },
        { url: 'https://www.instagram.com', icon: <FaIcons.FaYoutube /> },
        { url: 'https://twitter.com', icon: <FaIcons.FaLinkedinIn /> },
        { url: 'https://www.linkedin.com', icon: <FaIcons.FaYoutube /> },
      ];

  return (
    <>
      <section className="accounts-links" id="accounts">
        <div className="sec-padding">
          <div className="container">
            <div className="row g-5 justify-content-center">
              <div className="col-lg-5">
                <Card
                  image={cardImg1}
                  title="If you have questions about accounting, tax, or finance"
                  description="Accountack is here to help! Book a FREE consultation or visit our website!"
                  linkText="www.Accountack.com"
                  link='https://www.facebook.com/'
                  socialLinks={socialLinks}
                  accountName="Accountack"
                />
              </div>
              <div className="col-lg-5">
                <Card
                  image={CardImg2}
                  title="If you're a student interested in our academy"
                  description="MenaTCP Education Academy is here for you! Visit our website or book a FREE consultation!"
                  linkText="www.Accountack.com"
                  link='https://www.facebook.com/'
                  socialLinks={socialLinks}
                  accountName="MenaTCP"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountsLinks;
