'use strict';

import React from 'react';

import {  Link, Route } from 'react-router-dom';
import { Icon } from 'antd';
import store from '../redux/store/store.js';

import Foot from '../index/footer.js';
import Login from './login.js';
import Registor from './registor.js'

class My extends React.Component{
	constructor(props){
		super(props);
		this.state={
			true:true,
			logined:store.getState().username,
			sure:<p><span><Link to='/my/login'>登录</Link>\<Link to='/my/login'>注册</Link></span><span>你尚未登录，请登录后查看个人信息</span></p>
		}	
	}

	login(){
		if(this.state.true){
			this.setState({logined:store.getState().username})
			console.log("my")
		}
		
	}

	componentDidMount() {
    	store.subscribe(this.login.bind(this))
  	}

  	componentWillUnmount(){
  		this.state.true = false;
  	}
	
	render(){
		if(this.state.logined){
			this.state.sure =<p>手机用户：{this.state.logined}</p>
		}

		return(
			<div id="my">
				<header >
					我的
					<Link to="/"><Icon type="search" /></Link>

				</header>

				<section>
					<div>
						<img src="/img/my.jpg"/>
						{this.state.sure}
					</div>
					<ul>
						<li>
							<Icon type='search' /> <span>我的钱包</span>
						</li>
						<li>
							<Icon type='search' /> <span>我的足迹</span>
						</li>
						<li>
							<Icon type='search' /> <span>我的地址</span>
						</li>
						<li>
							<Icon type='search' /> <span>网络电话</span>
						</li>
					</ul>
				</section>
				<Foot/>
				<Route path="/my/login" component={Login}></Route>
				<Route path="/my/registor" component={Registor}></Route>
			</div>
			)
	}
}

export default My