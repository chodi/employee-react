import _ from 'lodash';
import React from 'react';
import EmployeeListView from './employee-list-view';
export default class EmployeeView extends React.Component
{
	constructor(props)
	{
		super(props);
		
	}
	
	renderItems()
	{
		const props = _.omit(this.props, 'employee');
		return _.map( this.props.employee, ( emp, index) => <EmployeeListView key={
			index} {...emp} {...props}/>);
	}
	render()
	{
		return( 
		<div  style={{ width:'80%' , margin: '80px auto auto auto'}}>
			<table className="table table-condensed table-bordered">
				<thead className="table-bordered">
					<tr>
						<th className="table-bordered"> Employee ID </th>
						<th className="table-bordered"> Name </th>
						<th className="table-bordered"> Age </th>
						<th className="table-bordered"> Contacts </th>							
					</tr>							

				</thead>
					{this.renderItems()}
			</table>
			</div>
		);
	}
}