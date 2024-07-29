import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "./utils/useRestaurantMenu";

const RestaurantMenu = () => {
  //const [resInfo,setResInfo] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  //console.log(resInfo?.cards[2]?.card?.card?.info.name)
  const { name } = resInfo?.cards[2]?.card?.card?.info;
  // console.log(name)
  //const {name} = resInfo?.cards[2]?.card?.card?.info
  const { itemCards} =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  return (
    <div>
      <div className="menu">
        <h1>{name}</h1>
        <h2>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h2>
        <h3>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Price {item.card.info.defaultPrice}
            </li>
          ))}
          {/* <li>Biryani</li>
                <li>Burger</li>
                */}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
