import React, { useState, useEffect } from 'react';

function Sort(props) {
  const {items,setTaskItem} = props;

  function handleSort(orderBy, orderDir) {
      let obj = [];
      let sortedArr = [];

      if(orderBy === 'name') {
        sortedArr = items.sort(compareName);
      } else {
        sortedArr = items.sort(compareLevel);
      }

      sortedArr.map((item) => {
        const newTask = {
                            id      : item.id,
                            name    : item.name,
                            level   : item.level
                        }
        obj.push(newTask);
      });

      if(orderDir === 'DESC') obj = obj.reverse();

      setTaskItem(obj);
      document.querySelector("#sort_label").innerHTML = (orderBy + " - " + orderDir).toUpperCase();
  }

  function compareName(a, b) {
      // converting to uppercase to have case-insensitive comparison
      const name1 = a.name.toUpperCase();
      const name2 = b.name.toUpperCase();

      let comparison = 0;

      if (name1 > name2) {
          comparison = 1;
      } else if (name1 < name2) {
          comparison = -1;
      }
      return comparison;
  }

  function compareLevel(a, b) {
      return a.level - b.level;
  }

  return (
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Sort by <span className="caret" />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li><a onClick={() => handleSort('name','ASC')} role="button">Name ASC</a></li>
          <li><a onClick={() => handleSort('name','DESC')} role="button">Name DESC</a></li>
          <li role="separator" className="divider" />
          <li><a onClick={() => handleSort('level','ASC')} role="button">Level ASC</a></li>
          <li><a onClick={() => handleSort('level','DESC')} role="button">Level DESC</a></li>
        </ul>
        <span id="sort_label" className="label label-success label-medium">NAME - DESC</span>
      </div>
    </div>
  );
}

export default Sort;
