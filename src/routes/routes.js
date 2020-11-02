import React from 'react';
import ifAuth from '../components/ifAuth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingPage from '../pages/LandingPage.jsx';
import AuthLandingPage from '../pages/AuthLandingPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PageNotFound from '../pages/PageNotFound';
import { Switch, Route, BrowserRouter } from 'react-router-dom';


function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <div>
                <Switch>
                        <Route exact path='/' component = {LandingPage} />
                        <Route path='/admin' component = {ifAuth(AuthLandingPage)} />
                        <Route path='/login' component = {Login} />
                        <Route path='/signup' component = {Signup} />
                        <Route component = {PageNotFound} />
                </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default Routes;