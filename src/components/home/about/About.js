import React from 'react';

import profilePic from "../../../assets/images/profile.jpg";

import "../../_common/common.css";
import "./about.css";

// import ReactGA from 'react-ga';

const About = () => {

    // const onLinkClick = () => {
    //     ReactGA.event({
    //         category: 'User',
    //         action: 'Click on CV'
    //     });
    // }
    // resume 


    return (
        <div className="home-section container-about">        
            <img className="profile-picture-about" alt="profilepic" src={profilePic} />
            <div className="about-text">
                <span className="about-text-main">Hi! I'm <span className="about-name">Shengyao</span></span> 
                <br/><span className="about-text-subtitle">I'm a frond-end engineer</span>
                <br/><br/><span className="about-text-belief">I don't just make things work or just make things look pretty. I make them work well.</span> 
                <br/><br/>I am a senior student at UC San Diego studying math-cs, but my interests span web develoment, creative coding, and human computer interaction. I care about the scenes behind the web as well as the final delivery to the users. 
                <br/><br/>If you want to know more: <a href="" target="_blank" rel="noopener noreferrer"><span className="about-resume">HERE is my resume.</span></a>
                <br/><br/>Keep scrolling to see some of the projects I've worked on.
            </div>                
        </div>
    );
}

export default About;