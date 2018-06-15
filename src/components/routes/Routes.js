import React from 'react';
Import {BrowserRouter as Router, Route, Swicth} from 'react-router-dom';

import Home from '../home/Home';

import ReactGA from 'react-ga';

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home 
    }
]

const Routes = () => {
    const logPageView = () => {
        ReactGA.set({page: window.location.pathname + window.location.search});
        React.pageView(window.location.pathname + window.location.search);
    }
    logPageView();

    return (
        <Router >
            <Swicth >
                { routes.map( route => <Route key={route.name} exact={route.exact} path={route.path} component={route.component} /> ) } 
            </Swicth>
        </Router>
    );
}

export default Routes; 