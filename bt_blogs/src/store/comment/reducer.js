const initState = {
	commentList: [],
	childrenCommentsList: []
};

const reducer = (state = initState, action) => {
	switch(action.type){
		case 'ACT_GET_LIST_COMMENTS':
			return {
				...state,
				commentList: action.payload
			};
		case 'ACT_GET_CHILDREN_COMMENTS':
			let existComments = state.childrenCommentsList;
			if(existComments.length > 0) {
				action.payload.map((item, index) => {
					existComments.push(item);
				})
			} else {
				existComments = action.payload;
			}

			return {
				...state,
				childrenCommentsList: existComments
			};
		default:
			return state;
	}
}

export default reducer;
