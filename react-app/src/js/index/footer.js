"use strict";

import React from 'react';

import { NavLink } from 'react-router-dom';

import { Icon } from 'antd';

class Goods extends React.Component{
	
	render(){
		return(
			<footer>
				<NavLink activeStyle={{color:"red"}} to="/home"><Icon type="home" /><span>首页</span></NavLink>
				<NavLink activeStyle={{color:"#f4c600"}} to="/find"><Icon type="bulb" /><span>发现</span></NavLink>
				<NavLink activeStyle={{color:"#00bd9b"}} to="/indent"><Icon type="file-text" /><span>订单</span></NavLink>
				<NavLink activeStyle={{color:'#9b55b7'}} to="/my"><Icon type="user" /><span>我的</span></NavLink>
				
			</footer>
			)
	}
}

export default Goods