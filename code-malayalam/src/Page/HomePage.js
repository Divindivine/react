import React from "react";
import Tools from "../components/Tools";
import SimpleList from "../list/SimpleList";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      activeState: "all",
    };
  }

  componentDidMount() {
    console.log("oiiii");
    fetch("./data.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.setState({
          data: data,
        });
      });
  }

  componentDidUpdate() {
    console.log("compo did update");
  }

  onListChange = (event) => {
    const value = event.target.value;
    // const newList = arr.filter((item) => {
    //   if (value === "all") {
    //     return true;
    //   }
    //   if (value === "active") {
    //     return item.isActive === true;
    //   }
    //   if (value === "non-active") {
    //     return item.isActive === false;
    //   }
    // });

    // this.setState({
    //   data: newList,
    // });

    this.setState({
      activeState: value,
    });
  };

  handleDelete = (item) => {
    console.log("Delete", item);
    const newList = this.state.data.filter((element) => element.id !== item.id);

    this.setState({
      data: newList,
    });
  };

  handleLabelClick = (arg) => {
    this.setState({
      activeState: arg,
    });
  };

  render() {
    const { data, activeState } = this.state;

    const newList = data.filter((item) => {
      if (activeState === "all") {
        return true;
      }
      if (activeState === "active") {
        return item.isActive === true;
      }
      if (activeState === "non-active") {
        return item.isActive === false;
      }
    });

    console.log("render");
    return (
      <Tools labelValue={activeState} onAction={this.onListChange}>
        <SimpleList
          onLabelClick={this.handleLabelClick}
          data={newList}
          onAction={this.handleDelete}
        />
      </Tools>
    );
  }
}

export default HomePage;

