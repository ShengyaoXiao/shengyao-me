import React from 'react';

import Project from "./Project";

import "./projectsContainer.css";

const ProjectsContainer = ({activeLabels, projects, projectClick}) => {
    
    return (
        <div className="projects-container">
            {projects.map(project => <Project key={project.name} project={project} onClick={projectClick} activeLabels={activeLabels} />)}
        </div>
    );
}

export default ProjectsContainer;
