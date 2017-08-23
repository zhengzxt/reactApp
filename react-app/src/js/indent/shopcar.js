'use strict';

import React from 'react';

import { Link } from 'react-router-dom';
import store from '../redux/store/store.js';

import { Icon } from 'antd';

import Car from './car.js';
import Goods from '../index/goods.js';

class Shopcar extends React.Component{
	constructor(props){
		super(props)
		this.state={
			true:true,
			shopcar:store.getState().shopcar,
			allcost:null
		}
		
	}

	change(){
		if(this.state.true){
			this.setState({shopcar:store.getState().shopcar})
		}
		
	}
	goback(){
		this.props.history.go(-1);
	}

	componentDidMount() {
    	store.subscribe(this.change.bind(this))
  	}

  	componentWillUnmount(){
  		this.state.true = false;
  	}
	render(){

		if(this.state.shopcar){
			this.state.allcost = 0;
			this.state.shopcar.map((item)=>{
				this.state.allcost += (item.cost)*(item.num);
			})
		}


		return(
			<div className="shopingcar animated">
			<header><span onClick={this.goback.bind(this)}><Icon type="left" /></span>购物车</header>
			<section>
				<Car/>
				<p className='title'>其他用户还购买了</p>
				<Goods/>
			</section>
			<footer>
				<span>合计{this.state.allcost.toFixed(2)}</span>
				<span>去结算</span>
			</footer>
			
			</div>
			)
	}
}



export default Shopcar