import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

// Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./store/reducers/index";
import { callAPIMiddleware } from "./store/middleware/callApiMiddleware";

// Service worker
import * as serviceWorker from "./serviceWorker";

import App from "./App";

//css
import './assets/css/style.css';

// History
const history = createBrowserHistory();

// enable REDUX_DEVTOOLS_EXTENSION for development and debugging.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(callAPIMiddleware)));

ReactDOM.render(
    <Router history={history} >
        <Provider store={store} >
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
);

serviceWorker.unregister();