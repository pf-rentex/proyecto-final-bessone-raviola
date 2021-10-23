import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Router from "./router/router";
import Header from "./components/commons/Header";

import "./App.css";
import Footer from "./components/commons/Footer";
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
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header setIsOpenSidebar={setIsOpen} />
      <Router />
      <Footer />
    </Provider>
  );
};

export default App;
