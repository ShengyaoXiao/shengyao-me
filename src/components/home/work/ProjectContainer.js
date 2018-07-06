import React from 'react';

import Project from "./Project";

import "./projectsContainer.css";

const ProjectsContainer = ({projects, projectClick}) => {
    projects = projects.sort((a, b) => a.highlight < b.highlight);

    return (
        <div className="projects-container">
            {projects.map(project => <Project key={project.name} project={project} onClick={projectClick} />)}
        </div>
    );
}

export default ProjectsContainer;
