import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Red from "@material-ui/core/colors/red";
import ifAuth from "../components/ifAuth";
import LayoutTemplate from "../containers/LayoutTemplate";
import LandingPage from "../pages/LandingPage";
import AuthLandingPage from "../pages/AuthLandingPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PageNotFound from "../pages/PageNotFound";
import DiceLanding from "../containers/DiceLanding";
// can remove this after testing IconsDataStructure is done
import Testing from "../pages/Testing";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: Red[600],
    },
    secondary: {
      main: "#3b3535",
    },
  },
});

function Routes() {
  return (
    <BrowserRouter forceRefresh>
      <LayoutTemplate>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/board/:roomId" component={DiceLanding} />
            <Route path="/admin" component={ifAuth(AuthLandingPage)} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/testing" component={Testing} />
            <Route component={PageNotFound} />
          </Switch>
        </ThemeProvider>
      </LayoutTemplate>
    </BrowserRouter>
  );
}

export default Routes;
