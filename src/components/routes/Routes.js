import React from 'react';
// browser router should be used when you have a server that will handle dynamic requests
// dynamic server ( knows how to respond to any possible url )
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from '../home/Home';

// import ReactGA from 'react-ga';

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home 
    }
]

const Routes = () => {
    // const logPageView = () => {
    //     ReactGA.set({page: window.location.pathname + window.location.search});
    //     React.pageView(window.location.pathname + window.location.search);
    // }
    // logPageView();

    // the <Route> component is the main building block of React Router.
    // Anywhere that you want to only render content based on the location's pathname, you should use a <Router> element
    return (
        <Router >
            <Switch >
                { routes.map( route => <Route key={route.name} exact={route.exact} path={route.path} component={route.component} /> ) } 
            </Switch>
        </Router>
    );
}

export default Routes; 