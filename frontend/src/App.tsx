import { Provider } from "react-redux";
import store from "./store";
import Router from "./router/router";

// import logo from './logo.svg';
import "./App.css";
// import SampleComponent from "./components/Sample/SampleComponent";

function App() {
  return (
    <Provider store={store}>
      {/* Header simulation */}
      <div style={{ height: 70, backgroundColor: "#20323A" }}></div>
      <Router />
      {/* Footer simulation */}
      <div style={{ height: 250, backgroundColor: "#20323A" }}></div>
    </Provider>
  );
}

export default App;
