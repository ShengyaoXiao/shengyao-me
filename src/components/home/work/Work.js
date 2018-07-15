import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import ProjectsContainer from './ProjectContainer';
import LabelsContainer from '../../_common/label/LabelsContainer';

import "../../_common/common.css";
import "./work.css";

class Work extends Component {
    constructor(props) {
        super(props);
        this.state={activeLabels: []};
    }

    // If you want that your component receive RouterProps, but don't want to wrap it in <Route component={Some}>
    // You can use withRoute function to connect component to the router
    onProjectClick = projectId => {
        this.props.history.push(projectId);
    }

    onLabelClick = label => {
        const activeLabels = this._addRemoveLabel(label, this.state.activeLabels);
        this.setState({activeLabels});
    }

    _addRemoveLabel = (label, activeLabels) => {
        const index = activeLabels.indexOf(label);
        
        if(index > 1) {
            activeLabels.splice(index, 1);
        } else {
          activeLabels.push(label);  
        }
        return activeLabels;
    }

    clearSelectedLabels = () => {
        this.setState({activeLabels: []});
    }

    _getLabels = projects => {
        const labels = new Set();
        projects.forEach( project => project.labels.forEach( label => labels.add(label) ) );
        return labels;
    }

    render() {
        const {projects} = this.props;
        const {activeLabels} = this.state;
        const labels = this._getLabels(projects);

        return (
            <div className="home-section work-container">
                {/* <div className="subtitle-work">Expriements and explorations that create visuals using three.js and GLSL. </div> */}
                <div className="labels-work"> 
                    <LabelsContainer labels={labels} activeLabels={activeLabels} onLabelClick={this.onLabelClick} clearSelectedLabels={this.clearSelectedLabels} horizontal={true}/>
                </div> 
                <div className="projects-container-work">
                    <ProjectsContainer activeLabels={activeLabels} projects={projects} projectClick={this.onProjectClick}/>
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



