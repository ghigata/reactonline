import React, { useEffect, useState } from 'react';
import avatar1 from '../../assets/images/avatar1.jpg';
import { getCreatedTime } from '../../services/functions';
import ReactHtmlParser from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import { actGetListChildrenCommentsAsync } from './../../store/comment/actions';
import * as values from './../../constants/ConstValues';

function CommentListItem(props) {
  const {comment, postID} = props;
  const dispatch = useDispatch();
  const childrenComments = useSelector(state => state.comments.childrenCommentsList);
  //const comments = useSelector(state => state.comments.commentList);

  useEffect(() => {
    if(comment.comment_reply_count > 0) {
      dispatch(actGetListChildrenCommentsAsync(values.DEFAULT_COMMENTS_ITEMS,values.DEFAULT_LIST_PAGE,postID,comment.id));
    }
  },[dispatch]);

  useEffect(() => {
    if(comment.comment_reply_count > 0) {
      console.log('Children: ', childrenComments);
      console.log('Length: ', childrenComments.length);
    }
  },[childrenComments]);

  return (
    <>
        <div className="comments__section">
          <div className="comments__section--avatar">
            <a href="#">
              <img src={avatar1} alt="" />
            </a>
          </div>
          <div className="comments__section--content">
            <a href="#" className="comments__section--user">{comment.author_data.nickname}</a>
            <p className="comments__section--time">{getCreatedTime(new Date(comment.date),new Date())}</p>
            <div className="comments__section--text">{ReactHtmlParser(comment.content.rendered)}</div>
            {/* <i class="ion-reply comments__section--reply"></i> */}
          </div>
        </div>
        {comment.comment_reply_count > 0 &&
          <ul className="comments">

          </ul>
        }
    </>
  );
}

export default CommentListItem;
