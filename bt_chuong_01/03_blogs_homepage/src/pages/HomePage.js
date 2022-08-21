import '../assets/libs/bootstrap4/bootstrap-tcl.css';
import '../assets/css/main.css';
import '../assets/css/main-title.css';
import '../assets/css/latest-news-list.css';
import '../assets/css/article-item.css';
import '../assets/css/popular-news-list.css';
import '../assets/css/button.css';
import '../assets/css/post-author.css';
import '../assets/css/related-posts.css';
import ArticleLatest from '../components/Article/ArticleLatest.js';
import ArticlePopular from '../components/Article/ArticlePopular.js';
import ArticleList from '../components/Article/ArticleList.js';

const HomePage = () => {
  return (
      <div>
        {/* Latest News */}
        <ArticleLatest />
        {/* End Latest News */}

        {/* Popular News Section */}
        <ArticlePopular />
        {/* End Popular News Section */}

        {/* List News Section */}
        <ArticleList />
        {/* End List News Section */}
      </div>
  );
}

export default HomePage;
