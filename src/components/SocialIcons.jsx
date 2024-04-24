import React from 'react';

const SocialIcons = ({links}) => {
  return (

      <div className="social-icons">
        {links.map((link, index) => (
          <a key={index} href={link.url} target='_blank' className='icon'> {link.icon}</a>
        ))}
      </div>
  );
}

export default SocialIcons;