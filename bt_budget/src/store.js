import { createStore } from 'redux';
import appReducers from './reducers/index';

const store = createStore(
	appReducers, /* preloadedState, */
);

store.subscribe(() => {
  // console.log(store.getState())
});

export default store;
