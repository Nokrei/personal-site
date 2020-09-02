import React from 'react';
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
        <div className="portfolio__container--project">
          <div className="project">
            <a href="https://codepen.io/Nokrei/full/rXygyq" target="_blank">
              {' '}
              <img
                className="portfolio__container--project--image"
                src={documentation}
              />
            </a>
          </div>
          <div className="tech">
            <div className="tech__desc">
              <h2>Documentation page</h2>
              <br />
              <p>
              A simple documentation page for JavaScript.
              </p>
              
            </div>
            <div className="tech__content">
              <h2>Stack:</h2> <br />
              <div className="tech__images">
                <img
                  className="portfolio__container--project--tech"
                  src={html}
                />
                <img
                  className="portfolio__container--project--tech"
                  src={css}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio__container--project">
          <div className="project">
            <a
              href="https://focused-colden-1baa12.netlify.app/"
              target="_blank"
            >
              <img
                className="portfolio__container--project--image"
                src={weather}
              />
            </a>
          </div>

          <div className="tech">
            <div className="tech__desc">
              <h2>Weather App</h2>
              <br />
              <p>
              A weather web application. Initially it uses the locationiq API
                to detect user's position and display the weather for that
                location. It also uses the openweather API to display the
                weather forecast for any location searched by the user. Number
                of searches limited due to using free variants of the APIs.
              </p>
               
              
            </div>
            <div className="tech__content">
              <h2>Stack:</h2>
              <br />

              <div className="tech__images">
                <img
                  className="portfolio__container--project--tech"
                  src={html}
                />
                <img
                  className="portfolio__container--project--tech"
                  src={css}
                />
                <img
                  className="portfolio__container--project--tech"
                  src={npm}
                />
                <img className="portfolio__container--project--tech" src={js} />
                <img
                  className="portfolio__container--project--tech"
                  src={rlogo}
                />
                
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio__container--project">
          <div className="project">
            <a
              href="https://compassionate-lovelace-ca8460.netlify.app/"
              target="_blank"
            >
              <img
                className="portfolio__container--project--image"
                src={unsplash}
              />
            </a>
          </div>
          <div className="tech">
            <div className="tech__desc">
              <h2>Image search APP</h2>
              <br />
              <p>
              An image search web application. It uses the Unsplash API to
                display imagaes searched by the user. Infinite scrolling is
                acheved via the implementation of a custom React hook, the
                layout and loading-in animation by the use of the StackGrid
                library. Number of searches limited due to using the free
                variant of the Unsplash API.
              </p>
                
              
            </div>

            
            <div className="tech__content">
              <h2>Stack:</h2>
              <br />

              <div className="tech__images">
                <img
                  className="portfolio__container--project--tech"
                  src={html}
                />
                <img
                  className="portfolio__container--project--tech"
                  src={css}
                />
                <img
                  className="portfolio__container--project--tech"
                  src={npm}
                />
                <img className="portfolio__container--project--tech" src={js} />
                <img
                  className="portfolio__container--project--tech"
                  src={rlogo}
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
