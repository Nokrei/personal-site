import React, {useState, useEffect} from 'react';
import Particles from 'react-particles-js';

const MainPage = () => {

  

  const [scrollPos, setScrollPos] = useState(10)

  const handleClick = ()=> {
    setScrollPos(window.pageYOffset),
    console.log(scrollPos);
  }
    
  
  console.log(scrollPos);

  return (
    <div className="mainPage">
      
        <Particles style={{position:"absolute"}}
      params= {{
        particles: {
          number: {
            value: 100,
            density:{
              enable:true,
              value_area:1000,
            }
          },
        },interactivity: {
          detectsOn: "window",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          }},
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
      }}
      />
     
      <div className="navigation">
        <div className="titleBar">
          <div className="titleBar--name">
            <h1>Piotr Mrozowski</h1>
            <p>web development</p>
          </div>
          <nav className="titleBar--nav">
            <p>About</p>
            <p className="titleBar--nav-bordered">Projects</p>
            <p>Contact</p>
          </nav>
        </div>
        <div className="line"></div>
      </div>

      <div className="mainPage--content">
        
        <span>Custom created</span> <br />
        
        <span>business</span> <br /> <span>transformations</span>
        
        </div>
       
        <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default MainPage;
