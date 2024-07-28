import { resObj } from "./utils/mockdata";
import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
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
  return restaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search mt-5 " style={{ display: "flex" }}>
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <div className="search-btn">
            <button
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
        </div>
        <div>
          <button
            className="filter-btn"
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
      <div className="restaurant-container">
        {/* <RestaurantCard resData={resObj[1]} />
          <RestaurantCard resData={resObj[0]} />
          <RestaurantCard resData={resObj[3]} /> */}

        {filteredRestaurant.map((restaurant) => (
       <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>   
        ))}
      </div>
    </div>
  );
};

export default Body;
