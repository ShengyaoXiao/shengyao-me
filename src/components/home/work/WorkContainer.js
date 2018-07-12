import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Route, Switch} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import ProjectDetails from "./projectDetails/ProjectDetails";
import Work from "./Work";

class WorkContainer extends Component {
    // this.props.onShowProjectDetails makes sure whenever we redirect to Home, we are in work section 
    componentDidMount = () => {
        this.props.history.listen(this.props.onShowProjectDetails);
    }
    // Because it’s the Routes that are rendering the UI based off the current URL, it makes sense to also give Routes 
    // the ability to listen for and re-render whenever a popstate event occurs. 
    // By re-rendering, each Route will re-check to see if they match with the new URL. 
    // If they do, they’ll render UI, if not, they’ll do nothing. 
    render() {
        const {location} = this.props;
        const key = location.pathname.substring(1);

        return (
            <TransitionGroup className="work">
                <CSSTransition  key={key} classNames='route-fade' timeout={600} >
                    <Switch location={location} >             
                        <Route path={"/:projectId"} exact component={ProjectDetails} />  
                        <Route path={"/"}  component={Work} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}

// If you want that your component receive RouterProps, but don't want to wrap it in <Route component={Some}>
// You can use withRoute function to connect component to the router
export default withRouter(WorkContainer);
// withRouter will need to wrap the container compoment that is being connected 
// and not the functional component that may actually render the Routes.