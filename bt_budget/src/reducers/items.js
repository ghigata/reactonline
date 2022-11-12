import * as types from './../constants/ActionTypes';
let defaultState =  [
						{'type': 'inc', 'title': 'luong thang 9', 'value': '2000000'},
						{'type': 'exp', 'title': 'di cho', 'value': '500000'},
						{'type': 'inc', 'title': 'tien thuong quy', 'value': '1000000'}
					];

const items = (state = defaultState, action) => {
	switch(action.type){
		case types.ADD_ITEM:
			const item = action.item;
			state.push(item);
			return [...state];
		case types.DELETE_ITEM:
			state.splice(action.index, 1);
			return [...state];
		default:
			return state;
	}
}

export default items;
