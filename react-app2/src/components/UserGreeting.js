import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {

    return this.state.isLoggedIn && <div>Welcome Divin</div>;
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Divin</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    // let message;
    // if(this.state.isLoggedIn){
    //   message = <div>Welcome Divin</div>;
    // }
    // else{
    //   message = <div>Welcome Guest</div>;
    // }

    // return <div>{message}</div>
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Divin</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Divin</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
