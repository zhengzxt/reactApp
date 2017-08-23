'use strict';

import React from 'react';

import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Index from './index/index.js';
import Find from './find/find.js';
import Indent from './indent/indent.js';
import My from './my/my.js';

class App extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<div id = "relapp">
					<Redirect to="/home" />
					<Route path="/home" component={Index}></Route>
					<Route path="/find" component={Find}></Route>
					<Route path="/indent" component={Indent}></Route>
					<Route path="/my" component={My}></Route>
				</div>
				
			</BrowserRouter>
			)
	}
}

export default App