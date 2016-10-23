import React from 'react';

import ReactDOM ,{ render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

import Main from 'components/main';
import App from 'components/app';

  
const myApp = document.getElementById("app"); 

ReactDOM.render((
	<Router history={browserHistory}>
	   <Route path="/" component={Main}>
	   		<IndexRoute component={App}/>
		   	<Route path="addEmployee" component={App} ></Route>
		   	<Route path="Edit" component={App} > </Route>
		   	<Route path="View" component={App}> </Route>
	   </Route>
   </Router>)
	
, myApp)