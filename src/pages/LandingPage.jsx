import React from 'react';
import DiceLanding from '../containers/DiceLanding';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: Red[600]
        },
        secondary: {
            main: '#2d2929'
        }
    }
})

const LandingPage = () => {

    return (
        <ThemeProvider theme={theme}>
            <DiceLanding />
        </ThemeProvider>
    );
}

export default LandingPage;