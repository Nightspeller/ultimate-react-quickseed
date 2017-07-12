import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app/app.component';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { counterReducer } from './reducers/counter.reducers';
import { IStoreState } from './types/redux.types';

import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const store = createStore<IStoreState>(
    combineReducers<IStoreState>({
        counterState: counterReducer,
        router: routerReducer
    }),
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
            myRouterMiddleware
        )
    )
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
