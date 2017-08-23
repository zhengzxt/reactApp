"use strict";

import React from 'react';

import { Link } from 'react-router-dom';


class MySwiper extends React.Component{
	componentDidMount(){
		 var mySwiper = new Swiper ('.mySwiper2', {
		    loop: true,
		    slidesPerView : 2,
		    centeredSlides : true,
		    observer:true,
			observeParents:true
		  })    
		              
	}
	render(){
		return(
				<div className='swiper2'>
					<div className="swiper-container mySwiper2" >
					    <div className="swiper-wrapper">
					        <div className="swiper-slide"><Link to="/home"><img src="/img/sec-1.jpg" alt=""/></Link></div>
					        <div className="swiper-slide"><Link to="/home"><img src="/img/sec-2.jpg" alt=""/></Link></div>
					        <div className="swiper-slide"><Link to="/home"><img src="/img/sec-3.jpg" alt=""/></Link></div>
					        <div className="swiper-slide"><Link to="/home"><img src="/img/sec-4.jpg" alt=""/></Link></div>
					        <div className="swiper-slide"><Link to="/home"><img src="/img/sec-5.jpg" alt=""/></Link></div>
					        <div className="swiper-slide"><Link to="/home"><img src="/img/sec-6.jpg" alt=""/></Link></div>
					    </div>
				
					</div>
					
				</div>

			)
	}
}

export default MySwiper