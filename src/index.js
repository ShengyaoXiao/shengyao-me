import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/routes/Root';
import registerServiceWroker from './registerServiceWorker';


import './index.css';

// alert("Some parts of the website are still under construction :)");
ReactDOM.render(<Root/>, document.getElementById('root'));

registerServiceWroker();


