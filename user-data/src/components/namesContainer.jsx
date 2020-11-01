import React, { Component } from 'react';
import Users from './users';
import Name from "./name";
class NamesContainer extends Component {
    state = {  }
    render() { 
    return (<div>{this.props.names.map(name => <Name name={name} key={name} />)}</div>);
    }
}
 
export default NamesContainer;