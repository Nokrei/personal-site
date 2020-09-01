import React from 'react';
import git from '../images/github.png';
import linked from '../images/in.png';

const Footer = () => {
  return (
    <footer>
      <p>Copyright Piotr Mrozowski {new Date().getFullYear()}</p>
      <div className="footer__icons">
        <a href="https://github.com/Nokrei" target='_blank'>
          <img className="footer__icons--icon" src={git} alt="github" />
        </a>

        <a href="https://www.linkedin.com/in/piotr-mrozowski-26ab03198/" target='_blank'>
          <img className="footer__icons--icon" src={linked} alt="linkedin" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
