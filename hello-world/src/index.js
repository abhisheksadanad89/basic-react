import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './User';
import InputEventComp from './input_event';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<User />, document.getElementById('user'));
ReactDOM.render(<InputEventComp />, document.getElementById('inputevent'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
