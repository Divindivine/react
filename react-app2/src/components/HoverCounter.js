import React, { Component } from "react";
import WithCounter from "./WithCounter";

class HoverCounter extends Component {
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
    const {count} = this.state;
    return (
      <div>
        <h2 onMouseOver={this.incrementCount}>Hovered {count} times</h2>
      </div>
    );
  }
}

export default WithCounter (HoverCounter, 10);
