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
		console.log(this.props)
	}
	render(){
		var xxx = "未查询到该物品";
		if(this.props.location.state.goods.length){
			xxx = <Goods goods = {this.props.location.state.goods} isGood={true} />
		}

		return(
			<div className='detail animated'>
				<MyHeader title={this.props.location.state.title}/>											
				<section>
					{xxx}
				</section>
				<Carfooter/>
			</div>
			)
	}
}
export default Detail