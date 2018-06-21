import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/routes/Root';
import registerServiceWroker from './registerServiceWorker';

ReactDOM.render(<Root/>, document.getElementById('root'));

registerServiceWroker();


