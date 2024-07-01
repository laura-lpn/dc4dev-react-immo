import { Link } from "react-router-dom";
import CategoryService from "../services/category.service";
import { CategoryType } from "../types/category";

type PropsCategoryList = {
  categoryList: CategoryType[];
  fetchAllCategories: () => void;
};

const CategoryList = ({
  categoryList,
  fetchAllCategories,
}: PropsCategoryList) => {
  const handleDelete = async (id: number) => {
    try {
      await CategoryService.remove(id);
      fetchAllCategories();
    } catch (error) {
      console.log("handleDelete error : ", error);
    }
  };

  return (
    <ul style={{ textAlign: "left" }}>
      {categoryList.map((category: CategoryType) => (
        <li key={category.id}>
          {category.name} - {category.posts?.length} adverts
          <Link to={`/categories/${category.id}/edit`}>edit</Link>
          <button onClick={() => handleDelete(category.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
