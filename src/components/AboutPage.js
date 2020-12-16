import React from 'react';
import personal from '../images/personal.png';

const AboutPage = () => {
  return (
    <div className="aboutPage" id="aboutPage">
      <div className="aboutPage__container">
        <h1>About me</h1>
        <br />
        <div className="aboutPage__content">
          <p>
            I am a web developer focusing mainly on the front-end, however I
            have the ability to deliver full stack applications as well. <br /><br/>{' '}
            My tech stack is HTML5, CSS3, JavaScript ES6+, ReactJS,
            NodeJS(Express), MongoDB(Mongoose). I have experience using Version
            Control Systems(GIT) and Package Managers(NPM). <br /> <br/>In my
            projects I practice the principles of Responsive Web Design, Mobile
            First Design and I follow the BEM methodology. <br /> <br/>A large part of
            my professional career revolved around IT, but it is in web
            development where I found my true passion and calling. <br /><br/>
            Recently I have completed the Astrolabs Full-Stack Developer
            Bootcamp, which greatly supplemented my existing skills and
            knowledge. I am extremely passionate about my work and I always want
            to learn more. <br /><br/>I am open to both freelance opportunities and
            full-time positions.
          </p>
          <img className="personalPic" src={personal} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
