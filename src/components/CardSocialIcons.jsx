import React from "react";

const CardSocialIcons = ({ links, accountName }) => {
  return (
    <div className="card-social-icons">
      <div className="d-flex align-items-center gap-2 gap-lg-3 justify-content-between">
        <div className="title">Contact {accountName}:</div>
        <div className="icons d-flex align-items-center">
        {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.icon}
        </a>
      ))}
        </div>
      </div>
    </div>
  );
};

export default CardSocialIcons;
