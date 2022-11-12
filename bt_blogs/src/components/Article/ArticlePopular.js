import '../../assets/css/popular-news-list.css';
import ArticlePopularItem from './ArticlePopularItem';
import ArticlePopularFeaturedItem from './ArticlePopularFeaturedItem';
import MainTitle from '../Global/MainTitle';
import { useSelector } from 'react-redux';

function ArticlePopular() {
  const posts = useSelector(state => state.posts.articlePopular);
  //const latest_posts = useSelector(state => state.posts.articleLatest);

  //console.log('Popular Articles: ', posts);
  //console.log('Latest Articles: ', latest_posts);

  return (
    <div className="popular-news section bg-white-blue">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="View More" btnProps={{type:"primary",submittype:"link",href:"#"}}>Popular Articles</MainTitle>
        {/* End Main Title */}
        <div className="popular-news__list spacing">
          <div className="popular-news__list--left">
            <div className="popular-news__list--row">
              { posts.length && posts.map((item, index) => {
                  if(index < 2) {
                    return(
                      <ArticlePopularItem key={index}
                                         thumbnail={item.featured_media_url}
                                         title={item.title.rendered}
                                         time={item.date}
                                         author={item.author_data.nickname}
                                         slug={item.slug}
                                         excerpt={item.excerpt.rendered}
                                         categories={item.categories}/>
                    )
                  }
                })
              }
            </div>
          </div>
          <div className="popular-news__list--right">
            <div className="popular-news__list--row">
              { posts.length &&
                <ArticlePopularFeaturedItem key={2}
                                            thumbnail={posts[2].featured_media_url}
                                            title={posts[2].title.rendered}
                                            time={posts[2].date}
                                            author={posts[2].author_data.nickname}
                                            slug={posts[2].slug}
                                            excerpt={posts[2].excerpt.rendered}
                                            categories={posts[2].categories} />
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePopular;
