'use strict';

import React from 'react';
import store from '../redux/store/store.js';
import proptypes from 'prop-types';

class Footer extends React.Component{
	constructor(props){
		super(props)
		this.state={
			username:store.getState().username
		}
	
	}

	gocar(){
		if(this.state.username == null){
			this.context.router.history.push("/my/login");
		}else{
			this.context.router.history.push("/indent/shopcar");
		}

	}

	render(){
		return(
			<footer>
				<span>山东省济南市</span> <span onClick={this.gocar.bind(this)}>购物袋</span><span className='addcar'>切换地址</span>					
			</footer>
			)
	}
} 
Footer.contextTypes = {
	router:proptypes.object
}
export default Footer;