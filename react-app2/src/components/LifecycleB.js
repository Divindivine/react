import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "DIVIN",
    };
    console.log("lifecycleB Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifecycleB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("lifecycleB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevStae) {
    console.log("lifecycleB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("lifecycleB componentDidUpdate");
  }

  render() {
    console.log("lifecycleB render");
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
