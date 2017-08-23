'use strict';

import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import store from '../redux/store/store.js';

import MyHeader from './header.js'

class Detail extends React.Component{
	constructor(props){
		super(props)
		this.state={
			username:store.getState().username
		}
	}
	
	gocar(){
		if(this.state.username == null){
			this.props.history.push("/my/login");
		}else{
			this.props.history.push("/indent/shopcar");
		}
	}

	addshopcar(item){
    	if(item.have == 'false'){
    		alert('该商品已售罄')
    	}else{
    		if(this.state.username == null){

    			this.props.history.push('/my/login',"xxx")
    			
    		}else{
    			store.dispatch({
					type:"ADD_CAR",
					goods:item,
				})
    		}
    	}
    }
	render(){
		return(
			  
			<div className='detail animated'>
				<MyHeader title={this.props.location.state.data.title}/>

				
				<section>
					<img src={this.props.location.state.data.img}/>
					<img src="/img/detail.jpg"/>
				</section>

				
				<footer>
					<span>单价：￥{this.props.location.state.data.cost}</span> <span onClick={this.gocar.bind(this)}>购物袋</span><span className='addcar' onClick = {this.addshopcar.bind(this,this.props.location.state.data)}>加入购物车</span>					
				</footer>
			</div>
			

			)
	}
}
export default Detail

              
          
          