import React, { Component } from "react";
import WithCounter from "./WithCounter";

class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={this.incrementCount}> {this.props.name} Clicked {count} times</button>
      </div>
    );
  }
}

export default WithCounter(ClickCounter, 5);

