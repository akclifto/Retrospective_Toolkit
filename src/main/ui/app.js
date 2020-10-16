import React from 'react';
import * as serviceWorker from './service/serviceWorker';

React.DOM(<p>Test render</p>, document.getElementById('app'));

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();