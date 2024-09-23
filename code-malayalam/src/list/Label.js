import React from "react";
import "./Label.css";

class Label extends React.Component {
  render() {
    const props = this.props;
    const style = props.isActive
      ? { background: "green" }
      : { background: "orange" };
    return (
      <span className="list-label-item" style={style}>
        Label 1
      </span>
    );
  }
}

export default Label;
