import api from './api';

export const CommentService = {
  getList(pageSize, page, postID, parentID) {
    return api.get('/wp/v2/comments', {
      params: {
        per_page: pageSize,
        page: page,
        post: postID,
        parent: parentID
	    }
    })
  }
}
