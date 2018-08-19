import React from 'react';
import ReactDOM from 'react-dom';

// LOAD SERVICE WORKERS
import registerServiceWorker from './registerServiceWorker';

// LOAD COMPONENTS
import Home from './components/home';

// LOAD STYLES
import "./scss/_load.scss";

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
