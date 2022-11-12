import React, { useEffect, useState } from 'react';
import ArticleListItem from './ArticleListItem';
import Button from '../Global/Button';
import MainTitle from '../Global/MainTitle';
import * as values from './../../constants/ConstValues';
import { useSelector, useDispatch } from 'react-redux';
import { actGetListPostsAsync } from './../../store/post/actions';

function ArticleList() {
  const [newTotalPosts, setNewTotalPosts] = useState(values.DEFAULT_LIST_ITEMS);
  const [isShowButton, setIsShowButton] = useState(true);
  const posts = useSelector(state => state.posts.articleList);
  const dispatch = useDispatch();

  useEffect(() => {
    if(posts.length !== newTotalPosts) {
      setIsShowButton(false);
    } else {
      setIsShowButton(true);
    }
  },[posts]);

  function handleLoadMore() {
    setNewTotalPosts(posts.length + parseInt(values.DEFAULT_LIST_ITEMS));
    dispatch(actGetListPostsAsync(posts.length + parseInt(values.DEFAULT_LIST_ITEMS), values.DEFAULT_LIST_PAGE));
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="View More" btnProps={{type:"category",submittype:"link",href:"#"}}>News List</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          { posts.length && posts.map((item, index) => {
            return (
              <ArticleListItem key={index}
                               thumbnail={item.featured_media_url}
                               title={item.title.rendered}
                               time={item.date}
                               author={item.author_data.nickname}
                               slug={item.slug} />
            )})
          }
        </div>
        {/* End Row News List */}
        {/* Btn Loadmore */}
        {isShowButton &&
          <div className="text-center">
            <Button onClick={handleLoadMore} id='loadMoreBtn' type="primary" submittype="button" size="large" loading="true" title="Load More">Load More</Button>
          </div>
        }
      </div>
    </div>
  );
}

export default ArticleList;
