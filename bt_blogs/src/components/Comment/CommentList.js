import React, { useEffect, useState } from 'react';
import CommentListItem from './CommentListItem';
import Button from '../Global/Button';
import { useDispatch, useSelector } from 'react-redux';
import { actGetListCommentsAsync } from './../../store/comment/actions';
import * as values from './../../constants/ConstValues';

function CommentList(props) {
  const {postID,comment_count} = props;
  const [newTotalComments, setNewTotalComments] = useState(values.DEFAULT_COMMENTS_ITEMS);
  const [isShowButton, setIsShowButton] = useState(true);
  const dispatch = useDispatch();
  const comments = useSelector(state => state.comments.commentList);

  useEffect(() => {
    //get level 1 comments
    dispatch(actGetListCommentsAsync(values.DEFAULT_COMMENTS_ITEMS,values.DEFAULT_LIST_PAGE,postID,0));
  },[dispatch]);

  useEffect(() => {
    if(comments.length !== newTotalComments) {
      setIsShowButton(false);
    } else {
      setIsShowButton(true);
    }
  },[comments]);

  function handleLoadMore() {
    setNewTotalComments(comments.length + parseInt(values.DEFAULT_COMMENTS_ITEMS));
    dispatch(actGetListCommentsAsync(comments.length + parseInt(values.DEFAULT_COMMENTS_ITEMS), values.DEFAULT_LIST_PAGE,postID,0));
  }

  return (
    <>
      <p>{comment_count} Comments</p>
      {comments.length > 0 &&
        <>
          <ul className="comments">
            {comments.map((item,index) => {
              return (
                <li key={index} className="item">
                  <CommentListItem comment={item}
                                   postID={postID}/>
                </li>
              )
            })}
          </ul>
          {isShowButton &&
            <div className="text-center">
              <Button onClick={handleLoadMore} id='loadMoreBtn' type="primary" submittype="button" size="small" loading="false" title="Load More">Load More</Button>
            </div>
          }
        </>
      }
    </>
  );
}

export default CommentList;
