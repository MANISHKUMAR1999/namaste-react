import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResCategory from "./ResCategory";
import useRestaurantMenu from "./utils/useRestaurantMenu";

const RestaurantMenu = () => {
  //const [resInfo,setResInfo] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex,setShowIndex] = useState(null)

  if (resInfo === null) {
    return <Shimmer />;
  }
  //console.log(resInfo?.cards[2]?.card?.card?.info.name)
  const { name } = resInfo?.cards[2]?.card?.card?.info;
  // console.log(name)
  //const {name} = resInfo?.cards[2]?.card?.card?.info
  console.log(resInfo,"Details APi")
  const { itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c?.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  console.log(itemCards);
  console.log("categories",categories)

  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold my-4 text-2xl">{name}</h1>
        <p className="font-bold text-lg">{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</p>
       {
        categories?.map((category,index)=>(
          <ResCategory data = {category?.card?.card} key={category?.card?.card} showItems={index == showIndex ? true :false} setShowIndex = {()=>setShowIndex(index)}/>
        ))
       }
      </div>
    </div>
  );
};

export default RestaurantMenu;
