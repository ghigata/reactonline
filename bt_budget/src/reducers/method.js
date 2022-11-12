import * as types from './../constants/ActionTypes';
let defaultState = "inc";

const method = (state = defaultState, action) => {
	switch(action.type){
		case types.CHANGE_METHOD:
			return action.value;
		default:
			return state;
	}
}

export default method;
