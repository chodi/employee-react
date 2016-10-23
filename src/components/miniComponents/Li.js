import React, { Component } from 'react';

class Li extends Component {
  render() 
  {
    return <li
        hello={this.props.myValue}>{this.props.label}</li>
  }
}
export default Li;