import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

React.DOM(<div>SOME TEST RENDER</div>, document.getElementById('app'));

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();