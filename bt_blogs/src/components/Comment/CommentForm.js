import avatar from '../../assets/images/avatar1.jpg';

function CommentForm() {
  return (
    <div className="comments__form">
      <div className="comments__form--control">
        <div className="comments__section--avatar">
          <a href="#">
            <img src={avatar} alt="" />
          </a>
        </div>
        <textarea name="comment_text" defaultValue={""} />
      </div>
      <div className="text-right">
        <button className="btn btn-default">Submit</button>
      </div>
    </div>
  );
}

export default CommentForm;
