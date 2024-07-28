

import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {

const [resInfo,setResInfo] = useState(null);
const {resId} = useParams()

useEffect(()=>{
fetchMenuData();

},[])

const fetchMenuData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId="+resId)
    const response = await data.json()
    console.log(response);
    setResInfo(response.data)

}

if( resInfo === null ){
   return <Shimmer/>

} 
//console.log(resInfo?.cards[2]?.card?.card?.info.name)
 const {name} = resInfo?.cards[2]?.card?.card?.info;
// console.log(name)
 //const {name} = resInfo?.cards[2]?.card?.card?.info
 const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
 console.log(itemCards)
 


  return  (
    <div>
        <div className='menu'>
            <h1>{name}</h1>
             <h2>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(', ')}</h2>
             <h3>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
            <ul>
                {itemCards.map((item)=>(
                    <li key={item.card.info.id}>{item.card.info.name} - Price {item.card.info.
                        defaultPrice
                        }</li>
                ))}
                {/* <li>Biryani</li>
                <li>Burger</li>
                */}


                
            </ul> 
        </div>
    </div>
  )
}

export default RestaurantMenu