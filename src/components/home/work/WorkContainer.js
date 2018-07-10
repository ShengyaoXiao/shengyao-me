import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Route, Switch} from 'react-router-dom';

import Work from "./Work";

class WorkContainer extends Component {
    componentDidMount = () => {
        this.props.history.listen(this.props.onShowProjectDetails);
    }

    render() {
        const {location} = this.props;
        // const key = location.pathname.substring(1);

        return (
            <div className="work">   
                <Switch location={location} >             
                    {/* <Route path={"/:projectId"} exact component={ProjectDetails} />   */}
                    <Route path={"/"}  component={Work} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(WorkContainer);