import React from 'react';
import ReactDOM from 'react-dom';

// LOAD REDUX
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

// LOAD SERVICE WORKERS
import registerServiceWorker from './registerServiceWorker';

// LOAD COMPONENTS
import Home from './components/home';

// LOAD STYLES
import "./scss/_load.scss";

// MIDDLEWARE
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Home />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
