'use strict';

import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Icon } from 'antd';
import store from '../redux/store/store.js';

import Foot from '../index/footer.js'
import Detail from './detail.js';
import Search from './search.js'
import Serdet from './serdet.js'
class Find extends React.Component{
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
	render(){
		return(
				<div id="find">
					<header>
						<span>
						<Link to="/home"><Icon type="bell" /></Link>
						</span>

						<span>发现</span>
						<span>
						<Link to="/find/search"><Icon type="search" /></Link>
						<span onClick = {this.gocar.bind(this)}><Icon type="shopping-cart" /></span>
						</span>
					</header>

					<section>
						<ul>
							<li>
								<Link to='/find/detail/meat/无肉不欢'><img src="/img/find-1.jpg" alt=""/></Link>
							</li>
							<li>
								<Link to='/find/detail/smell/山珍海味'><img src="/img/find-2.jpg" alt=""/></Link>
							</li>
							<li>
								<Link to='/find/detail/goods/甜蜜糕点'><img src="/img/find-3.jpg" alt=""/></Link>
							</li>
							<li>
								<Link to='/find/detail/meat/无肉不欢'><img src="/img/find-4.jpg" alt=""/></Link>
							</li>
							<li>
								<Link to='/find/detail/smell/山珍海味'><img src="/img/find-5.jpg" alt=""/></Link>
							</li>
							<li>
								<Link to='/find/detail/goods/甜蜜糕点'><img src="/img/find-6.jpg" alt=""/></Link>
							</li>
						</ul>
					</section>
					<Foot/>
					<Route path="/find/detail/:goodstype/:title" component={Detail}></Route>
					<Route path="/find/search" component={Search}></Route>

					<Route path="/find/serdet" component={Serdet}></Route>
				</div>
			)
	}
}

export default Find