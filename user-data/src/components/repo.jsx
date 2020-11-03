import React, { Component } from "react";
import axios from "axios";
import Users from "./users";
class Repo extends Component {
  constructor(props){
    super(props);
    this.state = {
      login_names: [],

    };
}

handleClick (){
}

  componentDidMount() {

    
  }

  render() {
    return (
    // <button onClick={this.handleClick()}>click</button>
    <h1>Test</h1>
    );
  }
}

export default Repo;
