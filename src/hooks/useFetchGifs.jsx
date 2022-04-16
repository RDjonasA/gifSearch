import { useEffect, useState } from "react"
import getGifs from "../helpers/getGifs"

export const useFetchGifs = (categories) =>{
    const [state, setstate] = useState({
        data:[],
        loading: true
    })
   
    useEffect(() => {
        getGifs(categories)
        .then( imgs =>{
            setstate({
                data:imgs,
                loading:false
            })
        })
    }, [categories])

    return state
}