import React, { useState,useEffect } from 'react';
import Item from './Item';
import { useDispatch,useSelector } from 'react-redux';

function Expense() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);

  let totalIncome = 0;
  items.map((item,index) => {
    if(item.type === 'inc') totalIncome += parseInt(item.value);
  });

  const expItems = items.map((item,index) => {
    const type = item.type;
    const value = item.value;
    const percent = (value*100/totalIncome).toFixed(0);

    if(type === 'exp') {
      return (
        <Item key={index} id={index} type={type} value={value} percent={percent}>{item.title}</Item>
      );
    }
  });

  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>
      <div className="expenses__list">{expItems}</div>
    </div>
  );
}

export default Expense;
