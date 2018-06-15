import React from 'react';

import Routes from './Routes';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-50551684-4');

const Root = () => {
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    );
}

export default Root;



