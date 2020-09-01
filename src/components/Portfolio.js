import React from 'react';
import documentation from '../images/documentation.png';
import weather from '../images/weather.png';
import unsplash from '../images/unsplash.png';
import html from '../images/css-logo.png';
import js from '../images/js.png';
import rlogo from '../images/react-logo.png';
import parc from '../images/parcel.svg';
const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio__container">
        <div className="portfolio__container--project">
          <a href="https://codepen.io/Nokrei/full/rXygyq" target="_blank">
            {' '}
            <img
              className="portfolio__container--project--image"
              src={documentation}
            />
          </a>
          <p>Documentation page</p>
          <br />
          <div className="tech">
            <p>Technologies used:</p>{' '}
            <div className="tech__images">
              <img className="portfolio__container--project--tech" src={html} />
            </div>
        
          </div>
        </div>
        <div className="portfolio__container--project">
          <a href="https://focused-colden-1baa12.netlify.app/" target="_blank">
            <img
              className="portfolio__container--project--image"
              src={weather}
            />
          </a>
          <p>Weather App</p>
          <br/>
          <div className="tech">
            <p>Technologies used:</p>
            <div className="tech__images">
              <img className="portfolio__container--project--tech" src={html} />
              <img className="portfolio__container--project--tech" src={js} />
              <img
                className="portfolio__container--project--tech"
                src={rlogo}
              />
              <img className="portfolio__container--project--tech" src={parc} />
            </div>
          </div>
        </div>
        <div className="portfolio__container--project">
          <a
            href="https://compassionate-lovelace-ca8460.netlify.app/"
            target="_blank"
          >
            <img
              className="portfolio__container--project--image"
              src={unsplash}
            />
          </a>
          <p>Image finder App</p>
          <br/>
          <div className="tech">
            <p>Technologies used:</p>
            <div className="tech__images">
              <img className="portfolio__container--project--tech" src={html} />
              <img className="portfolio__container--project--tech" src={js} />
              <img
                className="portfolio__container--project--tech"
                src={rlogo}
              />
              <img className="portfolio__container--project--tech" src={parc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
