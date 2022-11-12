import Button from '../Global/Button';
import { useSelector } from 'react-redux';

function ArticleCategories(props) {
  const {categories} = props;
  const cateList = useSelector(state => state.categories.categoriesList);
  const filteredCateList = cateList.filter(item => categories.includes(item.id));

  return (
    <ul className="article-item__categories">
      { filteredCateList.length && filteredCateList.map((item, index) => {
          return (
            <li key={index}><Button href={`/category/${item.slug}`} type="category" submittype="link">{item.name}</Button></li>
          )
        })
      }
    </ul>
  );
}

export default ArticleCategories;
