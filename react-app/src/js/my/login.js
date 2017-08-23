'use strict';

import React from 'react';

import { Link } from 'react-router-dom';

import { Icon } from 'antd';

import store from '../redux/store/store.js';

class Login extends React.Component{
	login(){
		var username = this.refs.username.value.replace(/^\s+/, "").replace(/\s+$/, "");
		var password = this.refs.password.value.replace(/^\s+/, "").replace(/\s+$/, "");
		var str = username+password;
		var istrue = true;

		if(str != ''){
			var str2 = localStorage.getItem("login");			
			if(str2){     //localStorage 存在
				var arr = JSON.parse(str2);
				for(var i in arr){
					if(arr[i].username == username && arr[i].password == password){
						store.dispatch({
							type:"TO_LOGIN",
							username:this.refs.username.value
						})
						istrue = false;
						this.props.history.go(-1);
				
					}
				}	
			}			
		}
		if(istrue){
			alert('请输入正确的用户名和密码');
		}
		
	}

	goback(){
		this.props.history.go(-1);
	}
	
	render(){
		return(
			<div className = 'login animated'>
				<header><span onClick = {this.goback.bind(this)}><Icon type="left"/></span>登录</header>
				<section>
					<input type="text" placeholder="请输入您的手机号" ref='username' />
					<input type="text" placeholder="请输入登录密码" ref='password' />
					<button onClick={this.login.bind(this)}>登录</button>
					<p><a href="#">忘记密码</a><Link to='/my/registor'>立即注册</Link></p>
				</section>
				<footer>
					版本3.3.1
				</footer>
			</div>
			)
	}
}

export default Login