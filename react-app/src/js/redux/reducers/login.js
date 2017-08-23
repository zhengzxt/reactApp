'use strict';

const defaultState = {
	username:null,
	shopcar:[],
	history:[]
}

const Reducer = (state = defaultState, action = {}) =>{
	switch(action.type){
		case 'TO_LOGIN':
		state.username = action.username;
		console.log(action.username);
		return Object.assign({},state,{});
		case "ADD_CAR":
		var have = true;
		var numb = 1;
		if(state.shopcar.length){   
			for(var i = 0; i < state.shopcar.length; i++){
				if(state.shopcar[i].title == action.goods.title){
					have=false;
					state.shopcar[i].num = state.shopcar[i].num + numb;
				}
			}
		}
		
		if(have){         
			action.goods.num = numb;
			state.shopcar.push(action.goods);
		}
		return Object.assign({},state,{});

		case "DEL_CAR":
		state.shopcar.map((item,index)=>{
			if(item.title == action.goods.title){
				switch(item.num){
					case 1: state.shopcar.splice(index,1);
					break;
					default: item.num = item.num - 1
					break;
				}	
			}
		})
		return Object.assign({},state,{});

		case 'HISTORY':
		state.history.push(action.history);
		return Object.assign({},state,{});
		case 'CLEAR':
		state.history = [];
		return Object.assign({},state,{});
		default:
      	return Object.assign({},state,{});
	}
}

export default Reducer



