import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/routes/Root';
import registerServiceWroker from './registerServiceWorker';

import './index.css';

ReactDOM.render(<Root/>, document.getElementById('root'));

registerServiceWroker();


