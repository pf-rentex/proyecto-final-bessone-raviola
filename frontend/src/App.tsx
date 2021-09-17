import { Provider } from "react-redux";
import store from "./store";
import Router from "./router/router";

// import logo from './logo.svg';
import "./App.css";
// import SampleComponent from "./components/Sample/SampleComponent";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
