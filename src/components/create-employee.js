import React from 'react';
import EmployeeListView from './employee-list-view';

import Label from './miniComponents/Label';

export default class CreateEmployee extends React.Component
{
	constructor(props)
	{
		super(props);
	}
	
	handleCreate(event)
	{
		event.preventDefault();
		var details = 
		{
			ID : this.refs.ID.value,
			name: this.refs.name.value, 
			age : this.refs.createAge.value,
			contacts : this.refs.createContacts.value
		};

		this.props.createEmployee( details );
		this.refs.ID.value = '';
		this.refs.name.value = '';
		this.refs.createAge.value = '';
		this.refs.createContacts.value = '';
	}
	
	render()
	{
		return(
			<div className="form-horizontal" style={{width:'80%' , margin: '80px auto auto auto'}}>
				<form className="form-group" onSubmit={this.handleCreate.bind(this)}>
		            <div className="form-group"> 
			        	<Label className="col-sm-2 control-label" label = "Employee No. "/>
			        	<div className="col-sm-10">
			        		<input className="form-control col-sm-10" ref="ID" type="text" placeholder="Employee Id"/>		        	
			        	</div>
			        </div>

			        <div className="form-group"> 
			        	<Label className="col-sm-2 control-label" label = "Name"/>
			        	<div className="col-sm-10">
			        		<input className="form-control col-sm-10" ref="name" type="text" placeholder="Name"/>		        	
			        	</div>
			        </div>	
			        
			        <div className="form-group"> 	
			        	<Label label = "Age"/>
			        	<div className="col-sm-10">
			        		<input className="form-control" ref="createAge" type="text" placeholder="Age"/>
			        	</div>
		            </div>

		            <div className="form-group"> 	
			        	<Label label = "Contact"/>
			        	<div className="col-sm-10">
			        	<input className="form-control"  ref="createContacts" type="text" placeholder="Contact"/>
		            	</div>
		            </div>      

		            <div className="form-group">
						<div className="col-sm-offset-2 col-sm-6">
							<button className="btn-success btn-lg btn-default" >Create</button>
						</div>.
	              	</div>
				</form>
		    </div>			
		); 
	}
}