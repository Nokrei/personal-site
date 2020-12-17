import React from 'react';
import ProjectCard from './ProjectCard';
import divingPn from '../images/diving-project.png';
import divingJp from '../images/diving-project.jp2';
import divingWe from '../images/diving-project.webp';
import documentationPn from '../images/documentation.png';
import documentationJp from '../images/documentation.jp2';
import documentationWe from '../images/documentation.webp';
import weatherPn from '../images/weather.png';
import weatherJp from '../images/weather.jp2';
import weatherWe from '../images/weather.webp';
import unsplashPn from '../images/unsplash.png';
import unsplashJp from '../images/unsplash.jp2';
import unsplashWe from '../images/unsplash.webp';
import fitnessPn from '../images/fitness.png';
import fitnessJp from '../images/fitness.jp2';
import fitnessWe from '../images/fitness.webp';
import bookSearchPn from '../images/bookSearch.png';
import bookSearchJp from '../images/bookSearch.jp2';
import bookSearchWe from '../images/bookSearch.webp';
import html from '../images/html-logo.png';
import css from '../images/css-logo.png';
import npm from '../images/npm-logo.png';
import js from '../images/js-logo.png';
import rlogo from '../images/react-logo.png';
import nodeLogo from '../images/node-logo.png';
import mongoLogo from '../images/mongo-logo.png';
import webpackLogo from '../images/webpack-logo.png';
import expressLogo from '../images/express-logo.png';

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio__container">
      <ProjectCard
          title="Book Search App"
          desc="A Book search application.The user can search by title, author or ISBN. They can then click on the author's name and go to the writer's details page, where they can also see all the author's books.
          The Goodreads API powering the search gave me some problems - the response is in XML so I had to parse it to JSON, they do not include the CORS header in ANY of their API calls, so I had to route the request through cors-anywhere.herokuapp, and it has a rate limit of one request per second, that's why I didn't make the results load with every key stroke, also I have spent about half a day in total resetting the API key, and waiting for it to let me use it again - been getting the 429 error a lot while testing calls. "
          link="https://pm-goodreads-app.netlify.app/"
          image={bookSearchPn}
          we={bookSearchWe}
          jp={bookSearchJp}
          pn={bookSearchPn}
          stack1={html}
          stack2={css}
          stack3={rlogo}
          stack4={js}
          stack5={npm}
          stack6={webpackLogo}
          tooltip1="HTML5"
          tooltip2="CSS3"
          tooltip3="ReactJS"
          tooltip4="JavaScript"
          tooltip5="NPM"
          tooltip6="Webpack"
        />
        <ProjectCard
          title="Fitness App"
          desc="A Fitness Application. It is composed of a variety of fitness calculators such as BMI, BMR, Body Fat Percentage. The user can also calculate calories spent during exercise and meal macronutrients.
          I made the App using ReactJS, majority of the styling is done with the use of Material UI. The responsiveness is executed via a custom hook."
          link="https://nok-fitness.netlify.app/"
          image={fitnessPn}
          we={fitnessWe}
          jp={fitnessJp}
          pn={fitnessPn}
          stack1={html}
          stack2={css}
          stack3={rlogo}
          stack4={js}
          stack5={npm}
          stack6={webpackLogo}
          tooltip1="HTML5"
          tooltip2="CSS3"
          tooltip3="ReactJS"
          tooltip4="JavaScript"
          tooltip5="NPM"
          tooltip6="Webpack"
        />
        <ProjectCard
          title="Diving Center website"
          desc="The final team project for my full-stack coding bootcamp. "
          link="https://diving-project-front.herokuapp.com/"
          image={divingPn}
          we={divingWe}
          jp={divingJp}
          pn={divingPn}
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
          image={unsplashPn}
          we={unsplashWe}
          jp={unsplashJp}
          pn={unsplashPn}
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
          image={weatherPn}
          we={weatherWe}
          jp={weatherJp}
          pn={weatherPn}
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
          image={documentationPn}
          we={documentationWe}
          jp={documentationJp}
          pn={documentationPn}
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
