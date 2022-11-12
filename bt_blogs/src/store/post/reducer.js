const initState = {
	articleLatest: [],
	articlePopular:[],
	articleList:[],
	articleRelated:[],
	articleDetail:[]
};

const reducer = (state = initState, action) => {
	switch(action.type){
		case 'ACT_GET_LATEST_POSTS':
			return {
				...state,
				articleLatest: action.payload
			};
		case 'ACT_GET_POPULAR_POSTS':
			return {
				...state,
				articlePopular: action.payload
			};
		case 'ACT_GET_LIST_POSTS':
			return {
				...state,
				articleList: action.payload
			};
		case 'ACT_GET_RELATED_POSTS':
			return {
				...state,
				articleRelated: action.payload
			};
		case 'ACT_GET_POST_DETAIL':
			return {
				...state,
				articleDetail: action.payload
			};
		default:
			return state;
	}
}

export default reducer;
