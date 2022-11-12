import React, { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingLastestNews = (props) => {
  var loadings = [];
  for (var i = 0; i < props.num; i++) {
    loadings.push(<div className="latest-news__card" key={i}>
                    <article className="article-item">
                      <div className="article-item__thumbnail" style={{maxHeight: 445}}>
                        <a href="#"><Skeleton width="100%" height="100%" /></a>
                      </div>
                      <div className="article-item__content">
                        <h2 className="article-item__title">
                          <a href="#"><Skeleton width="100%" count={3} /></a>
                        </h2>
                        <div className="article-item__info">
                          <div className="article-item__author-image">
                            <a aria-label="John Doe" href="#">
                              <Skeleton circle
                                        height="100%"
                                        containerClassName="avatar-skeleton" />
                            </a>
                          </div>
                          <div className="article-item__info-right">
                            <div className="article-item__author-name">
                              <a href="#"><Skeleton width={57} /></a>
                            </div>
                            <div className="article-item__datetime">
                              <Skeleton width={141} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>);
  }

  return loadings;
}

export default LoadingLastestNews;
