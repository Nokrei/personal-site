import React from 'react';
import ProjectCard from './ProjectCard';
import diving from '../images/diving-project.png';
import documentation from '../images/documentation.png';
import weather from '../images/weather.png';
import unsplash from '../images/unsplash.png';
import html from '../images/html-logo.png';
import css from '../images/css-logo.png';
import npm from '../images/npm-logo.png';
import js from '../images/js-logo.png';
import rlogo from '../images/react-logo.png';
import nodeLogo from '../images/node-logo.png';
import mongoLogo from '../images/mongo-logo.png';
import webpackLogo from '../images/webpack-logo.png';
import expressLogo from '../images/express-logo.png';
import parc from '../images/parcel.svg';
const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio__container">
        <ProjectCard
          title="Diving Center website"
          desc="The final team project for my full-stack coding bootcamp. "
          link="https://diving-project-front.herokuapp.com/"
          image={diving}
          stack1={html}
          stack2={css}
          stack3={rlogo}
          stack4={js}
          stack5={npm}
          stack6={nodeLogo}
          stack7={mongoLogo}
          stack8={webpackLogo}
          stack9={expressLogo}
          tooltip1="HTML5"
          tooltip2="CSS3"
          tooltip3="ReactJS"
          tooltip4="JavaScript"
          tooltip5="NPM"
          tooltip6="NodeJS"
          tooltip7="MongoDB"
          tooltip8="Webpack"
          tooltip9="ExpressJS"
        />

        <ProjectCard
          title="Image Search App"
          desc="An image search web application. It uses the Unsplash API to display imagaes searched by the user. Infinite scrolling is acheved via the implementation of a custom React hook, the layout and loading-in animation by the use of the StackGrid library. Number of searches limited due to using the free variant of the Unsplash API."
          link="https://react-unsplash-app.netlify.app/"
          image={unsplash}
          stack1={html}
          stack2={css}
          stack3={rlogo}
          stack4={js}
          stack5={npm}
          tooltip1="HTML5"
          tooltip2="CSS3"
          tooltip3="ReactJS"
          tooltip4="JavaScript"
          tooltip5="NPM"
        />
        <ProjectCard
          title="Weather App"
          desc="A weather web application. Initially it uses the locationiq API to detect user's position and display the weather for that location. It also uses the openweather API to display the weather forecast for any location searched by the user. Number of searches limited due to using free variants of the APIs."
          link="https://pm-react-weather-app.netlify.app/"
          image={weather}
          stack1={html}
          stack2={css}
          stack3={rlogo}
          stack4={js}
          stack5={npm}
          tooltip1="HTML5"
          tooltip2="CSS3"
          tooltip3="ReactJS"
          tooltip4="JavaScript"
          tooltip5="NPM"
        />
        <ProjectCard
          title="Documentation Page"
          desc="A simple documentation page for JavaScript"
          link="https://codepen.io/Nokrei/full/rXygyq"
          image={documentation}
          stack1={html}
          stack2={css}
          tooltip1="HTML5"
          tooltip2="CSS3"
        />
      </div>
    </div>
  );
};

export default Portfolio;
