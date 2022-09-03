function Item(props) {
  const {item, index, onClickDelete, onClickEdit} = props;

  let level = "";
  if(item.level === 0 || item.level === '0') {
    level = "Small";
  } else if (item.level === 1 || item.level === '1') {
    level = "Medium";
  } else {
    level = "High";
  }

  function handleDelete(id) {
    onClickDelete(id);
  }

  function handleEdit(id) {
    onClickEdit(id);
  }

  return (
    <tr>
      <td className="text-center">{index + 1}</td>
      <td>{item.name}</td>
      <td className="text-center"><span className="label label-info">{level}</span></td>
      <td>
        <button onClick={() => handleEdit(item.id)} type="button" className="btn btn-warning">Edit</button>
        <button onClick={() => handleDelete(item.id)} type="button" className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
}

export default Item;
