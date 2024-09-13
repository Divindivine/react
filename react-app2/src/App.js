import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBInd from "./components/EventBInd";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import  styles from './appStyles.module.css'
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <Counter /> */}
        {/* <Greet name = "Divin" heroName = "Batman">
          <p>This is children tag</p>
          </Greet> */}
        {/* <Greet name = "Shijil" heroName = "Antman">
          <button>Action</button>
          </Greet>
        <Greet name = "Hrishi" heroName = "Hulk"/> */}
        {/* <Welcome name = "Divin" heroName = "Batman"/> */}
        {/* <Welcome name = "Shijil" heroName = "Antman"/>
        <Welcome name = "Hrishi" heroName = "Hulk"/> */}
        {/* <Hello /> */}
        {/* <Message />
          <FunctionClick />
          <ClassClick /> */}
        {/* <EventBInd /> */}
        {/* <ParentComponent /> */}
        {/* <UserGreeting /> */}
        {/* <NameList /> */}
        {/* <Stylesheet primary = {false} /> */}
        {/* <Inline /> */}
        <Form />
      </div>
    );
  }
}

export default App;

