import React from 'react';
import ifAuth from '../components/ifAuth';
import LandingPage from '../pages/LandingPage.jsx';
import AuthLandingPage from '../pages/AuthLandingPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { Switch, Route } from 'react-router-dom';


//TODO: change AuthLandingPage route
function Routes() {
    return (
        <Switch>
                <Route exact path='/' component = {LandingPage} />
                <Route path='/login__CHANGEME' component = {ifAuth(AuthLandingPage)} />
                <Route path='/login' component = {Login} />
                <Route path='/signup' component = {Signup} />
        </Switch>
    );
}

export default Routes;