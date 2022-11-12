import React, { useEffect } from 'react';
import ArticleSidebarItem from './ArticleSidebarItem';
import ArticleAuthor from './ArticleAuthor';
import { useDispatch, useSelector } from 'react-redux';
import { actGetRelatedPostsAsync } from './../../store/post/actions';
import * as values from '../../constants/ConstValues';

function ArticleDetailSidebar(props) {
  const {post} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetRelatedPostsAsync(values.RELATED_ITEMS,values.DEFAULT_LIST_PAGE,post.author));
  },[dispatch]);

  const relatedPosts = useSelector(state => state.posts.articleRelated);

  return (
    <div className="post-detail__side">
      <ArticleAuthor name={post.author_data.nickname} />
      <div className="spacing" />
      {relatedPosts.length > 0 &&
        <div className="related-post">
          <h2 className="related-post__head">Related Posts</h2>
          {relatedPosts.map((item, index) => {
              return (
                <ArticleSidebarItem key={index}
                                    title={item.title.rendered}
                                    author={item.author_data.nickname}
                                    time={item.date}
                                    slug={item.slug}/>
          )})}
        </div>
      }
    </div>
  );
}

export default ArticleDetailSidebar;
