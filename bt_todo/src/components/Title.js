function Title(props) {
  const {title,subtitle} = props;
  return (
    <div className="page-header">
      <h1>{title} <small>{subtitle}</small></h1>
    </div>
  );
}

export default Title;
