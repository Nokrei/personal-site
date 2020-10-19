import React from 'react';
import ProjectCard from './ProjectCard'
import documentation from '../images/documentation.png';
import weather from '../images/weather.png';
import unsplash from '../images/unsplash.png';
import html from '../images/html.png';
import css from '../images/css.png';
import npm from '../images/npm.png';
import js from '../images/js.png';
import rlogo from '../images/react-logo.png';
import parc from '../images/parcel.svg';
const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio__container">
       <ProjectCard
       title='Documentation page'
       desc='A simple documentation page for JavaScript'
       link='https://codepen.io/Nokrei/full/rXygyq'
       image={documentation}
       stack={html}
       stack2={css}
       />
       <ProjectCard
       title='Weather App'
       desc="A weather web application. Initially it uses the locationiq API to detect user's position and display the weather for that location. It also uses the openweather API to display the weather forecast for any location searched by the user. Number of searches limited due to using free variants of the APIs."
       link='https://pm-react-weather-app.netlify.app/'
       image={weather}
       stack={html}
       stack2={css}
       stack3={rlogo}
       stack4={js}
       stack5={npm}
       />
        <ProjectCard
       title='Image search APP'
       desc="An image search web application. It uses the Unsplash API to display imagaes searched by the user. Infinite scrolling is acheved via the implementation of a custom React hook, the layout and loading-in animation by the use of the StackGrid library. Number of searches limited due to using the free variant of the Unsplash API."
       link='https://react-unsplash-app.netlify.app/'
       image={unsplash}
       stack={html}
       stack2={css}
       stack3={rlogo}
       stack4={js}
       stack5={npm}
       />
       
      </div>
    </div>
  );
};

export default Portfolio;
