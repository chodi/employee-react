import React, { Component } from 'react';

class Button extends Component {
  render() 
  {
    return (
    	<div className="col-sm-3">
	    	<button id={ this.props.id}
	        className={ this.props.className}
	        onClick={this.props.change}>{this.props.label}</button>
		</div>
        )
  }
}

export default Button;