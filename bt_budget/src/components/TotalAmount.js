import React, { useState,useEffect } from 'react';

function TotalAmount(props) {
  return (
    <div className="budget__value">{props.children}</div>
  );
}

export default TotalAmount;
