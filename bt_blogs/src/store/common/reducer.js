const initState = false;

const reducer = (state = initState, action) => {
	switch(action.type){
		case 'ACT_SET_LOADING_STATE':
			return action.isLoading;
		default:
			return state;
	}
}

export default reducer;
