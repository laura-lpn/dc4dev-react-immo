import { useEffect, useState } from "react"
import AdvertList from "./components/AdvertList"
import AdvertPaginate from "./components/AdvertPaginate"
import AdvertService  from "./services/advert.service"
import { Link } from "react-router-dom"

function Advert(){    
    const [totalCount, setTotalCount] = useState(0)
    const [advertList, setAdvertList] = useState([])

    useEffect(() => {
        fetchAllAdverts()

        return () => {
            console.log("component will unmount")
        }
    }, [])

    const fetchAllAdverts = async() => {
       try {
            const { data, totalCount } = await AdvertService.findAll()
            setAdvertList(data)
            setTotalCount(totalCount)
       } catch (error) {
            console.log(error)
       }
    }
    
   return (
    <div>
        <h1>Advert List</h1>

        <Link to="/adverts/create">Ajouter</Link>
        
        <AdvertList advertList={advertList}  fetchAllAdverts={fetchAllAdverts} />

        <AdvertPaginate totalCount={totalCount} />
    </div>
   )
}

export default Advert