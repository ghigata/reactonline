import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SearchPage from './pages/SearchPage';
import ArticleDetailPage from './pages/ArticleDetailPage';

import * as values from './constants/ConstValues';
import { useDispatch } from 'react-redux';
import { actGetLatestPostsAsync, actGetPopularPostsAsync, actGetListPostsAsync } from './store/post/actions';
import { actGetListCategoriesAsync } from './store/categories/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetLatestPostsAsync(values.LATEST_ITEMS));
    dispatch(actGetPopularPostsAsync(values.POPULAR_ITEMS));
    dispatch(actGetListPostsAsync(values.DEFAULT_LIST_ITEMS, values.DEFAULT_LIST_PAGE));
    dispatch(actGetListCategoriesAsync());
  },[dispatch]);

  return (
    <BrowserRouter>
      <div className="wrapper-content">
        <Header />
        <Routes>
          <Route path="/blog/:slug" element={<ArticleDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <div className="spacing" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
