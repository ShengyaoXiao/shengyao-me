import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

class ProjectDetails extends Component {
    componentDidMount = () => {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWiillUnmount = () => {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = event => {
        if(event.keyCode === 27) {
            this.close();
        }
    }

    close = () => {
        this.props.history.push("");
    }


    render() {
        const projectId = this.props.location.pathname.substring(1);
        const project = this.props.projects.find(project => project.id === projectId);

        return (
            <div className="project-details-dialog-container margin home-section"> 
                <div className="project-details-navigate-back-button padding clickable text-unselectable" onClick={this.close}>
                    <i className="fa fa-arrow-left project-details-icon" aria-hidden="true" /><span>show all projects</span>
                </div>
                { project ? <ProjectDetailsCard project={project}/> : <div className="project-not-found">Not found</div>  }
            </div>

        );
    }
}


const ProjectDetailsCard = ({project, onClick}) =>{
    return (
        <div className="project-details-card" onClick={onClick} >
            <img className="project-details-image size" alt={project.name} src={project.img} / >
        </div>
    )
}

const mapStateToProps = store => ({
    projects: store.projects
})

export default withRouter(connect(mapStateToProps)(ProjectDetails));