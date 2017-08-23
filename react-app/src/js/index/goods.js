"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Icon } from 'antd';

import store from '../redux/store/store.js';

class Goods extends React.Component{
	constructor(props){
		super(props)
		
		this.state = {
			goods:[],
			username:store.getState().username,
			goodstype:"goods"
		}
		if(this.props.goodstype){
			this.state.goodstype=this.props.goodstype
		}


		fetch("http://www.bb.com:3000/"+this.state.goodstype)
		.then(response => {    
            return response.json();
        })
        .then(result => {
           this.setState({goods:result});
           //this.state.goods = result;
            
        },err => {
            console.log(err);
        })
    }
    addshopcar(item){
    	if(item.have == 'false'){
    		alert('该商品已售罄')
    	}else{
    		if(this.state.username == null){

    			this.context.router.history.push('/my/login',"xxx")
    			
    		}else{
    			store.dispatch({
					type:"ADD_CAR",
					goods:item,
				})
    		}
    	}
    }

	render(){


		let arr = [...this.state.goods]

		if(this.props.isSort){
			for(let i = 0; i < arr.length-1; i++){                 //排序升序
				for(let j = i + 1; j < arr.length; j++){
					if(parseFloat(arr[i].cost) < parseFloat(arr[j].cost)){
						let tem = arr[i];
						arr[i] = arr[j]
						arr[j] = tem 
					}
				}
			}
			switch(this.props.isSort){
				case 'goup':arr.reverse();
				break;
				case 'gonone': arr = this.state.goods
				break;
			}
			
		}

		if(this.props.isGood){
			arr = this.props.goods;
		}




		var lis = arr.map((item,index)=>{
			return (
				<li key={index}>
					
					<Link to={{ pathname:"/home/detail", state:{data:item}}}><img src={item.img} alt=""/></Link>
					<p>{item.title}
										</p>
					<p><span>{item.cost}</span><span className='shopcar' onClick = {this.addshopcar.bind(this,item)}><Icon type="shopping-cart" /></span></p>
				</li>
				)
			})
		return(
			<ul className="goods">
				{lis}
			</ul>
			)
	}
}
Goods.contextTypes = {
	router:PropTypes.object
}


export default Goods