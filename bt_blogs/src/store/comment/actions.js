import { CommentService } from './../../services/comment';
const ACT_GET_LIST_COMMENTS = 'ACT_GET_LIST_COMMENTS';
const ACT_GET_CHILDREN_COMMENTS = 'ACT_GET_CHILDREN_COMMENTS';

export const actGetListComments = (comments) => {
	return {
		type : ACT_GET_LIST_COMMENTS,
		payload: comments
	}
}

export const actGetListChildrenComments = (comments) => {
	return {
		type : ACT_GET_CHILDREN_COMMENTS,
		payload: comments
	}
}

export const actGetListCommentsAsync = (pageSize, page, postID, parentID) => {
	return async function(dispatch) {
		try {
				//show loading icon before getting data
				//dispatch(actSetLoadingState(false));
				const response = await CommentService.getList(pageSize, page, postID, parentID);
				if(response.status === 200) {
					dispatch(actGetListComments(response.data));
					//hide loading icon after getting data
					//dispatch(actSetLoadingState(true));
				} else {
					throw new Error('Loi khi lay du lieu ve');
				}
		} catch (e) {

		}
	}
}

export const actGetListChildrenCommentsAsync = (pageSize, page, postID, parentID) => {
	return async function(dispatch) {
		try {
				//show loading icon before getting data
				//dispatch(actSetLoadingState(false));
				const response = await CommentService.getList(pageSize, page, postID, parentID);
				if(response.status === 200) {
					dispatch(actGetListChildrenComments(response.data));
					//hide loading icon after getting data
					//dispatch(actSetLoadingState(true));
				} else {
					throw new Error('Loi khi lay du lieu ve');
				}
		} catch (e) {

		}
	}
}
