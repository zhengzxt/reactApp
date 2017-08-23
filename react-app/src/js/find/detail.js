'use strict';
import React from 'react';
import store from '../redux/store/store.js';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import Goods from '../index/goods.js'
import Carfooter from './carfooter.js';
import MyHeader from '../index/header.js';

class Detail extends React.Component{
	constructor(props){
		super(props)
		this.state={
			isSort:null
		}
	}

	gonone(){
		this.setState({isSort:"gonone"});
		this.refs.sort1.className = "active"
		this.refs.sort2.className=""
		this.refs.sort3.className=""
	}

	goup(){
		this.setState({isSort:"goup"});
		this.refs.sort1.className = ""
		this.refs.sort2.className="active"
		this.refs.sort3.className=""
	}
	godown(){
		this.setState({isSort:"godown"});
		this.refs.sort1.className = ""
		this.refs.sort3.className="active"
		this.refs.sort2.className=""
	}
	render(){
		return(
			<div className='detail animated'>
				<MyHeader title={this.props.match.params.title}/>
																		
				<section>
					<ul className='sort'>
						<li className='active' onClick = {this.gonone.bind(this)}  ref='sort1'>人气排行</li>
						<li onClick = {this.goup.bind(this)} ref='sort2'>价格升高</li>
						<li onClick = {this.godown.bind(this)} ref='sort3'>价格降低</li>
					</ul>
					<Goods goodstype = {this.props.match.params.goodstype} isSort = { this.state.isSort } />
				</section>
				<Carfooter/>
			</div>
			)
	}
}
export default Detail