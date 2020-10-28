import React from 'react';
import ifAuth from '../components/ifAuth';
import LandingPage from '../pages/LandingPage.jsx';
import AuthLandingPage from '../pages/AuthLandingPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PageNotFound from '../pages/PageNotFound';
import { Switch, Route, BrowserRouter, Link, NavLink } from 'react-router-dom';


//TODO: change AuthLandingPage route
function Routes() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                        <Route exact path='/' component = {LandingPage} />
                        <Route path='/admin' component = {ifAuth(AuthLandingPage)} />
                        <Route path='/login' component = {Login} />
                        <Route path='/signup' component = {Signup} />
                        <Route component = {PageNotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Routes;