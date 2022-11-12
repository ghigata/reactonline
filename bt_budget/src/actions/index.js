import * as types from '../constants/ActionTypes';

export const actChangeMethod = (value) => {
	return {
		type : types.CHANGE_METHOD,
		value
	}
}

export const actAddItem = (item) => {
	return {
		type : types.ADD_ITEM,
		item
	}
}

export const actDeleteItem = (index) => {
	return {
		type : types.DELETE_ITEM,
		index
	}
}


// export const actOpenForm = () => {
// 	return {
// 		type : types.OPEN_FORM
// 	}
// }
//
// export const actToggleForm = () => {
// 	return {
// 		type : types.TOGGLE_FORM
// 	}
// }
//
// export const actSort = (sort) => {
// 	return {
// 		type : types.SORT_ITEM,
// 		sort
// 	}
// }
//
// export const actSearch = (search) => {
// 	return {
// 		type : types.CHANGE_SEARCH,
// 		search
// 	}
// }
//
// export const actDeteleItem = (id) => {
// 	return {
// 		type : types.DELETE_ITEM,
// 		id
// 	}
// }
//
// export const actSelectedItem = (item) => {
// 	return {
// 		type : types.SELECTED_ITEM,
// 		item
// 	}
// }
//
// export const actUnSelectItem = () => {
// 	return {
// 		type : types.UNSELECT_ITEM
// 	}
// }
