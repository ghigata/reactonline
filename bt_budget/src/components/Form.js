import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { actChangeMethod,actAddItem } from './../actions/index';

function Form() {
  const dispatch = useDispatch();
  const method = useSelector(state => state.method);

  function handleChange(event) {
    event.preventDefault();
    dispatch(actChangeMethod(event.target.value));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const type = document.getElementsByClassName("add__type")[0].value;
    const desc = document.getElementsByClassName("add__description")[0].value;
    const value = document.getElementsByClassName("add__value")[0].value;

    const obj = {
                  "type": type,
                  "title" : desc,
                  "value": value
                };

    dispatch(actAddItem(obj));
  }

  if(method === 'inc') {
    return (
      <div className="add">
        <div className="add__container">
          <select className="add__type" onChange={handleChange}>
            <option value="inc">+</option>
            <option value="exp">-</option>
          </select>
          <input type="text" className="add__description" placeholder="Add description" />
          <input type="number" className="add__value" placeholder="Value" min="0" />
          <button className="add__btn" type="button" onClick={handleSubmit}><i className="ion-ios-checkmark-outline" /></button>
        </div>
      </div>
    );
  }

  return (
    <div className="add">
      <div className="add__container">
        <select className="add__type red-focus" onChange={handleChange}>
          <option value="inc">+</option>
          <option value="exp">-</option>
        </select>
        <input type="text" className="add__description red-focus" placeholder="Add description" />
        <input type="number" className="add__value red-focus" placeholder="Value" min="0" />
        <button className="add__btn red" type="button" onClick={handleSubmit}><i className="ion-ios-checkmark-outline" /></button>
      </div>
    </div>
  );
}

export default Form;
