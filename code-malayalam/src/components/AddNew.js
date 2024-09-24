import React, { Component } from "react";
import "./AddNew.css";

class AddNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInput: "",
    };
  }

  handleChange = (evt) => {
    const value = evt.target.value;
    this.setState({
      titleInput: value,
    });
  };

  hanldeClick = () => {
    console.log(this.state.titleInput);
  };

  render() {
    return (
      <div className="add-new">
        <input onChange={this.handleChange} />
        <button onClick={this.hanldeClick}>Click</button>
      </div>
    );
  }
}

export default AddNew;
