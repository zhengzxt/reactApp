'use strict';

import React from 'react';

import { Link } from 'react-router-dom';

import { Icon } from 'antd';
 
import Goods from './goods.js';
import Carfooter from '../find/carfooter.js';

class Detail extends React.Component{
	componentDidMount(){
		console.log(this)
		var header = this.refs.head.parentElement;
		var that = this;
		header.style.height = '1.5rem';
		header.style.background = `url(${this.props.location.state.img}) no-repeat center center`;
		header.style.backgroundSize = "cover"

		/*this.refs.sec.addEventListener("touchmove",function(e){
			var num = parseFloat(header.style.height);
						{`/tv/show/${this.state.item}`}
				if(num > 45 || num == 1.5 ){
					header.style.height = 150-this.scrollTop + "px";
				}else{
					header.style.height = '0.45rem';
					header.style.background="red";
				}	
		},false);
		
		*/

		touch.on(this.refs.sec,'drag',function(e){
			if(e.direction == 'up'){
				header.style.height = header.offsetHeight + e.y + "px"
				if(header.offsetHeight < 45){
					header.style.height = 45 + "px";
					header.style.background="red";
				}
			}


			if(e.direction == 'down'){
				if(that.refs.sec.scrollTop == 0){
					header.style.height = 45 + e.y + "px"
					if(header.offsetHeight > 150){
						header.style.height = 150 + "px";
						header.style.background = `url(${that.props.location.state.img}) no-repeat center center`;
						header.style.backgroundSize = "cover"
					}
				}
				
			}
			
				
				
				
			
		})
	}


	render(){
		return(
			<div className='detail1 animated'>
				<header>
					<span>
					<Link to="/home"><Icon type="left" /></Link>
					</span>

					<span ref="head">无肉不欢</span>
					<span>
					<Link to="/find/search"><Icon type="search" /></Link>
					<span><Icon type="shopping-cart" /></span>
					</span>
				</header>

				<section ref="sec">
					<Goods/>
				</section>
				<Carfooter/>
		
			</div>
			)
	}
}

export default Detail;