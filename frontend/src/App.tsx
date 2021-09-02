import React from 'react';
import {Provider} from 'react-redux';
import store from './store';

import logo from './logo.svg';
import './App.css';
import SampleComponent from "./components/Sample/SampleComponent";
import SignIn from "./views/auth/SignIn";

function App() {
  return (
      <Provider store={store}>
          <SignIn />
        {/*<div className="App">*/}
        {/*  <header className="App-header">*/}
        {/*    <img src={logo}*/}
        {/*         className="App-logo"*/}
        {/*         alt="logo"/>*/}
        {/*  </header>*/}
        {/*  <SampleComponent />*/}
        {/*</div>*/}
      </Provider>
  );
}

export default App;
