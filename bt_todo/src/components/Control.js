import Search from './Search';
import Sort from './Sort';

function Control(props) {
  const {items,setTaskItem} = props;

  return (
    <div className="row">
      {/* SEARCH : START */}
      <Search items={items} setTaskItem={setTaskItem} />
      {/* SEARCH : END */}

      {/* SORT : START */}
      <Sort items={items} setTaskItem={setTaskItem} />
      {/* SORT : END */}

      {/* ADD : START */}
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button type="button" className="btn btn-info btn-block">Add Task</button>
      </div>
      {/* ADD : END */}
    </div>
  );
}

export default Control;
