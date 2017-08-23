'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import propTypes from 'prop-types'
import store from '../redux/store/store.js';

class Header extends React.Component{
	constructor(props){
		super(props)
		this.state={
			username:store.getState().username
		}
	
	}
	goback(){
		this.context.router.history.go(-1);
	}
	gocar(){
		if(this.state.username == null){
			this.context.router.history.push("/my/login");
		}else{
			this.context.router.history.push("/indent/shopcar");
		}

	}
	render(){
		return(
			<header>
				<span>
				<Icon type="left" onClick={this.goback.bind(this)} />
				</span>

				<span ref="head">{this.props.title}</span>
				<span>
				<Link to="/find/search"><Icon type="search" /></Link>
				<span onClick={this.gocar.bind(this)}><Icon type="shopping-cart" /></span>
				</span>
			</header>
		)
	}
}
Header.contextTypes = {
	router: propTypes.object
}

export default Header