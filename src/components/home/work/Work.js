import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ProjectsContainer from './ProjectContainer';


import "../../_common/common.css";
import "./work.css";

class Work extends Component {
    constructor(props) {
        super(props);
        this.state={};
    }

    onProjectCLick = projectId => {
        this.props.history.push(projectId);
    }

    render() {
        const {projects} = this.props;
        
        return (
            <div className="home-section work-container">
                <div clasName="projects-container-work">
                    <ProjectsContainer project={projects} projectClick={this.onProjectCLick}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
   projects: store.projects
});

export default withRouter(connect(mapStateToProps)(Work));



