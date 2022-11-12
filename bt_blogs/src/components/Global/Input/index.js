import './input.css';
import {useState} from 'react';

const Input = (props) => {
  const {children,type='text',label,placeholder,className,name} = props;
  const [inputType,setInputType] = useState(type);
  const classNames = require('classnames');

  function handleToggleShowPwd() {
    if(inputType === 'text') {
      setInputType('password');
    } else if(inputType === 'password') {
      setInputType('text');
    }
  }

  const cls = classNames('toggle-password', {
    'ion-eye': inputType === 'password',
    'ion-eye-disabled': inputType === 'text'
  });

  const clsSearch = classNames('header-search__input', className);

  if(type === 'search') {
    return (
      <div className="header-search">
        <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{flexShrink: 0}}>
          <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
          </path>
        </svg>
        <input className={clsSearch} type="text" name={name} placeholder={placeholder} />
      </div>
    );
  }

  return (
    <div className="form-control">
      {label && <label>{label}</label>}
      {type === 'password' && (
        <i className={cls} onClick={handleToggleShowPwd}></i>
      )}
      <input type={inputType} className={className} {...props} />
    </div>
  );
}

export default Input;
