import React from 'react';
import ifAuth from '../components/ifAuth';
//import LandingPage from '../pages/LandingPage';
import DiceLanding from '../pages/DiceLanding';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { Switch, Route } from 'react-router-dom';

function Routes() {
    return (
        <Switch>
                <Route exact path='/' component = {ifAuth(DiceLanding)} />
                <Route path='/login' component = {Login} />
                <Route path='/signup' component = {Signup} />
        </Switch>
    );
}

export default Routes;