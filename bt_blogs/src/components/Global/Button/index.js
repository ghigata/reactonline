import './button.css';
import LoadingIcon from './LoadingIcon.js';

const Button = (props) => {
  const {children, loading, submittype, type, size} = props;
  const classNames = require('classnames');

  if(typeof type === 'undefined') {
    var buttonType = 'default';
  } else {
    var buttonType = type;
  }

  if(typeof size === 'undefined') {
    var buttonSize = 'default';
  } else {
    var buttonSize = size;
  }

  let cls = classNames('btn', {[`btn-${buttonType}`]:true}, {[`btn-size-${buttonSize}`]:true});

  if(submittype === "link") {
    return (
        <a className={cls} {...props}>
          {loading === "true" && <LoadingIcon />}
          &nbsp;
          {children}
        </a>
    );
  }

  return (
      <button className={cls} {...props}>
        {loading === "true" && <LoadingIcon />}
        &nbsp;
        {children}
      </button>
  );
}

export default Button;
