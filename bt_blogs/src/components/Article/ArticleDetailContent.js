import '../../assets/css/comments.css';
import CommentForm from './../Comment/CommentForm';
import CommentList from './../Comment/CommentList';
import ArticleTags from './ArticleTags';
import ReactHtmlParser from 'html-react-parser';

function ArticleDetailContent(props) {
  const {post} = props;

  return (
    <div className="post-detail__content">
      <div className="thumbnail">
        <img src={post.featured_media_url} alt="blog-title" />
      </div>
      <div className="content-padding">
        {/* Post Detail rich text editor */}
        <div className="rte">
          {ReactHtmlParser(post.content.rendered)}
        </div>
        {/* End Post Detail rich text editor */}
        {/* Post Detail Tags */}
        <div className="post-detail__tags">
          <h2>Tags</h2>
          <ArticleTags categories={post.categories} />
        </div>
        {/* End Post Detail Tags */}
        {/* Post Detail Comments */}
        <div className="post-detail__comments">
          <CommentForm />
          <CommentList postID={post.id}
                       comment_count={post.comment_count}/>
        </div>
        {/* End Post Detail Comments */}
      </div>
    </div>
  );
}

export default ArticleDetailContent;
