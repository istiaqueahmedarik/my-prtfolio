import React from "react";
import Particles from "react-particles-js";
import TypeWriter from "react-typewriter";

const Header = ({ data }) => {
  
  if (data) {
    var pic = "images/" + data.pic
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      
      <div className="row banner">
      <Particles 
        
        params={{ 
          particles: { 
            "size": {
              "value": 2.5,
          },

            "collisions": {
	            "enable": false
	        },
          
          "line_linked": {
            "enable": true,
            "distance": 90,
            "opacity": 0.75,
        },
            number: { 
              value: 800,
              
              
              density: { 
                enable: true, 
                value_area: 1500, 
              } 
            }, 
          },
          "polygon":{
            "draw": {
	            "enable": true,
	            "stroke": {
	                "color": "RED"
	            }
	        }
          },
          "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        } 
        }} 
      /> 
      
        <div className="banner-text">
        <img className="pic" src={pic}/>
          <h1 className="responsive-headline">
            
            <TypeWriter typing={0.7}>{name ? `I'm ${name}.` : null}</TypeWriter>
            
          </h1>
          <h3>
            Live in {city}. <span>{occupation}</span>. {description}.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
