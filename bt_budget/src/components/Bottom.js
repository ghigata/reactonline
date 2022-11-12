import React, { useState,useEffect } from 'react';
import Form from './Form';
import List from './List';

function Bottom() {
  return (
    <div className="bottom">
      <Form></Form>
      <List></List>
    </div>
  );
}

export default Bottom;
