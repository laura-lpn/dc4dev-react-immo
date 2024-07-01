import { useEffect, useState } from "react";
import AdvertList from "./components/AdvertList";
import AdvertPaginate from "./components/AdvertPaginate";
import AdvertService from "./services/advert.service";
import CategoryList from "./components/CategoryList";
import CategoryService from "./services/category.service";
import { Link } from "react-router-dom";

function Advert() {
  const [totalCount, setTotalCount] = useState(0);
  const [advertList, setAdvertList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetchAllAdverts();
    fetchAllCategories();

    return () => {
      console.log("component will unmount");
    };
  }, []);

  const fetchAllAdverts = async () => {
    try {
      const { data, totalCount } = await AdvertService.findAll();
      setAdvertList(data);
      setTotalCount(totalCount);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllCategories = async () => {
    try {
      const data = await CategoryService.findAll();
      setCategoryList(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Advert List</h1>

      <Link to="/adverts/create">Ajouter un advert</Link>
      <br />
      <Link to="/categories/create">Ajouter une categorie</Link>
      <br />
      <Link to="/auth/signup">Signup</Link>
      <br />
      <Link to="/auth/signin">Signin</Link>
      <br />

      <h2>Liste des categories</h2>
      <CategoryList
        categoryList={categoryList}
        fetchAllCategories={fetchAllCategories}
      />
      <h2>Liste des adverts</h2>
      <AdvertList advertList={advertList} fetchAllAdverts={fetchAllAdverts} />

      <AdvertPaginate totalCount={totalCount} />
    </div>
  );
}

export default Advert;
