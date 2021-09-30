import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "../views/auth/Auth";
import Onboarding from "../views/auth/Onboarding";
import Home from "../views/Home";

export default function router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Auth} />
        <Route exact path="/onboarding" component={Onboarding} />
      </Switch>
    </BrowserRouter>
  );
}
