"use strict";

import React from 'react';

import { Link } from 'react-router-dom';
var oDiv = document.createElement("div");
class Nav3 extends React.Component{
	
	componentDidUpdate(){		
		var par = this.refs.happy;
		
		touch.on(par,"hold",function(){
			
			oDiv.className = "circle";
			par.appendChild(oDiv);
			
		})
		touch.on(par,'touchend',function(){
			var oDiv = par.querySelector(".circle")
			if(oDiv){
				par.removeChild(oDiv);
			}
		})
	}

	
	render(){
		return(
			<li ref="happy">
					<Link to={{pathname:'/home/detail1',state:{img:this.props.lisrc}}}><img src={this.props.lisrc} alt=""/></Link>
			</li>
			)
	}
}

export default Nav3