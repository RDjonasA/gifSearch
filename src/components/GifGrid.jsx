import { useFetchGifs } from "../hooks/useFetchGifs"
import GifGridItem from "./GifGridItem"

const GifGrid = ({categories}) => {

    const {data:images,loading} = useFetchGifs(categories)
    
    return (
        <>
            <h3>{categories}</h3>
            {loading && <p>Loading</p>}
            <div className="card-grid">
                {images.map(ig =>{
                    return (
                        <GifGridItem key={ig.id} {...ig}/>
                    )
                })}
            </div>
        </>
  )
}

export default GifGrid