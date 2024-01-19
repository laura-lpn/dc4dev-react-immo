type PropsAdvertList = {
    advertList: AdvertType[]
}

type AdvertType = {
    id: number
    title: string
    nb_rooms: number
    createdAt: string
}

const AdvertList = ({ advertList }: PropsAdvertList) => {
    return ( 
        <ul>
            {advertList.map((advert: AdvertType) => (
                <li key={advert.id}>{advert.title}</li>
            ))}
        </ul>
     );
}
 
export default AdvertList;