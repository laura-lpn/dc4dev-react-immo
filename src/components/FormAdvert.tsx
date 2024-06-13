import { useEffect, useState } from "react";
import AdvertService from "../services/advert.service";
import { AdvertType } from "../types/advert";
import { useNavigate, useParams } from "react-router-dom";

const FormAdvert = () => {
  const [credentials, setCredentials] = useState<AdvertType>({
    title: "",
    description: "",
    nb_rooms: 0,
    price: 0,
    surface: 0,
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    console.log("FormAdvert component did mount : ", id);
    handleFetchOneAdvert();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleFetchOneAdvert = async () => {
    if(!id) return

    try {
      const data = await AdvertService.findOne(id);
      console.log("handleFetchOneAdvert data : ", data);
      setCredentials({...data});
    } catch (error) {
      console.log("handleFetchOneAdvert error : ", error); 
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let redirectPath = ""

    try {
      if(!id){
        const data = await AdvertService.create(credentials);
        redirectPath = `/adverts/${data.id}`
      } else {
        await AdvertService.update(credentials, id);
        redirectPath = `/adverts/${id}`
      }
        
      navigate(redirectPath);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Form Advert</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={handleChange}
            type="text"
            placeholder="title"
            name="title"
            value={credentials.title}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Description"
            name="description"
            value={credentials.description}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="number"
            placeholder="Number of rooms"
            name="nb_rooms"
            value={credentials.nb_rooms}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="number"
            placeholder="Price"
            name="price"
            value={credentials.price}
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="number"
            placeholder="Surface"
            name="surface"
            value={credentials.surface}
          />
        </div>
        <input type="submit" value={id? "Update" : "Create"} />
      </form>
    </div>
  );
};

export default FormAdvert;
