import '../../assets/css/latest-news-list.css';
import ArticleLatestItem from './ArticleLatestItem';
import MainTitle from '../Global/MainTitle';
import Loading from '../Global/Loading/LoadingLastestNews';
import * as values from '../../constants/ConstValues';
import { useSelector } from 'react-redux';

function ArticleLatest() {
  const posts = useSelector(state => state.posts.articleLatest);
  const loading = useSelector(state => state.common);

  return (
    <div className="latest-news section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle>Latest Articles</MainTitle>
        {/* End Main Title */}
        {/* Latest News List */}
        <div className="latest-news__list spacing">
          { loading === false
            ? <Loading num={values.LATEST_ITEMS} />
            : posts.length && posts.map((item, index) => {
              return(
                <ArticleLatestItem key={index}
                                   thumbnail={item.featured_media_url}
                                   title={item.title.rendered}
                                   time={item.date}
                                   author={item.author_data.nickname}
                                   slug={item.slug}/>
            )})
          }
        </div>
        {/* End Latest News List */}
      </div>
    </div>
  );
}

export default ArticleLatest;
