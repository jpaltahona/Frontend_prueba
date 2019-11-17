import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import combineReducers from './redux/reducers';
import 'bootstrap/dist/css/bootstrap.css'
const store = createStore(
    combineReducers,
    {},// initial State
    applyMiddleware(reduxThunk)
    );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
