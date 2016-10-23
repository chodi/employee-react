import React, { Component } from 'react';

class Label extends Component {
  render() 
  {
    return <label
        className="col-sm-2 control-label"
        style={this.props.buttonStyle}
        htmlFor={ this.props.htmlFor }>{this.props.label}</label>
  }
}
export default Label;