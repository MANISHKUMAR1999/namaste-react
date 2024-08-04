
import React, { useState } from "react"
import ItemList from "./ItemList"
const ResCategory =({data,showItems,setShowIndex})=>{
//     console.log(data,"category data")
//     const [showItems,setShowItems] = useState(false);
    const handleClik = ()=>{
//
setShowIndex()
    }
    return (
        <>
       

    <div className="w-6/12 mx-auto my-4 bg-white shadow-lg p-4 ">

    <div className="flex justify-between" onClick={handleClik}>
    <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
    <span>⬇</span>
    </div>

    <div>
      {showItems && <ItemList items = {data.itemCards}/> }  
    </div>



    </div>
   
     </>
    )
}
export default ResCategory