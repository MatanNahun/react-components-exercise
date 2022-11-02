import Spam from "./Spam";
import React, { Component } from "react";

class Spamalot extends Component {
  render() {
    let arrOfSpams = [];
    for (let i = 0; i < 500; i++) {
      arrOfSpams.push(<Spam></Spam>);
    }

    return arrOfSpams;
  }
}

export default Spamalot;
