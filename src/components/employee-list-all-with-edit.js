import React from 'react';
import Label from './miniComponents/Label';

export default class EmployeeListAllWithEdit extends React.Component
{
	constructor(props){
		super(props);

		this.state = 
		{
			isEditing: false
		};
	}

	render()
	{
		return(
			<div className="form-horizontal" style={{width:'80%' , margin: '80px auto auto auto'}}>						        	
	        	{this.renderListSection()}
				{this.renderActionSection()}
			</div>
		);
	}

	renderListSection()
	{
		const { ID, name , age , contacts  } = this.props;

		
		if( this.state.isEditing)
		{
			return(
				<div className="form-horizontal" style={{width:'80%' }}>
					<form className="form-group" onSubmit={ this.onSaveClick.bind(this)}>	
						<div className="form-group"> 
				        	<Label className="col-sm-2 control-label" label = "Employee No. "/>
				        	<div className="col-sm-10">
				        		<input className="form-control" defaultValue={ID} ref="editID" type="text" placeholder="Employee Id"/>
				        	</div>			        	
				        </div>
			            <div className="form-group"> 
				        	<Label className="col-sm-2 control-label" label = "Name"/>
				        	<div className="col-sm-10">
				        	<input className="form-control" defaultValue={name} ref="editName" type="text" placeholder="Name"/>
				        	</div>			        			        	
				        </div>	
				        
				        <div className="form-group"> 	
				        	<Label className="col-sm-2 control-label" label = "Age"/>
				        	<div className="col-sm-10">
				        		<input className="form-control" defaultValue={age} ref="editAge" type="text" placeholder="Age"/>
				        	</div>			        	
			            </div>

			            <div className="form-group"> 	
				        	<Label className="col-sm-2 control-label" label = "Contacts"/>

				        	<div className="col-sm-10">
				        		<input className="form-control"  defaultValue={contacts} ref="editContacts" type="text" placeholder="Contacts"/>
				        	</div>			        	
			            </div>	
					</form>					
				</div>	
				)
		}

		return(
			<div className="form-horizontal" style={{width:'50%' }}>
			<div  className="col-sm-5 control-label">
				<label className="col-sm-10 control-label"> {name}</label>
				</div>
			</div>

		);
	}
	renderActionSection()
	{
		if(this.state.isEditing)
		{
			return(
				<div >
					<button className="btn-success btn-lg btn-default"	onClick={this.onSaveClick.bind(this)}>Save</button>
					<button className="btn-success btn-lg btn-danger" onClick={this.onCancelClick.bind(this)}>Cancel</ button>
				</div>	
			);
		}
		else
		{
			return(
				<div >
					<button className="btn-success btn-lg btn-default" onClick={this.onEditClick.bind(this)}>Edit</button>					
					<button  className="btn-danger btn-lg btn-default" onClick={this.props.deleteEmployee.bind(this, this.props.ID )}>Delete</button>
				
				</div>	
			);
		}
	};	
	
	onSaveClick( event)
	{
		event.preventDefault();

		const oldInfo = this.props.ID;
		const newInfo = {
			ID : this.refs.editID.value,
			name : this.refs.editName.value,
			age : this.refs.editAge.value,
			contacts : this.refs.editContacts.value
		};
		
		this.props.saveEmployee(oldInfo, newInfo );
		this.setState({isEditing : false });
	}

	onEditClick()
	{
		this.setState({isEditing:true});
	}

	onCancelClick()
	{
		this.setState({isEditing:false});
		this.renderActionSection;
	}
}