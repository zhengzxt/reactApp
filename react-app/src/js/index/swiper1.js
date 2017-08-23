"use strict";

import React from 'react';

import { Link } from 'react-router-dom';


class MySwiper extends React.Component{
	componentDidMount(){
		var mySwiper = new Swiper ('.mySwiper1', {
		    autoplay:2000,
		    pagination: '.swiper-pagination',
		    autoplayDisableOnInteraction : false,
		    observer:true,
			observeParents:true
		  });
		            
	}
	render(){
		return(
				<div className = 'swiper'>
						<div className="swiper-container mySwiper1" >
						    <div className="swiper-wrapper">
						        <div className="swiper-slide"><img src="/img/swiper.jpg" /></div>
						        <div className="swiper-slide"><img src="/img/swiper.jpg" /></div>
						        <div className="swiper-slide"><img src="/img/swiper.jpg" /></div>
						    </div>
						  
						    <div className="swiper-pagination"></div>		
						</div>
						
					</div>

			)
	}
}

export default MySwiper