import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Router from "./router/router";

import "./App.css";
import { loadUser } from "./actions/auth";
import Sidebar from "./components/commons/Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/all";

const App = () => {
  useEffect(() => {
    // @ts-ignore
    store.dispatch(loadUser());
  }, []);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Provider store={store}>
      {/* Header simulation */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div style={{ height: 70, backgroundColor: "#20323A" }} className="p-5">
        <GiHamburgerMenu
          className="text-white text-3xl cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <Router />
      {/* Footer simulation */}
      <div style={{ height: 250, backgroundColor: "#20323A" }}></div>
    </Provider>
  );
};

export default App;
