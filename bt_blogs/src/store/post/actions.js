import { PostService } from './../../services/posts';
const ACT_GET_LATEST_POSTS = 'ACT_GET_LATEST_POSTS';
const ACT_GET_POPULAR_POSTS = 'ACT_GET_POPULAR_POSTS';
const ACT_GET_LIST_POSTS = 'ACT_GET_LIST_POSTS';
const ACT_GET_RELATED_POSTS = 'ACT_GET_RELATED_POSTS';
const ACT_GET_POST_DETAIL = 'ACT_GET_POST_DETAIL';
const ACT_SET_LOADING_STATE = 'ACT_SET_LOADING_STATE';

export const actSetLoadingState = (isLoading) => {
	return {
		type : ACT_SET_LOADING_STATE,
		isLoading: isLoading
	}
}

export const actGetLatestPosts = (posts) => {
	return {
		type : ACT_GET_LATEST_POSTS,
		payload: posts
	}
}

export const actGetPopularPosts = (posts) => {
	return {
		type : ACT_GET_POPULAR_POSTS,
		payload: posts
	}
}

export const actGetListPosts = (posts) => {
	return {
		type : ACT_GET_LIST_POSTS,
		payload: posts
	}
}

export const actGetRelatedPosts = (posts) => {
	return {
		type : ACT_GET_RELATED_POSTS,
		payload: posts
	}
}

export const actGetPostDetail = (posts) => {
	return {
		type : ACT_GET_POST_DETAIL,
		payload: posts
	}
}

export const actGetLatestPostsAsync = (pageSize) => {
	return async function(dispatch) {
		try {
				//show loading icon before getting data
				dispatch(actSetLoadingState(false));
				const response = await PostService.getLatestList(pageSize);
				if(response.status === 200) {
					dispatch(actGetLatestPosts(response.data));
					//hide loading icon after getting data
					dispatch(actSetLoadingState(true));
				} else {
					throw new Error('Loi khi lay du lieu ve');
				}
		} catch (e) {

		}
	}
}

export const actGetPopularPostsAsync = (pageSize) => {
	return async function(dispatch) {
		try {
				//show loading icon before getting data
				//dispatch(actSetLoadingState(false));
				const response = await PostService.getPopularList(pageSize);
				if(response.status === 200) {
					dispatch(actGetPopularPosts(response.data));
					//hide loading icon after getting data
					//dispatch(actSetLoadingState(true));
				} else {
					throw new Error('Loi khi lay du lieu ve');
				}
		} catch (e) {

		}
	}
}

export const actGetListPostsAsync = (pageSize, page) => {
	return async function(dispatch) {
		try {
				//show loading icon before getting data
				//dispatch(actSetLoadingState(false));
				const response = await PostService.getList(pageSize, page);
				if(response.status === 200) {
					dispatch(actGetListPosts(response.data));
					//hide loading icon after getting data
					//dispatch(actSetLoadingState(true));
				} else {
					throw new Error('Loi khi lay du lieu ve');
				}
		} catch (e) {

		}
	}
}

export const actGetRelatedPostsAsync = (pageSize, page, authorID) => {
	return async function(dispatch) {
		try {
				//show loading icon before getting data
				//dispatch(actSetLoadingState(false));
				const response = await PostService.getRelatedPosts(pageSize, page, authorID);
				if(response.status === 200) {
					dispatch(actGetRelatedPosts(response.data));
					//hide loading icon after getting data
					//dispatch(actSetLoadingState(true));
				} else {
					throw new Error('Loi khi lay du lieu ve');
				}
		} catch (e) {

		}
	}
}

export const actGetPostDetailAsync = (slug) => {
	return async function(dispatch) {
		try {
				//show loading icon before getting data
				//dispatch(actSetLoadingState(false));
				const response = await PostService.getPostDetail(slug);
				if(response.status === 200) {
					dispatch(actGetPostDetail(response.data));
					//hide loading icon after getting data
					//dispatch(actSetLoadingState(true));
				} else {
					throw new Error('Loi khi lay du lieu ve');
				}
		} catch (e) {

		}
	}
}
