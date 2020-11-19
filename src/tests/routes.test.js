import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
// Enzyme currently doesn't support React@^17.*, which is what we are using in the project.
// import Adapter from 'enzyme-adapter-react-16';
// There is a workaround for the time being, used below 
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MemoryRouter } from 'react-router';
import LandingPage from '../pages/LandingPage.jsx';
import AuthLandingPage from '../pages/AuthLandingPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PageNotFound from '../pages/PageNotFound';
import Routes from '../routes/routes';

//validate PageNotFound redirect true
test('Validate PageNotFound redirect true to 404 page', () => {

    const wrapper = mount(

        <MemoryRouter initialEntries = { [ '/badURL'] } >
            <Routes />
        </MemoryRouter>
    );

    expect (wrapper.find(LandingPage)).toHaveLength(0);
    expect (wrapper.find(AuthLandingPage)).toHaveLength(0);
    expect (wrapper.find(Login)).toHaveLength(0);
    expect (wrapper.find(Signup)).toHaveLength(0);
    
    expect (wrapper.find(PageNotFound)).toHaveLength(1);
});

//validate PageNotFound redirect false, also validate LandingPage
test('Validate PageNotFound redirect false, validate LandingPage', () => {

    const wrapper = mount(

        <MemoryRouter initialEntries = { [ '/'] } >
            <Routes />
        </MemoryRouter>
    );

    expect (wrapper.find(LandingPage)).toHaveLength(1);
    expect (wrapper.find(AuthLandingPage)).toHaveLength(0);
    expect (wrapper.find(Login)).toHaveLength(0);
    expect (wrapper.find(Signup)).toHaveLength(0);
    
    expect (wrapper.find(PageNotFound)).toHaveLength(0);

});

//validate the remaining routes
test('Validate AuthLandingPage, Auth FALSE', () => {

    const wrapper = mount(

        <MemoryRouter initialEntries = { [ '/admin'] } >
            <Routes />
        </MemoryRouter>
    );

    expect (wrapper.find(LandingPage)).toHaveLength(0);
    expect (wrapper.find(AuthLandingPage)).not.toHaveLength(1);
    expect (wrapper.find(Login)).toHaveLength(0);
    expect (wrapper.find(Signup)).toHaveLength(0);
    
    expect (wrapper.find(PageNotFound)).toHaveLength(0);

});

// Unsure how to test ifAuth method route
// Commenting out this test until it I figure out how to validate it correctly
// test('Validate AuthLandingPage, Auth TRUE', () => {


//     const wrapper = mount(
//         <MemoryRouter initialEntries = { [ '/admin'] } >
//         <Routes />
//         </MemoryRouter>
//         );
        
//     expect (wrapper.find(LandingPage)).toHaveLength(0);
//     expect (wrapper.find(AuthLandingPage)).toHaveLength(1);
//     expect (wrapper.find(Login)).toHaveLength(0);
//     expect (wrapper.find(Signup)).toHaveLength(0);
    
//     expect (wrapper.find(PageNotFound)).toHaveLength(0);

// });

test('Validate Login Page', () => {

    const wrapper = mount(

        <MemoryRouter initialEntries = { [ '/login'] } >
            <Routes />
        </MemoryRouter>
    );

    expect (wrapper.find(LandingPage)).toHaveLength(0);
    expect (wrapper.find(AuthLandingPage)).toHaveLength(0);
    expect (wrapper.find(Login)).toHaveLength(1);
    expect (wrapper.find(Signup)).toHaveLength(0);
    
    expect (wrapper.find(PageNotFound)).toHaveLength(0);

});

test('Validate Signup Page', () => {

    const wrapper = mount(

        <MemoryRouter initialEntries = { [ '/signup'] } >
            <Routes />
        </MemoryRouter>
    );

    expect (wrapper.find(LandingPage)).toHaveLength(0);
    expect (wrapper.find(AuthLandingPage)).toHaveLength(0);
    expect (wrapper.find(Login)).toHaveLength(0);
    expect (wrapper.find(Signup)).toHaveLength(1);
    
    expect (wrapper.find(PageNotFound)).toHaveLength(0);

});

