import ArticleSearchItem from './ArticleSearchItem';
import Button from '../Global/Button';
import MainTitle from '../Global/MainTitle';

function ArticleSearch() {
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <div className="main-title main-title__search spacing">
          <h2>4 Results found for "search query"</h2>
        </div>
        {/* End Main Title */}
        {/* End Row News List */}
        <ArticleSearchItem />
        <ArticleSearchItem />
        <ArticleSearchItem />
        <ArticleSearchItem />
        <ArticleSearchItem />
        {/* End Row News List */}
        {/* Btn Loadmore */}
        <div className="text-center">
          <Button type="primary" submittype="button" size="large" loading="true" title="Load More">Load More</Button>
        </div>
      </div>
    </div>
  );
}

export default ArticleSearch;
