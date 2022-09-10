import React, { useState } from 'react';

function Search(props) {
  const {items,setTaskItem} = props;
  const [originItems, setOriginItems] = useState(null);

  function handleFilter(event) {
    event.preventDefault();
    const searchString = document.querySelector('#task_search').value;

    const filterItems = items.filter(function(item) {
      return item.name.includes(searchString);
    });

    setOriginItems(items);
    setTaskItem(filterItems);
  }

  function handleClear(event) {
    setTaskItem(originItems);
  }

  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className="input-group">
        <input type="text" id="task_search" name="task_search" className="form-control" placeholder="Search for..." />
        <span className="input-group-btn">
          <button className="btn btn-info" type="button" onClick={handleFilter}>Go!</button>
          {originItems !== null && <button className="btn btn-warning" type="button" onClick={handleClear}>Clear</button>}
        </span>
      </div>
    </div>
  );
}

export default Search;
