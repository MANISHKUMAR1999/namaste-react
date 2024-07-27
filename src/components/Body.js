import { resObj } from "./utils/mockdata";
import React from "react";
import RestaurantCard from "./RestaurantCard";
import  {useState} from "react"
const Body = () => {

    const [restaurantList , setRestaurantList] = useState(resObj)
   // const restaurantList = []
    return (
      <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filterList = restaurantList.filter((res)=>res.info.avgRating < 4)
                setRestaurantList(filterList)
            }}>Top Rated Button</button>
        </div>
        <div className="restaurant-container">
          {/* <RestaurantCard resData={resObj[1]} />
          <RestaurantCard resData={resObj[0]} />
          <RestaurantCard resData={resObj[3]} /> */}
  
          {restaurantList.map((restaurant)=><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)}
        </div>
      </div>
    );
  };

export default Body