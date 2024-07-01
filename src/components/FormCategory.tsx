import { useEffect, useState } from "react";
import { CategoryType } from "../types/category";
import { useNavigate, useParams } from "react-router-dom";
import CategoryService from "../services/category.service";

const FormCategory = () => {
  const [credentials, setCredentials] = useState<CategoryType>({
    name: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    console.log("FormCategory component did mount : ", id);
    handleFetchOneCategory();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleFetchOneCategory = async () => {
    if (!id) return;

    try {
      const data = await CategoryService.findOne(id);
      console.log("handleFetchOneCategory data : ", data);
      setCredentials({ name: data.name });
    } catch (error) {
      console.log("handleFetchOneCategory error : ", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!id) {
        await CategoryService.create(credentials);
      } else {
        await CategoryService.update(credentials, id);
      }

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Form Category</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={credentials.name}
          onChange={handleChange}
          placeholder="name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormCategory;
