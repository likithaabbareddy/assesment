import React, { Component } from 'react';
import NamesContainer from './namesContainer';
import Users from "./users";
class Name extends Component {
    state = {  }
    render() { 
    return ( <div>{this.props.name}</div> );
    }
}
 
export default Name;