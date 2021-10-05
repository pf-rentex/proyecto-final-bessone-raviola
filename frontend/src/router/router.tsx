import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "../views/auth/Auth";
import Onboarding from "../views/auth/Onboarding";
import PrivateRoute from "./PrivateRoute";

export default function router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact
               path="/"
               component={ Auth }
        />
        <PrivateRoute
            exact
            path="/onboarding"
            component={ Onboarding }
        />
      </Switch>
    </BrowserRouter>
  );
}
