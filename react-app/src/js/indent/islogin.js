'use strict';

import React from 'react';

import { Link } from 'react-router-dom';

class Islogin extends React.Component{
	render(){
		return(
			<section>
				<p>没有订单</p>
				<p>您还没有登录，请登录后查看订单</p>
				<span><Link to="/my/login">登录</Link>/<Link to="/my/login">注册</Link></span>
			</section>
			)
	}
}

export default Islogin