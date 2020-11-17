import React from 'react';

/*
Mock file to create a react-router-dom for testing.  Const rrd creates a BrowserRouter 
and extends its children in a plain div. 
 */
const rrd = require('react-router-dom');

// Just render plain div with its children
rrd.BrowserRouter = ( { children } ) => <div> { children } </div>

module.exports = rrd;
