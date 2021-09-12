import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store";

// import logo from './logo.svg';
import "./App.css";
// import SampleComponent from "./components/Sample/SampleComponent";
import Auth from "./views/auth/Auth";
import Onboarding from "./views/auth/Onboarding";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/onboarding" component={Onboarding} />
          {/*<div className="App">*/}
          {/*  <header className="App-header">*/}
          {/*    <img src={logo}*/}
          {/*         className="App-logo"*/}
          {/*         alt="logo"/>*/}
          {/*  </header>*/}
          {/*  <SampleComponent />*/}
          {/*</div>*/}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
