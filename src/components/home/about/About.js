import React from 'react';

import profilePic from "../../../assets/images/me.jpeg";

import "../../_common/common.css";
import "./about.css";

import ReactGA from 'react-ga';

const About = () => {

    const onLinkClick = () => {
        ReactGA.event({
            category: 'User',
            action: 'Click on resume'
        });
    }

    return (
        <div className="home-section container-about">        
            <img className="profile-picture-about" alt="profilepic" src={profilePic} />
            <div className="about-text">
                <span className="about-text-main">Hi! I'm <span className="about-name">Shengyao</span></span> 
                {/* <br/><span className="about-text-subtitle">I'm a front-end engineer</span> */}
                {/* <br/><br/><span className="about-text-belief">Make it work. Make it look pretty. Make it work well or better.</span>  */}
                <br/><br/>I am a front-end developer and creative programmer who explores the space between art, design, and humans. I am passionate about learning and exploring how to fill this space through interactive technology. 
                <br/><br/>Currently, I am a graduate student studying Entertainment Technology at Carnegie Mellon University. I have extensive internship and project experience in web development, computer graphics, shader programming and human-computer interaction.
                {/* <br/><br/>If you want to know more: <a onClick={onLinkClick} href="" target="_blank" rel="noopener noreferrer"><span className="about-resume">HERE is my resume.</span></a> */}
                <br/><br/>Keep scrolling to see some of the projects I've worked on.
            </div>                
        </div>
    );
}

export default About;