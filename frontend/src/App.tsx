import { Provider } from "react-redux";
import store from "./store";
import Router from "./router/router";
import Header from "./components/commons/Header";

// import logo from './logo.svg';
import "./App.css";
import Footer from "./components/commons/Footer";
// import SampleComponent from "./components/Sample/SampleComponent";

function App() {
  return (
    <Provider store={store}>
      {/* Header simulation */}
      {/* <div style={{ height: 70, backgroundColor: "#20323A" }}> */}
        <Header />
      {/* </div> */}
      <Router />
      {/* Footer simulation */}
      <Footer />
    </Provider>
  );
}

export default App;
