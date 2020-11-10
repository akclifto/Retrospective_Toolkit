import React from 'react';
import ReactDOM from 'react-dom';
import { Enzyme, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
import LandingPage from '../pages/LandingPage.jsx';
import AuthLandingPage from '../pages/AuthLandingPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PageNotFound from '../pages/PageNotFound';
import Routes from '../routes/routes';


test('Invalid URL path should redirect to the 404 page', () => {

    const wrapper = mount(

        <MemoryRouter initialEntries = { [ '/random'] } >
            <Routes />
        </MemoryRouter>
    );

    expect (wrapper.find(LandingPage)).toHaveLength(0);
    expect (wrapper.find(AuthLandingPage)).toHaveLength(0);
    expect (wrapper.find(Login)).toHaveLength(0);
    expect (wrapper.find(Signup)).toHaveLength(0);
    
    expect (wrapper.find(PageNotFound)).toHaveLength(1);
});


test('Valid URL path should NOT redirect to 404 page', () => {

    const wrapper = mount(

        <MemoryRouter initialEntries = { [ '/random'] } >
            <Routes />
        </MemoryRouter>
    );

    expect (wrapper.find(LandingPage)).toHaveLength(1);
    expect (wrapper.find(AuthLandingPage)).toHaveLength(1);
    expect (wrapper.find(Login)).toHaveLength(1);
    expect (wrapper.find(Signup)).toHaveLength(1);
    
    expect (wrapper.find(PageNotFound)).toHaveLength(0);

});