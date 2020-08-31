import React from 'react';
import documentation from '../images/documentation.png';
import weather from '../images/weather.png';
import unsplash from '../images/unsplash.png';
const Portfolio = () => {
  return (
    <div className="portfolio" id='portfolio'>
      <h2>Portfolio</h2>
      <div className="portfolio__container">
        <div className="portfolio__container--project">
          <img
            className="portfolio__container--project--image"
            src={documentation}
          />
          <p>Documentation page</p>
        </div>
        <div className="portfolio__container--project">
          <img className="portfolio__container--project--image" src={weather} />
          <p>Weather App</p>
        </div>
        <div className="portfolio__container--project">
          <img
            className="portfolio__container--project--image"
            src={unsplash}
          />
          <p>Image finder App</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
