import React, {useEffect} from "react";
import {Provider} from "react-redux";
import store from "./store";
import Router from "./router/router";

import "./App.css";
import {loadUser} from "./actions/auth";

const App = () => {

  useEffect(() => {
    // @ts-ignore
    store.dispatch(loadUser())
  }, []);
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
