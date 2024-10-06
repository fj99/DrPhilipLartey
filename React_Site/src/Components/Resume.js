import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const work_title = this.props.data.work_title;
    const work_title2 = this.props.data.work_title2;
    const skills_title = this.props.data.skills_title;

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company} className="center">
          <h3 className="white">{work.company}</h3>
          <p className="info off-white">
            {work.title}
            {work.years && work.years[0].trim() !== "" && (
              <span>
                <span>&bull;</span> <em className="date">{work.years}</em>
              </span>
            )}
          </p>
          {work.description && work.description[0].trim() !== "" && (
            <p className="off-white">{work.description}</p>
          )}
          {work.description2 && work.description2[0].trim() !== "" && (
            <p className="off-white">{work.description2}</p>
          )}
          {work.link && work.link[0].trim() !== "" && (
            <p className="off-white">
              <a className="smoothscroll" href={work.link} target="_blank">
                {work.linkName}
              </a>
            </p>
          )}
        </div>
      );
    });

    const work2 = this.props.data.work2.map(function (work) {
      return (
        <div key={work.company} className="center">
          <h3 className="white">{work.company}</h3>
          <p className="info off-white">
            {work.title}
            {work.years && work.years[0].trim() !== "" && (
              <span>
                <span>&bull;</span> <em className="date">{work.years}</em>
              </span>
            )}          </p>
          {work.description && work.description[0].trim() !== "" && (
            <p className="off-white">{work.description}</p>
          )}
          {work.description2 && work.description2[0].trim() !== "" && (
            <p className="off-white">{work.description2}</p>
          )}
          {work.link && work.link[0].trim() !== "" && (
            <a className="smoothscroll" href={work.link}>
              {work.link}
            </a>
          )}
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      {
        skills && skills.name && (
          <li key={skills.name}>
            <span style={{ width, backgroundColor }} className={className}></span>
            <em className="white">{skills.name}</em>
          </li>
        )
      }

    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1 className="white">
                <span>{work_title}</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1 className="white">
                <span>{work_title2}</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work2}</div>
          </div>
        </Slide>

        {/* <Slide left duration={1300}>
          {this.props.data.skills && (
            <div className="row skill">
              <div className="three columns header-col">
                <h1 className="white">
                  <span>{skills_title}</span>
                </h1>
              </div>

              <div className="nine columns main-col">
                <p>{skillmessage}</p>

                <div className="bars">
                  <ul className="skills">{skills}</ul>
                </div>
              </div>
            </div>
          )}
        </Slide> */}
      </section>
    );
  }
}

export default Resume;
