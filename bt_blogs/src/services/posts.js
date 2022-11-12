import api from './api';

export const PostService = {
  getLatestList(pageSize) {
    return api.get('/wp/v2/posts', {
      params: {
	      per_page: pageSize,
        lang: 'vi'
	    }
    })
  },
  getPopularList(pageSize) {
    return api.get('/wp/v2/posts', {
      params: {
	      per_page: pageSize,
        lang: 'vi',
        orderby: 'post_views'
	    }
    })
  },
  getList(pageSize, page) {
    return api.get('/wp/v2/posts', {
      params: {
	      per_page: pageSize,
        page: page,
        lang: 'vi'
	    }
    })
  },
  getRelatedPosts(pageSize, page, authorID) {
    return api.get('/wp/v2/posts', {
      params: {
	      per_page: pageSize,
        page: page,
        author: authorID,
        lang: 'vi'
	    }
    })
  },
  getPostDetail(slug) {
    return api.get('/wp/v2/posts', {
      params: {
	      slug: slug
	    }
    })
  }
}
