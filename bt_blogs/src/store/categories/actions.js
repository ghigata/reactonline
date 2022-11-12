import { CategoriesService } from './../../services/categories';
const ACT_GET_LIST_CATEGORIES = 'ACT_GET_LIST_CATEGORIES';

export const actGetListCategories = (cates) => {
	return {
		type : ACT_GET_LIST_CATEGORIES,
		payload: cates
	}
}

export const actGetListCategoriesAsync = () => {
	return async function(dispatch) {
		try {
				//show loading icon before getting data
				//dispatch(actSetLoadingState(false));
				const response = await CategoriesService.getList();
				if(response.status === 200) {
					dispatch(actGetListCategories(response.data));
					//hide loading icon after getting data
					//dispatch(actSetLoadingState(true));
				} else {
					throw new Error('Loi khi lay du lieu ve');
				}
		} catch (e) {

		}
	}
}
