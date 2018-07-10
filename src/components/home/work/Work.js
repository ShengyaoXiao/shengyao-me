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

    // If you want that your component receive RouterProps, but don't want to wrap it in <Route component={Some}>
    // You can use withRoute function to connect component to the router
    onProjectCLick = projectId => {
        this.props.history.push(projectId);
    }

    render() {
        const {projects} = this.props;
        
        return (
            <div className="home-section work-container">
                <div className="work-subtitle">Expriements and explorations that create visuals using three.js and GLSL. </div> 
                <div className="projects-container-work">
                    <ProjectsContainer projects={projects} projectClick={this.onProjectClick}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
   projects: store.projects
});

// withRouter will need to wrap the container compoment that is being connected 
// and not the functional component that may actually render the Routes.
export default withRouter(connect(mapStateToProps)(Work));



