import { useEffect, useState } from "react"
import AdvertList from "./components/AdvertList"
import AdvertPaginate from "./components/AdvertPaginate"
import FormAdvert from "./components/FormAdvert"

function Advert(){    
    const [totalCount, setTotalCount] = useState(0)
    const [advertList, setAdvertList] = useState([])

    useEffect(() => {
        console.log("component did mount")

        fetchAllAdverts()

        return () => {
            console.log("component will unmount")
        }
    }, [])

    const fetchAllAdverts = () => {
        fetch(`${import.meta.env.VITE_APP_API_URL}/adverts`)
        .then(res => res.json())
        .then(responseData => {
            console.log(responseData)
            setTotalCount(responseData.totalCount)
            setAdvertList(responseData.data)
        })
    }
    
   return (
    <div>
        <FormAdvert fetchAllAdverts={fetchAllAdverts} />
        
        <AdvertList advertList={advertList} />

        <AdvertPaginate totalCount={totalCount} />
    </div>
   )
}

export default Advert