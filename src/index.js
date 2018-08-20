import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

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
    <Provider store={createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <Home />
    </Provider>,
document.getElementById('root'));

registerServiceWorker();