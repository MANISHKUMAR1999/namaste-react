import { resObj } from "./utils/mockdata";
import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const[filteredRestaurant , setFilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  // if(restaurantList.length == 0){
  //   return <Shimmer/>
  // }
  // const restaurantList = []

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return (<h1>seems you are offline</h1>)
  return restaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body container">
      <div className="filter  mt-4 flex gap-5">
        <div className="search mr-4">
          <input
            type="text"
            className="search-input border border-solid border-black rounded-md mr-4"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        
            <button
            className="px-4 py-2 bg-green-100 text-center rounded-lg"
              onClick={() => {
                console.log(searchText);
                // const filteredRestaurant = restaurantList.filter((res) => {
                //   res.info.name.toLowerCase().includes(searchText.toLowerCase());
                //  console.log( res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                // });

                const filteredRestaurant = restaurantList.filter((res)=>{
                  return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                })
                setFilteredRestaurant(filteredRestaurant);
              }}
            >
              Search btn
            </button>
         
        </div>
        <div>
          <button
            className="filter-btn px-4 py-2 bg-green-100 rounded-lg"
            onClick={() => {
              const filterList = restaurantList.filter(
                (res) => res.info.avgRating < 4
              );
              setFilteredRestaurant(filterList);
            }}
          >
            Top Rated Button
          </button>
        </div>
      </div>
      <div className="restaurant-container flex flex-wrap">
        {/* <RestaurantCard resData={resObj[1]} />
          <RestaurantCard resData={resObj[0]} />
          <RestaurantCard resData={resObj[3]} /> */}

        {filteredRestaurant.map((restaurant) => (
       <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}  className="text-decoration-none text-black"><RestaurantCard  resData={restaurant} /></Link>   
        ))}
      </div>
    </div>
  );
};

export default Body;
