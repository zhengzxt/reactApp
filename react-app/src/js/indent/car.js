'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import store from '../redux/store/store.js';

class Car extends React.Component{
	constructor(props){
		super(props)
		this.state={
			shopcar:store.getState().shopcar,
		}
	}

	addshopcar(item){
		store.dispatch({
			type:"ADD_CAR",
			goods:item,
		})
    }

    delshopcar(item){
		store.dispatch({
			type:"DEL_CAR",
			goods:item,
		})
    }

	render(){
		if(this.state.shopcar.length){
			var list = this.state.shopcar.map((items,index)=>{
				return 	(
					<li key={index}>
						<div><Link to={{ pathname:"/home/detail", state:{data:items}}}><img src={items.img} alt=""/></Link>
						<p><span>{items.title}</span><span>{items.cost}</span></p>
						</div>
						<p className='docar'>
						<span onClick={this.delshopcar.bind(this,items)}>-</span>
						<span>{items.num}</span>
						<span onClick={this.addshopcar.bind(this,items)}>+</span>
						</p>
					</li>)
			})
		}else{
			var list = <li>你还没有购买商品逛逛去吧</li>
		}
		return(
			<ul className='car'>
				{list}
			</ul>
			)
	}
}

export default Car