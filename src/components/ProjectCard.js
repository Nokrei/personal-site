import React from 'react';

const ProjectCard = (props) => {
  return (
    <div className="portfolio__container--project">
      <div className="project">
        <img
          className="portfolio__container--project--image"
          src={props.image}
        />
      </div>
      <div className="tech">
        <div className="tech__desc">
          <h2>{props.title}</h2>
          <a href={props.link} target="blank">
            <br/>
          Link
          <br/>
        </a>
          <br />
          <p>{props.desc}</p>
          
        </div>
        
        <div className="tech__content">
          <h2>Stack:</h2> <br />
          <div className="tech__images">
            <img
              className="portfolio__container--project--tech"
              src={props.stack}
            />
            <img
              className="portfolio__container--project--tech"
              src={props.stack2}
            />
            <img
              className="portfolio__container--project--tech"
              src={props.stack3}
            />
            <img
              className="portfolio__container--project--tech"
              src={props.stack4}
            />
            <img
              className="portfolio__container--project--tech"
              src={props.stack5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
