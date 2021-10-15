import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Router from "./router/router";

import "./App.css";
import { loadUser } from "./actions/auth";
import Sidebar from "./components/commons/Sidebar/Sidebar";

const App = () => {
  useEffect(() => {
    // @ts-ignore
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      {/* Header simulation */}
      <Sidebar />
      <div style={{ height: 70, backgroundColor: "#20323A" }}></div>
      <Router />
      {/* Footer simulation */}
      <div style={{ height: 250, backgroundColor: "#20323A" }}></div>
    </Provider>
  );
};

export default App;
