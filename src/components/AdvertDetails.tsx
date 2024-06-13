import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdvertService from "../services/advert.service";
import { AdvertType } from "../types/advert";
import { Link } from "react-router-dom"

const AdvertDetails = () => {
    const { id } = useParams();
    const [advert, setAdvert] = useState<AdvertType | null>(null);

    useEffect(() => {
        fetchOneAdvert();
    }, [id])

    const fetchOneAdvert = async () => {
        if(!id) return

        try {
            const data = await AdvertService.findOne(id);
            setAdvert(data);
        } catch (error) {
            console.log("fetchOneAdvert error : ", error);   
        }
    }

    return ( 
        <div>
            <Link to={`/adverts/${advert?.id}/edit`}>Update</Link>
            
            <h1>{advert?.title}</h1>
            <p>
                {advert?.description}
            </p>
        </div>
     );
}
 
export default AdvertDetails;