import React from 'react';
import { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
import App from './app';

export default class Main extends React.Component
{
	constructor(props)
	{
		super(props);
	}
	render()
	{
		return( 
			<div> 
				<nav className="navbar navbar-default">
	                <div className="container-fluid">
	                    <div className="navbar-header">
	                        <Link className="navbar-brand" to="/">Home</Link>
	                    </div>
	                    <ul className="nav navbar-nav">
	                        <li><Link to="addEmployee">ADD</Link> </li>
	                        <li><Link to="Edit">EDIT</Link> </li>
	                        <li><Link to="View">View</Link> </li>
	                    </ul>
	                </div>
	            </nav>
	            {this.props.children}
			</div>
		);
	}
}