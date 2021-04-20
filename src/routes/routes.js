import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Red from "@material-ui/core/colors/red";
import LayoutTemplate from "../containers/LayoutTemplate";
import PageNotFound from "../pages/PageNotFound";
import NetworkManager from "../components/ThreeDice/NetworkManager";
import GameController from "../controller/gameController";

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
    <BrowserRouter>
      <LayoutTemplate>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path="/" component={GameController} />
            <Route path="/retro/:roomId" component={NetworkManager} />
            <Route component={PageNotFound} />
          </Switch>
        </ThemeProvider>
      </LayoutTemplate>
    </BrowserRouter>
  );
}

export default Routes;
