import React, { useEffect } from 'react';
import '../assets/css/post-detail.css';
import ArticleDetailContent from '../components/Article/ArticleDetailContent';
import ArticleDetailHeader from '../components/Article/ArticleDetailHeader';
import ArticleDetailSidebar from '../components/Article/ArticleDetailSidebar';
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { actGetPostDetailAsync } from './../store/post/actions';

const ArticleDetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetPostDetailAsync(params.slug));
  },[dispatch]);

  const post = useSelector(state => state.posts.articleDetail);

  if(post.length) {
    return (
      <div>
        <main className="post-detail">
          <div className="spacing" />
          {/* Post Detail Head */}
          <ArticleDetailHeader post={post[0]} />
          {/* End Post Detail Head */}
          <div className="spacing" />
          {/* Post Detail Wrapper Content */}
          <div className="post-detail__fluid">
            <div className="tcl-container">
              <div className="post-detail__wrapper">
                {/* Post Detail Content */}
                <ArticleDetailContent post={post[0]} />
                {/* End Post Detail Content */}
                {/* Post Detail Sidebar */}
                <ArticleDetailSidebar post={post[0]} />
                {/* End Post Detail Sidebar */}
              </div>
            </div>
          </div>
          {/* End Post Detail Wrapper Content */}
        </main>

        <div className="spacing" />
      </div>
    );
  }
}

export default ArticleDetailPage;
