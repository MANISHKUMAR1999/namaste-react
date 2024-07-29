import React from "react";
import { CDN_URL } from "./utils/constants";
const RestaurantCard = (props) => {
    console.log(props);
   // console.log
    const { resData } = props;
    const {cloudinaryImageId,name,cuisines,areaName,avgRating,costForTwo} = resData?.info;
    return (
      <div className="p-2 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 hover:scale-95" >
        <img
          className="res-logo rounded-lg"
          //src={resData.cloudinaryImageId}

          src={CDN_URL+cloudinaryImageId}
         // src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5116a385bac0548e06c33c08350fbf11"
        />
        <div className="restaurant-name">
          <h3 className="font-bold py-2 text-lg">{name}</h3>
        </div>
        <div className="restaurant-cuisine">{cuisines.join(", ")}</div>
        <div className="res-info">
          <div className="res-rating">
            * <span>{avgRating}</span>
          </div>
          <div className="res-timing">{resData.info.sla.slaString}</div>
          <div className="res-quantity">{costForTwo}</div>
        </div>
  
        <div className="restaurant-place">
          {areaName}
  
        </div>
  
  
  
        <div className="res-horizontal-line">
          <hr width="100%" size="2" />
        </div>
      </div>
    );
  };


  export default RestaurantCard