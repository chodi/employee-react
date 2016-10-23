import React, { Component } from 'react';

class InputText extends React.Component
{   
   render() 
   {
      return (
         <div className="col-sm-9">
            <input placeholder={this.props.placeholder}
            className={ this.props.className }
            id={ this.props.ID }
            type={ this.props.inputType } />
         </div>
      );
   }
}

export default InputText;