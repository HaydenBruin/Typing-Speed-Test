import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';

// LOAD SERVICE WORKERS
import registerServiceWorker from './registerServiceWorker';

// LOAD COMPONENTS
import Home from './components/home';

// LOAD STYLES
import "./scss/_load.scss";

// ROOT REDUCER
import rootReducer from "./reducers";

// RENDER
ReactDOM.render(
    <Provider store={rootReducer}>
        <Home />
    </Provider>,
document.getElementById('root'));

registerServiceWorker();
