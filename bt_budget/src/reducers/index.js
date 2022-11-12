import { combineReducers } from 'redux';
import items from './items';
import method from './method';

const appReducers = combineReducers({
	items,
	method
});

export default appReducers;
