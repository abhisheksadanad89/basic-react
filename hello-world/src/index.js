import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BasicIndex, DemoApp, BasicUser, BasicEvent} from './basic-router/app_router';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { createHashHistory } from 'history'
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<BasicIndex />, document.getElementById('basicrouter'));
serviceWorker.unregister();
