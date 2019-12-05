// import React from 'react';
import React, { Component } from 'react';
import Label from '../../_common/label/Label';

import "./project.css";

// project card
export default class Project extends Component {
// const Project = ({project, onClick, activeLabels}) => {
    constructor(props) {
        super(props);
        this.state = {
            showGif:false,
            // labelInActiveLabels:false, 
        };
    }
    // const className = project.highlight ? "highlight-card" : "normal-card";
    // let _showGif = false;
    // let _labelInActiveLabels = false; 
    // let _showAll = activeLabels.length === 0;
    // if(!_showAll) {
    //     project.labels.forEach( label => { 
    //         if(activeLabels.includes(label)) {
    //             _labelInActiveLabels = true;
    //         } 
    //     });
    // }
    _mouseEnter = (ev) => {
        this.setState({showGif: true});
    }
    _mouseLeave = (ev) => {
        this.setState({showGif: false});
    }
    render() {
        const {project, onClick, activeLabels} = this.props;
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
            <div className={"project-card clickable text-unselectable " + className} onClick={ev=>onClick(project.id)} onMouseEnter={this._mouseEnter} onMouseLeave={this._mouseLeave}>
                <img className="project-image" alt={project.name} src={this.state.showGif ? project.imgGif : project.imgSmall} />
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
}

// export default Project;