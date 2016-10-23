import React from 'react';

export default class EmployeeListView extends React.Component
{

	constructor(props)
	{
		super(props);
	}
	render()
	{	const { ID, name , age , contacts  } = this.props;
		return(	 
			<tbody>
		        <tr >
		            <td className="table-bordered"> 
			        	<label>{ID}</label>		        	
			        </td>				        
			        <td className="table-bordered"> 	
			        	<label>{name}</label>
		            </td>
		            <td className="table-bordered">
			        	<label>{age}</label>
		            </td>
		            <td className="table-bordered">
			        	<label >{contacts}</label>
		            </td>
				</tr>	
		    </tbody>    	
		);
	}
}