import '../assets/css/main-title.css';
import '../assets/css/article-item.css';
import '../assets/css/post-author.css';
import '../assets/css/related-posts.css';
import ArticleLatest from '../components/Article/ArticleLatest';
import ArticlePopular from '../components/Article/ArticlePopular';
import ArticleList from '../components/Article/ArticleList';

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
