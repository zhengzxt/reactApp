'use strict';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Icon } from 'antd';
import store from '../redux/store/store.js';

import Goods from './goods.js';
import Foot from './footer.js';
import Nav3 from './nav3.js';
import MySwiper2 from './swiper.js';
import MySwiper1 from './swiper1.js';
import Detail from './detail.js';
import Detail1 from './detail1.js';
var oDiv = document.createElement('div');
oDiv.className = 'dowmfresh';
var oImg = document.createElement('img')
oImg.src="/img/fresh.jpg";
oDiv.appendChild(oImg);
class Index extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			src:[],
			username:store.getState().username,
			goods:0

		}

		fetch('http://www.bb.com:3000/sec').then(response=>{return response.json()})
		.then(result=>{
			this.setState({src:result})

		},err=>{
			console.log(err);
		})
	}
	componentDidMount(){

		var sec = this.refs.sec;
		var xxx = this.refs;
		var that = this;

		touch.on(sec,'touchstart',function(e){
			//console.log(e);
			//console.log(xxx)
		})

		touch.on(sec,'drag ',function(e){
			if(e.direction == 'up'){
				if(sec.scrollTop + sec.clientHeight == sec.scrollHeight){
					that.state.goods++
					that.setState({goods:that.state.goods});
				}
				
			}
			if(e.direction == 'down' && e.y <= 150){  //下拉刷新

				if(sec.scrollTop==0){
					oDiv.style.top = (45 + e.y/2)+"px"
					oDiv.style.transform = 'rotate('+e.y*2+'deg)'
					sec.appendChild(oDiv);
				}

			}
		})
		var timer
		touch.on(sec,'touchend',function(e){
			if(sec.lastChild == oDiv){
					oDiv.style.top = 45+"px";
					oDiv.style.transform = 'rotate(1000deg)';
					oDiv.style.transition="transform 2s"
					clearTimeout(timer);
				timer = setTimeout(function(){
					sec.removeChild(oDiv);
				},2000)
				
			}
			
		})


		
	}




	gocar(){
		username:store.getState().username
		if(this.state.username == null){
			this.props.history.push("/my/login");
		}else{
			this.props.history.push("/indent/shopcar");
		}
	}


	render(){
		var goods = [<Goods key={0} />];

		for(var i = 0; i < this.state.goods; i++){
			console.log(1);
			goods.push(<Goods key={i+1}/>)
		}
		return(
			<div id="index">
				<header>
					<span>
					<Link to="/"><Icon type="bell" /></Link>
					</span>
					<span>首页</span>
					<span>
					<Link to="/find/search"><Icon type="search" /></Link>
					<span onClick={this.gocar.bind(this)}><Icon type="shopping-cart"/></span>
					</span>
				</header>

				<section ref='sec'>
					<MySwiper1/>
					<ul className="nav">
						<li>
							<Link to="/home/detail1"><img src="/img/nav-1.jpg"/><span>无肉不欢</span></Link>
						</li>
						<li>
							<Link to="/home/detail1"><img src="/img/nav-2.jpg"/><span>甜蜜糕点</span></Link>
						</li>
						<li>
							<Link to="/home/detail1"><img src="/img/nav-3.jpg"/><span>山珍海味</span></Link>
						</li>
						<li>
							<Link to="/home/detail1"><img src="/img/nav-4.jpg"/><span>七彩菜蔬</span></Link>
						</li>
						<li>
							<Link to="/home/detail1"><img src="/img/nav-5.jpg"/><span>快餐料理</span></Link>
						</li>
					</ul>

					<ul className='nav2'>
						<li><Link to="/home"><img src="/img/nav-6.jpg" alt=""/></Link></li>
						<li><Link to="/home"><img src="/img/nav-7.jpg" alt=""/></Link></li>
					</ul>
					
					<ul className="nav3">
						<Nav3 lisrc={this.state.src[0]} />
						<Nav3 lisrc={this.state.src[1]} />
					</ul>

					<p className="title">吃货腔调</p>
					<MySwiper2/>
					<p className="title">吃货情怀</p>
					
					<ul className="nav3">
						<Nav3 lisrc={this.state.src[2]} />
						<Nav3 lisrc={this.state.src[3]} />
						<Nav3 lisrc={this.state.src[4]} />
						<Nav3 lisrc={this.state.src[5]} />
					</ul>

					<p className="title">推荐商品</p>
					{goods}


				</section>
				<Foot/>	

				<Route path='/home/detail/' component={Detail}></Route>	
				<Route path='/home/detail1' component={Detail1}></Route>
					
			</div>
			)
	}
}

export default Index



