import React, { useRef, useEffect } from "react";
import Fade from "react-reveal";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const Header = (props) => {
  const type = useRef(null);

  useEffect(() => {
    if (props.data && props.data.description && props.data.description.length > 0 && props.data.description[0].trim() !== "" && type.current) {
      const typed = new Typed(type.current, {
        strings: props.data.description,
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, [props.data]);


  if (!props.data || !props.data.navbar) return null;

  // Access navbar labels from props.data
  const { home, about, education, resume, portfolio, contact } = props.data.navbar;
  // const project = props.data.project;
  const headerBtns = props.data.headerBtns;
  const name = props.data.name;

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
              {home}
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#about">
              {about}
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#edu">
              {education}
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#resume">
              {resume}
            </a>

          </li>

          <li>
            <a className="smoothscroll" href="#portfolio">
              {portfolio}
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              {contact}
            </a>
          </li>

          {/* <li>
            <a className="smoothscroll" href="#contact">
              {contact}
            </a>
          </li> */}

        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <Fade bottom>
            <h1 className="responsive-headline">{name}</h1>
          </Fade>
          <Fade bottom duration={1200}>
            <div className="App">
              {props.data.description && props.data.description[0].trim() !== "" && (
                <h3>
                  <span ref={type} />
                </h3>
              )}
            </div>
          </Fade>
          <hr />
          <Fade bottom duration={2000}>
            <ul className="social">
              {headerBtns.map((btn, index) => (
                <li key={index}>
                  <a href={btn.url} target="_blank" className="button btn github-btn" rel="noopener noreferrer">
                    <i className={btn.className}></i>{btn.name}
                  </a>
                </li>
              ))}
            </ul>

          </Fade>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#contact">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
