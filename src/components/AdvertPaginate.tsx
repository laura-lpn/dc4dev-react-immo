type PropsAdvertPaginate = {
    totalCount: number
}

const AdvertPaginate = ({ totalCount }: PropsAdvertPaginate) => {
    return ( 
        <div className="paginate">
            <p>
                number of advert: { totalCount }
            </p>
        </div>
     );
}
 
export default AdvertPaginate;