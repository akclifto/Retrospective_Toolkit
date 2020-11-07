import React from 'react';
import ifAuth from '../components/ifAuth';
import LayoutTemplate from '../containers/LayoutTemplate';
import LandingPage from '../pages/LandingPage.jsx';
import AuthLandingPage from '../pages/AuthLandingPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PageNotFound from '../pages/PageNotFound';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: Red[600]
        },
        secondary: {
            main: '#3b3535'
        }
    }
})

function Routes() {
    return (
        <BrowserRouter>
            <LayoutTemplate>
                <ThemeProvider theme={theme}>
                    <div>
                        <Switch>
                            <Route exact path='/' component={LandingPage} />
                            <Route path='/admin' component={ifAuth(AuthLandingPage)} />
                            <Route path='/login' component={Login} />
                            <Route path='/signup' component={Signup} />
                            <Route component={PageNotFound} />
                        </Switch>
                    </div>
                </ThemeProvider>
            </LayoutTemplate>
        </BrowserRouter>
    );
}

export default Routes;