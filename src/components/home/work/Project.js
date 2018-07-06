import React from 'react';

import "./project.css";

// project card
const Project = ({project, onClick}) => {
    const className = project.highlight ? "highlight-card" : "normal-card";
    
    return (
        <div className={"project-card clickable text-unselectable " + className} onClick={ev=>onClick(project.id)} >
            <img className="project-image" alt={project.name} src={project.imgSamll} />
            <div className="infor-bar">
                <div>{project.name}</div>
            </div>
        </div>
    );
}

export default Project;