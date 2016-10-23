import React from 'react';
import { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import CreateEmployee from './create-employee';
import EmployeeView from './employee-view';
import EmployeeList from './employee-list';

const employee = 
[
{
	ID : "0123",
	name : "Chrisstian Rey Erandio",
	age: '14',
	contacts : '09266270079'
},
{
	ID : '3210',
	name : "Mr right",
	age : '20',
	contacts :' 09266270079'
}
]; 

class App extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			employee 
		};


	}
	toRender()
	{

		if( 'addEmployee'== this.props.location.pathname )
		{
			return(			
				<CreateEmployee createEmployee={this.createEmployee.bind( this )}  />
							
			);
		}
		
		else if( 'Edit' == this.props.location.pathname)
		{
			return(				
				<EmployeeList 
				
				employee={ this.state.employee}
				saveEmployee = {this.saveEmployee.bind(this)}
				deleteEmployee={this.deleteEmployee.bind(this)}
				/>			
			);
		}
		else
		{
			return(
				<EmployeeView employee={ this.state.employee } />

			);
		}
	}
	render()
	{
		return(
			<div>
				{this.toRender()}				
			</div>
		);
	}

	createEmployee( newRecord)
	{
		this.state.employee.push(
		{
			ID: newRecord.ID,
			name : newRecord.name,
			age: newRecord.age ,
			contacts : newRecord.contacts
		});
		this.setState({ employee: this.state.employee});

	}
	saveEmployee( oldInfo, newInfo )
	{
		const foundEmp = _.find(this.state.employee, emp => emp.ID === oldInfo);
		foundEmp.ID = newInfo.ID;
		foundEmp.name = newInfo.name;
		foundEmp.age = newInfo.age;
		foundEmp.contacts = newInfo.contacts;
		this.setState({employee : this.state.employee });
	}

	deleteEmployee(EmployeeToDelete)
	{
		_.remove(this.state.employee, emp=> emp.ID === EmployeeToDelete);
		this.setState({employee: this.state.employee});
	}
}

export default App;