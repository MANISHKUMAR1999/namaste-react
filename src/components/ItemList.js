import React from "react"
import { RES_MENU_IMG } from "./utils/constants"


const ItemList = ({items})=>{
    console.log(items,"items of details page")
    return  <>
    {
  
  items.map((items)=>(
<div classNameName="accordion-body">
<div className="item flex items-start justify-between pb-8"><div className="md:w-auto w-3/5 text-start ">


<h4 className="text-base text-color-9 font-ProximaNovaMed">{items.card.info.name}</h4>
<span className="rupee text-color-9 text-sm font-ProximaNovaMed"> RS:{items.card.info.price/100}</span>
<p className="text-color-10 mt-3 tracking-tight font-ProximaNovaThin text-sm md:w-3/4"> {items.card.info.description}</p></div><div className="relative w-[118px] h-24"><button className="cursor-pointer w-[118px] h-24 rounded-md">
    <img src={`${RES_MENU_IMG}${items?.card?.info?.imageId}`} alt="menu-img" className="rounded-md w-[118px] h-24 object-cover"/></button><button className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-[1] w-24 h-9 shadow-md shadow-color-7 bg-white text-center inline-block rounded text-[#60b246] text-sm font-ProximaNovaSemiBold uppercase">Add</button></div></div>
       </div>
  ))
                    
}
    </>
   
}

export default ItemList