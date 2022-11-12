import { useSelector } from 'react-redux';

function ArticleTags(props) {
  const {categories} = props;
  const cateList = useSelector(state => state.categories.categoriesList);
  const filteredCateList = cateList.filter(item => categories.includes(item.id));

  return (
    <ul>
      { filteredCateList.length && filteredCateList.map((item, index) => {
          return (
            <li key={index} className="item"><a href={`/category/${item.slug}`} className="btn btn-default">{item.name}</a></li>
          )
        })
      }
    </ul>
  );
}

export default ArticleTags;
