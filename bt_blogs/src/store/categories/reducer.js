const initState = {
	categoriesList: []
};

const reducer = (state = initState, action) => {
	switch(action.type){
		case 'ACT_GET_LIST_CATEGORIES':
			return {
				...state,
				categoriesList: action.payload
			};
		default:
			return state;
	}
}

export default reducer;
