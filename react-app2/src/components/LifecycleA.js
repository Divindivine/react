import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "DIVIN",
    };
    console.log("lifecycleA Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifecycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("lifecycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevStae) {
    console.log("lifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("lifecycleA componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "codevolution",
    });
  };

  render() {
    console.log("lifecycleA render");
    return (
      <div>
        <div>LifecycleA</div>
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
