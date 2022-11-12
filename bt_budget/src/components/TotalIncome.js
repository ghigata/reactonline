import React, { useState,useEffect } from 'react';

function TotalIncome(props) {
  return (
    <div className="budget__income clearfix">
      <div className="budget__income--text">Income</div>
      <div className="right">
        <div className="budget__income--value">+ {props.children}</div>
        <div className="budget__income--percentage">&nbsp;</div>
      </div>
    </div>
  );
}

export default TotalIncome;
