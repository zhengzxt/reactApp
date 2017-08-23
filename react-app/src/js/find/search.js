'use strict';

import React from 'react';
import { Icon } from 'antd';
import store from '../redux/store/store.js';

import History from './history.js';

class Search extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			all:[],
			res:[]
		}

		fetch("http://www.bb.com:3000/goods").then(response => response.json()
		).then(result=>{
			this.state.all.push(...result)
		},err=>{
			console.log(err)
		}).then(
			fetch("http://www.bb.com:3000/smell").then(response => response.json()
			).then(result=>{
				this.state.all.push(...result)
			},err=>{
				console.log(err)
			})
		).then(
			fetch("http://www.bb.com:3000/meat").then(response => response.json()
			).then(result=>{
				this.state.all.push(...result);
			},err=>{
				console.log(err)
			})
		)
	}



	search(){
		var str = this.refs.inp.value.replace(/^\s+/,'').replace(/\s+$/,'');
		store.dispatch({
			type:'HISTORY',
			history:str
		})
		let arr = []
		if(str != ""){
			this.state.all.map((item,index)=>{
				if(new RegExp(str, "ig").test(item.title)){
					arr.push(item)
				}
			})

			this.props.history.push('/find/serdet',{title:str,goods:arr});
		}
	}

	clear(){
		this.refs.clear.refs.clear.innerHTML='';
		store.dispatch({
			type:'CLEAR'
		})
	}

	goback(){
		this.props.history.go(-1);
	}

	render(){
		return(
			<div className='search animated'>
				<header>
					<span onClick = {this.goback.bind(this)}><Icon type='left' /></span>
					<input type="text" placeholder="  请输入关键字" ref="inp" />
					<span onClick={this.search.bind(this)}>搜索</span>
				</header>
				<section>
					<p>大家都在搜</p>
					<ul>
						<li>
							<a href="#">营养食品</a>
							<a href="#">休闲食品</a>
							<a href="#">果汁饮料</a>
							<a href="#">卸妆洁面</a>
							<a href="#">养颜面膜</a>
							<a href="#">面部护理</a>
							<a href="#">诱惑唇妆</a>
							<a href="#">无暇妆容</a>
						</li>
					</ul>

					<p>搜索历史</p>

					<History ref='clear'/>
					<button onClick={this.clear.bind(this)}>清空搜索历史</button>
				</section>
			</div>
			)
	}
}
export default Search