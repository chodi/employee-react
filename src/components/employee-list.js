import _ from 'lodash';
import React from 'react';
import EmployeeListAllWithEdit from './employee-list-all-with-edit';
export default class EmployeeList extends React.Component
{
	constructor(props)
	{
		super(props);
		
	}
	renderItems()
	{
		const props = _.omit(this.props, 'employee');
		return _.map( this.props.employee, ( emp, index) => <EmployeeListAllWithEdit key={
			index} {...emp} {...props}/>);
	}
	render()
	{
		return( 
			<div> 
				<div className="form-horizontal" style={{ margin: '80px auto auto auto'}}>
					{this.renderItems()}
				</div>

			</div>
		);
	}
}