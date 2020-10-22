import React from 'react';
import ifAuth from '../components/ifAuth';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { Switch, Route } from 'react-router-dom';

function Routes() {
    return (
        <Switch>
                <Route exact path='/' component = {ifAuth(LandingPage)} />
                <Route path='/login' component = {Login} />
                <Route path='/signup' component = {Signup} />
        </Switch>
    );
}

export default Routes;