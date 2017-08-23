'use strict';

import React from 'react';

import { Link } from 'react-router-dom';

import { Icon } from 'antd';

import store from '../redux/store/store.js';

class Registor extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			logined:store.getState().username
		}
	}

	login(){
		
		var username = this.refs.username.value.replace(/^\s+/, "").replace(/\s+$/, "");;
		var password = this.refs.password.value.replace(/^\s+/, "").replace(/\s+$/, "");;
		var str = username+password;
		if(str != ''){
			var str2 = localStorage.getItem("login")
			if(!str2){     //localStorage 不存在
				var arr = [{username,password}];
				localStorage.setItem("login",JSON.stringify(arr))
			}else{
				str2 = JSON.parse(str2);
				str2.push({username,password})
				localStorage.setItem("login",JSON.stringify(str2))
			}
				
			store.dispatch({
				type:"TO_LOGIN",
				username:this.refs.username.value
			})

			this.props.history.go(-2);
		}
		
	}

	goback(){
		this.props.history.go(-1);
	}

	render(){
		return(
			<div className = 'registor animated'>
				<header><span onClick = {this.goback.bind(this)}><Icon type="left"/></span>注册</header>
				<section>
					<input type="text" placeholder="请输入您的手机号" ref='username' />
					<input type="text" placeholder="请输入验证码" />
					<input type="text" placeholder="请输入密码" ref='password' />
					<input type="text" placeholder="推荐人手机号或推荐码" />
					<button onClick = {this.login.bind(this)}>注册</button>
					
				</section>
				
			</div>
			)
	}
}

export default Registor