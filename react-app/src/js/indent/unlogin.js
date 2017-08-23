'use strict';

import React from 'react';

import { Link } from 'react-router-dom';

class Unlogin extends React.Component{
	render(){
		return(
			<section>
				<p>没有订单</p>
				<p>看一下喜欢的</p>
				<span><Link to="/home">逛逛</Link></span>
			</section>
			)
	}
}

export default Unlogin