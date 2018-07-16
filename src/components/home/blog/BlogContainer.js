import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Route, Switch} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


import Blog from './Blog';
import PostDetails from './postDetails/PostDetails';

import "../../_common/common.css";

class BlogContainer extends Component {
    conponentWillMount = () => {
       this.props.history.listen(this.props.onShowBlogDetails);
    }

    render() {
        const {location} = this.props;
        const key = location.pathname.substring(1);

        return (
            <TransitionGroup className="blog"> 
                <CSSTransition key={key} className="route-fade" timeout={600} > 
                    <Switch location={location} >             
                        <Route path={"/:postId"} exact component={PostDetails} />
                        <Route path={"/"}  component={Blog} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        );
    }

}

export default withRouter(BlogContainer);
