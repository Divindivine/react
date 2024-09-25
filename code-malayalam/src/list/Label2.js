import React, { Component } from "react";
import "./Label.css";
import { MyContext } from "../Page/HomePage";



class Label2 extends Component {
  render() {
    const props = this.props;
    const style = props.isActive
      ? { background: "green" }
      : { background: "orange" };

    return (
      <MyContext.Consumer>
        {(val) => {
          return (
            <span
              onClick={() => {
                props.onAction(props.isActive ? "active" : "non-active");
              }}
              className="list-label-item"
              style={style}
            >
              {props.isActive ? "Active" : "Non Active"}
            </span>
          );
        }}
      </MyContext.Consumer>
    );
  }
}

export default Label2;
