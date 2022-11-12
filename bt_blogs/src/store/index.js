import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './post/reducer';
import commonReducer from './common/reducer';
import categoriesReducer from './categories/reducer';
import commentReducer from './comment/reducer';

const appReducer = combineReducers({
	posts: postReducer,
	common: commonReducer,
	categories: categoriesReducer,
	comments: commentReducer
});

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
