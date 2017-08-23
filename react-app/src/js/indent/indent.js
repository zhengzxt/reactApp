'use strict';

import React from 'react';

import { Link, Route } from 'react-router-dom';
import { Icon } from 'antd';
import store from '../redux/store/store.js';

import Foot from '../index/footer.js';
import Islogin from './islogin.js';
import Unlogin from './unlogin.js';
import Shopcar from './shopcar.js';


class Indent extends React.Component{
	constructor(props){
		super(props)
		this.state={
			logined:store.getState().username,
			sure:<Islogin/>
		}
	}

	

	render(){
		if(this.state.logined){
			this.state.sure = <Unlogin/>
		}
		return(
				<div id="indent">
					<header>
						订单
					</header>
					{this.state.sure}
					<Foot/>

					<Route path='/indent/shopcar' component={Shopcar}></Route>

				</div>
			)
	}
}

export default Indent