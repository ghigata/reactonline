import React, { useState,useEffect } from 'react';
import Item from './Item';
import { useDispatch,useSelector } from 'react-redux';

function Income() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);

  const incItems = items.map((item,index) => {
    const type = item.type;
    if(type === 'inc') {
      return (
        <Item key={index} id={index} type={type} value={item.value} percent="0">{item.title}</Item>
      );
    }
  });

  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>
      <div className="income__list">{incItems}</div>
    </div>
  );
}

export default Income;
