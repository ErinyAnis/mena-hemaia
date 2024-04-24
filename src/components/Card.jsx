import React from "react";
import CardSocialIcons from "./CardSocialIcons";

function Card({ image, title, description, link, linkText, socialLinks, accountName }) {
  return (
    <>
      <div className="account-card">
        <a href={link} target="_blank">
          <div className="main-img">
            <img src={image} alt={title} />
          </div>
        </a>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="link-btn">
            <a href={link}>{linkText}</a>
          </div>
          <div className="social-links">
            <CardSocialIcons links={socialLinks} accountName={accountName}  />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
