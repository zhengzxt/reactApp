'use strict';

import React from 'react';

import store from '../redux/store/store.js';


class History extends React.Component{
	constructor(props){
		super(props)
		this.state={
			history:store.getState().history
		}

	}
	render(){

		var lis = this.state.history.map((item,index)=>{
			return	<li key={index}>{item}</li>
				
		})
		return(
				<ul ref='clear'>
					{lis}
				</ul>
			)
	}
}

export default History