import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Page/HomePage";
import MyApp from "./components/MyApp";


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <MyApp />,
  document.getElementById("root")
);

