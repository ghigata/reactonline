import ArticleLatestItem from './ArticleLatestItem.js';

function ArticleLatest() {
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        {/* Main Title */}
        <div className="main-title spacing">
          <h2>Latest Articles</h2>
        </div>
        {/* End Main Title */}
        {/* Latest News List */}
        <div className="latest-news__list spacing">
          {/* Latest news card */}
          <ArticleLatestItem />
          {/* End Latest news card */}
          {/* Latest news card */}
          <ArticleLatestItem />
          {/* End Latest news card */}
          {/* Latest news card */}
          <ArticleLatestItem />
          {/* End Latest news card */}
        </div>
        {/* End Latest News List */}
      </div>
    </div>
  );
}

export default ArticleLatest;
