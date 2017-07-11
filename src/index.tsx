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

import { BrowserRouter } from 'react-router-dom';

const store = createStore<IStoreState>(
    combineReducers<IStoreState>({
        counterStore: counterReducer
    }),
    composeWithDevTools(
        applyMiddleware(
            thunkMiddleware, // lets us dispatch() functions
        )
    )
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
