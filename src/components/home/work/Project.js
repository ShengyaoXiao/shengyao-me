import React from 'react';
import Label from '../../_common/label/Label';

import "./project.css";

// project card
const Project = ({project, onClick, activeLabels}) => {
    const className = project.highlight ? "highlight-card" : "normal-card";
  
    let _labelInActiveLabels = false; 
    let _showAll = activeLabels.length === 0;
    if(!_showAll) {
        project.labels.forEach( label => { 
            if(activeLabels.includes(label)) {
                _labelInActiveLabels = true;
            } 
        });
    }

    return (
        _showAll || _labelInActiveLabels ? 
         <div className={"project-card clickable text-unselectable " + className} onClick={ev=>onClick(project.id)} >
            <img className="project-image" alt={project.name} src={project.imgSmall} />
            <div className="info-bar">
                <div>{project.name}</div>
                <div>
                {
                    project.labels.map( 
                        label => { return <Label label={label} key={label} minimal={true} /> }
                    )
                }
                </div>
            </div>
        </div>
        : 
        null
    );
}

export default Project;