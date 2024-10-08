import React, { Component } from "react";
import { userConsumer } from "./UserContext";

class ComponentF extends Component {
  render() {
    return (
      <userConsumer>
        {(userName) => {
          return <div>Hello {userName}</div>;
        }}
      </userConsumer>
    );
  }
}

export default ComponentF;
