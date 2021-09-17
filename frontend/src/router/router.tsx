import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "../views/auth/Auth";
import Onboarding from "../views/auth/Onboarding";

export default function router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/onboarding" component={Onboarding} />
      </Switch>
    </BrowserRouter>
  );
}
