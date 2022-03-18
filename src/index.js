import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider}from 'react-redux'
import reduxPromise from 'redux-promise'
import {createStore,applyMiddleware} from 'redux'
import reducers from './reducers'
import reportWebVitals from './reportWebVitals';



const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)

ReactDOM.render(
  < Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
