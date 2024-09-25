import React, { useEffect, useMemo, useState } from "react";
import Tools from "../components/Tools";
import SimpleList from "../list/SimpleList";

const MyContext = React.createContext();

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      activeState: "all",
      message: "",
      showLabel: true,
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

    // const value = {
    //   key: value,
    // };

    // const value = useMemo(() => {
    //   return {
    //     key: value,
    //   };
    // }, []);

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

  handleShowLabel(evt) {
    this.setState({
      showLabel: evt.target.checked,
    });
  }

  // handleClick = () = (()=> {
  //   console.log("Clikeed right there")
  // })

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
      <div>
        <div>
          <input checked={this.state.showLabel} type="checkbox" /> Show Label
        </div>
        <MyContext.Provider value={this.state.showLabel}>
          <Tools labelValue={activeState} onAction={this.onListChange}>
            <SimpleList
              onLabelClick={this.handleLabelClick}
              data={newList}
              onAction={this.handleDelete}
            />
          </Tools>
        </MyContext.Provider>
      </div>
    );
  }
}

export default HomePage;
export { MyContext };

