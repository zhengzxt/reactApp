'use strict';
import React from 'react';
import ReactDom from 'react-dom';

import Myapp from './router4-app.js';

require('../css/index.scss')


ReactDom.render(
	<Myapp/>,
	document.getElementById('app')
	)

if(module.hot){
	module.hot.accept();
}