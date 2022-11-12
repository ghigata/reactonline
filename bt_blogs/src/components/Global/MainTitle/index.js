import Button from '../Button';

const MainTitle = (props) => {
  const {children,btnLabel,btnProps} = props;

  let cls = "";
  if(typeof btnLabel !== undefined && btnLabel != "") {
    cls = "main-title spacing d-flex tcl-jc-between tcl-ais-center";
  } else {
    cls = "main-title spacing";
  }

  return (
    <div className={cls}>
      <h2>{children}</h2>
      {btnLabel && <Button {...btnProps}>{btnLabel}</Button>}
    </div>
  );
}

export default MainTitle;
