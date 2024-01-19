import { useEffect, useState } from "react";

type CreateAdvertDto = {
  title: string;
  description: string;
  nb_rooms: number;
  price: number;
  surface: number;
};

const FormAdvert = ({fetchAllAdverts}) => {
    
    const [credentials, setCredentials] = useState<CreateAdvertDto>({
        title: "",
        description: "",
        nb_rooms: 0,
        price: 0,
        surface: 0,
    });
    
    useEffect(() => {
        checkCredentials();
    }, [credentials])

    const checkCredentials = () => {}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(credentials);

    const request = await fetch(`${import.meta.env.VITE_APP_API_URL}/adverts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      })

     const response = await request.json()
     const { data } = response;
     console.log(data)

     fetchAllAdverts()
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
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Description"
            name="description"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="number"
            placeholder="Number of rooms"
            name="nb_rooms"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="number"
            placeholder="Price"
            name="price"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="number"
            placeholder="Surface"
            name="surface"
          />
        </div>
        <input type="submit" value="Ajouter" />
      </form>
    </div>
  );
};

export default FormAdvert;
