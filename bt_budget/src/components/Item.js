import React, { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actDeleteItem } from './../actions/index';

function Item(props) {
  const {children,id,type,value,percent} = props;
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(actDeleteItem(id));
  }

  if(type === 'inc') {
    return (
      <div className="item clearfix">
        <div className="item__description">{children}</div>
        <div className="right clearfix">
          <div className="item__value">+ {parseInt(value).toLocaleString("vi-VN")}</div>
          <div className="item__delete">
            <button className="item__delete--btn" onClick={() => handleDelete(id)}><i className="ion-ios-close-outline" /></button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="item clearfix">
      <div className="item__description">{children}</div>
      <div className="right clearfix">
        <div className="item__value">- {parseInt(value).toLocaleString("vi-VN")}</div>
        <div className="item__percentage">{percent}%</div>
        <div className="item__delete">
          <button className="item__delete--btn" onClick={() => handleDelete(id)}><i className="ion-ios-close-outline" /></button>
        </div>
      </div>
    </div>
  );
}

export default Item;
