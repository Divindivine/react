import React, { Component } from "react";
import PortalDemo from "./PortalDemo";

class ClickCounter2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }
  render() {
    return <button onClick={this.incrementCount}>Clicked X times</button>;
  }
}

export default ClickCounter2;

