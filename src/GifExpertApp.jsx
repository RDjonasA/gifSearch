import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"


export const GifExpertApp = () => {
    const [categories, setcategories] = useState(['tea'])

  return (
<>
    <div>GifExpertApp</div>
    <AddCategory setCategories={setcategories}/> 
    <hr/>
    <al>
        {categories.map((cat,i)=>{
            return <GifGrid categories={cat} key={`${cat}${i}`}/>
        })}
    </al>
</>
  )
}

export default GifExpertApp