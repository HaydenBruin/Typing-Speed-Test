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

// CREATE STORE
const hello = () => ('hello');
const store = createStore(hello);
console.log(store.getState());

// RENDER
ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
document.getElementById('root'));

registerServiceWorker();
