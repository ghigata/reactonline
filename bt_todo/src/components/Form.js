import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function Form(props) {
  const {items,setNewTaskItem,selectedItem,setSelectedItem} = props;
  const [currentItem, setCurrentItem] = useState({
      task_id: '',
      task_name: '',
      task_level: 0
  });

  useEffect(() => {
      if(selectedItem) {
          setCurrentItem({
            task_id: selectedItem.id,
            task_name: selectedItem.name,
            task_level: selectedItem.level
          });
      }
  }, [selectedItem])

  function handleSubmit(event) {
    event.preventDefault();

    const objIndex = items.findIndex((item => item.id == currentItem.task_id));

    if(objIndex === -1) {
      const newTask = {
                          id      : uuidv4(),
                          name    : event.target.elements.task_name.value,
                          level   : event.target.elements.task_level.value // 0 Small, 1 Medium, 2 High
                      };

      setNewTaskItem([
        ...items,
        newTask
      ]);
    } else {
      let obj = items;
      obj[objIndex].name = currentItem.task_name;
      obj[objIndex].level = currentItem.task_level;

      setNewTaskItem(obj);
      setSelectedItem(obj);
      setCurrentItem({
          task_id: '',
          task_name: '',
          task_level: 0
      });
    }
  }

  function handleChange(event) {
    event.preventDefault();
    let obj = {
                  id      : '',
                  name    : '',
                  level   : 0
              }

    if(selectedItem) {
      obj = {
                    id      : selectedItem.id,
                    name    : selectedItem.name,
                    level   : selectedItem.level
                }
    }

    if(event.target.name === 'task_name') {
      obj.name = event.target.value;
    } else if (event.target.name === 'task_level') {
      obj.level = event.target.value;
    }
    setSelectedItem(obj);
  }

  return (
    <div className="row">
      <div className="col-md-offset-7 col-md-5">
        <form onSubmit={handleSubmit} className="form-inline">
          <div className="form-group">
            <label className="sr-only" htmlFor="task">label</label>
            <input id="task" type="text" name="task_name" className="form-control" placeholder="Task Name" onChange={handleChange} value={currentItem.task_name ?? ''} />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="inputDs">label</label>
            <select name="ds" id="inputDs" name="task_level" className="form-control" required="required" onChange={handleChange} value={currentItem.task_level ?? 0}>
              <option value={0}>Small</option>
              <option value={1}>Medium</option>
              <option value={2}>High</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="button" className="btn btn-default">Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
