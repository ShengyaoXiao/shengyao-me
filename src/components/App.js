import React, {Component} from 'react';
import {connect} from 'react-redux';

import {withRouter} from 'react-router';
import {BrowserRouter as Route, Switch} from 'react-router-dom'; 

import Home from "../components/home/Home";
import BlogPage from "../components/blogPage/BlogPage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        const {location} = this.props;
        console.log(location);
        return (
            <Switch location={location} > 
                <Route path={"/"} component={Home} /> 
                <Route path={"/blog"} component={BlogPage} />
            </Switch>
        );
    }
}

// export default withRouter(connect(mapStateToProps)(App));
export default withRouter(App);
