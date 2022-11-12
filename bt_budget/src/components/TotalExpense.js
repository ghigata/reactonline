import React, { useState,useEffect } from 'react';

function TotalExpense(props) {
  return (
    <div className="budget__expenses clearfix">
      <div className="budget__expenses--text">Expenses</div>
      <div className="right clearfix">
        <div className="budget__expenses--value">- {props.children}</div>
        <div className="budget__expenses--percentage">{props.percent}%</div>
      </div>
    </div>
  );
}

export default TotalExpense;
