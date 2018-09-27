import React from 'react';
// browser router should be used when you have a server that will handle dynamic requests
// dynamic server ( knows how to respond to any possible url )
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../home/Home';
// import BlogPage from '../blogPage/BlogPage';
// import App from "../App";

import ReactGA from 'react-ga';

const routes = [
    {
        name: "Home",
        path: "/",
        // exact: true,
        component: Home 
    }, 
    // {
    //     name: "Blog",
    //     path: "/blog",
    //     exact: true,
    //     component: BlogPage
    // }
]

const Routes = () => {
    const logPageView = () => {
        ReactGA.set({page: window.location.pathname + window.location.search});
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
    logPageView();

    // the <Route> component is the main building block of React Router.
    // Anywhere that you want to only render content based on the location's pathname, you should use a <Router> element
    return (
        <HashRouter >
            <Switch>
                { routes.map( route => <Route key={route.name} exact={route.exact} path={route.path} component={route.component} /> ) } 
            </Switch>
            {/* <Route component={App} /> */}
            {/* <Home /> */}
        </HashRouter>
    );
}

export default Routes; 