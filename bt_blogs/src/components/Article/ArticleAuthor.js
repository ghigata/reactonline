import avatar from '../../assets/images/blog-detail.jpg';

function ArticleAuthor(props) {
  const {name} = props;
  return (
    <div className="post-author">
      <div className="post-author__bg-avatar">
        <a href="#" className="post-author__avatar">
          <img src={avatar} alt="" />
        </a>
      </div>
      <div className="post-author__nickname">
        <a href="#">{name}</a>
      </div>
      <p className="post-author__desc">Lorem ipsum, dolor sit amet conse ctetur adipi sicing elit. Necessitatibus, vel vero vel vero vel vero vel vero!</p>
    </div>
  );
}

export default ArticleAuthor;
