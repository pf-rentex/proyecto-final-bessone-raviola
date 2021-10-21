import { Provider } from "react-redux";
import store from "./store";
import Router from "./router/router";
import Header from "./components/commons/Header";

// import logo from './logo.svg';
import "./App.css";
import Footer from "./components/commons/Footer";
import React from "react";

function App() {
  return (
    <Provider store={store}>
        <Header />
        <Router />
        <Footer />
    </Provider>
  );
}

export default App;
