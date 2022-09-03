import Item from './Item';

function List(props) {
  const {items,setTaskItem,selectedItem,setSelectedItem} = props;

  const elmItem = items.map((item, index)=> {
      return (
          <Item
              onClickDelete={handleDelete}
              onClickEdit={handleEdit}
              key={index}
              item={item}
              index={index}
          />
      );
  });

  function handleDelete(id) {
    const taskItems = [...items];

    let newTaskItems = taskItems.filter(item => item.id != id);

    setTaskItem(newTaskItems);
  }

  function handleEdit(id) {
    const taskItems = [...items];
    let selectedTask = taskItems.filter(item => item.id === id);
    setSelectedItem(selectedTask[0]);
  }

  return (
    <div className="panel panel-success">
      <div className="panel-heading">List Task</div>
      <table className="table table-hover ">
        <thead>
          <tr>
            <th style={{width: '10%'}} className="text-center">#</th>
            <th>Task</th>
            <th style={{width: '20%'}} className="text-center">Level</th>
            <th style={{width: '20%'}}>Action</th>
          </tr>
        </thead>
        <tbody>{elmItem}</tbody>
      </table>
    </div>
  );
}

export default List;
