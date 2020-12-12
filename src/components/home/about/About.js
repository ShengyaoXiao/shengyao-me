import React from "react";

import profilePic from "../../../assets/images/me.jpeg";

import "../../_common/common.css";
import "./about.css";

import ReactGA from "react-ga";

const About = () => {
  const onLinkClick = () => {
    ReactGA.event({
      category: "User",
      action: "Click on resume",
    });
  };

  return (
    <div className="home-section container-about">
      <img
        className="profile-picture-about"
        alt="profilepic"
        src={profilePic}
      />
      <div className="about-text">
        <span className="about-text-main">
          Hi! I'm <span className="about-name">Shengyao</span>
        </span>
        <br />
        <span className="about-text-subtitle">
          Software engineer | M.E.T. Student @ CMU
        </span>
        <br />
        <br />I am a software engineer and creative programmer who explores the
        space between art, design, and humans. I am passionate about learning
        and exploring how to fill this space through interactive technology.
        <br />
        <br />
        Currently, I am a second-year graduate student studying Entertainment
        Technology at Carnegie Mellon University. I have extensive internship
        and project experience in web deveSlopment, computer graphics, shader
        programming and human-computer interaction. In case you are curious,
        this website is built with React, Redux and Three.js.
        <br />
        <br />
        I'll be joining <b>Facebook</b> as a software engineer after graduation.
        I interned as a front end engineer this summer.
        <br />
        <br />
        If you want to know more:{" "}
        <a
          onClick={onLinkClick}
          href="https://firebasestorage.googleapis.com/v0/b/personal-website-f03d1.appspot.com/o/resume%2FShengyao%20Xiao%20SDE%20Resume.pdf?alt=media&token=4ab2b738-0db2-4007-9642-287a698cf0d3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="about-resume">HERE is my resume.</span>
        </a>
        <br />
        <br />
        Check out some of the projects I've worked on.
      </div>
    </div>
  );
};

export default About;
