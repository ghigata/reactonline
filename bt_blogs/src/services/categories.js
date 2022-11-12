import api from './api';

export const CategoriesService = {
  getList() {
    return api.get('/wp/v2/categories', {
      params: {
	      lang: 'vi'
	    }
    })
  }
}
