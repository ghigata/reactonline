import React, { useState,useEffect } from 'react';
import Income from './Income';
import Expense from './Expense';

function List() {
  return (
    <div className="container clearfix">
      <Income></Income>
      <Expense></Expense>
    </div>
  );
}

export default List;
