import { resObj } from "./utils/mockdata";
import React, { useEffect,useContext } from "react";
import RestaurantCard,{withOfferLabel} from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import userContext from "./utils/userContext"
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const[filteredRestaurant , setFilteredRestaurant] = useState([])
  const [searchText, setSearchText] = useState("");
  const RestaurantCardwithOffer = withOfferLabel(RestaurantCard)
  const {setUserName,loggedInUser} = useContext(userContext)
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json);
    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    
    setFilteredRestaurant( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //console.log(filteredRestaurant,"hello")
  }
  // if(restaurantList.length == 0){
  //   return <Shimmer/>
  // }
  // const restaurantList = []
  console.log(filteredRestaurant,"hello")
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
        <div>
          <label>UserName : </label>
         <input type="text" className="border border-black p-2" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}/>
        </div>
      </div>
      <div className='flex gap-8 flex-wrap mt-10 2xl:justify-start justify-center'>
        {/* <RestaurantCard resData={resObj[1]} />
          <RestaurantCard resData={resObj[0]} />
          <RestaurantCard resData={resObj[3]} /> */}
  {/* {
                filteredRestaurant?.map((res) => (
                  <Link className='relative transition-all hover:scale-95' key={res?.info?.id} to={`/restaurants/${res?.info?.id}`}>
                    {
                      res?.info?.aggregatedDiscountInfoV3 ? <RestaurantCardwithOffer info={res?.info} /> : <RestaurantCard info={res?.info} />
                    }
                  </Link>
                ))
              } */}
{/* 
        {filteredRestaurant.map((restaurant) => (
       <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}  className="text-decoration-none text-black">
        
        <RestaurantCard  resData={restaurant} /></Link> 
          
        ))} */}

        {
          filteredRestaurant.map((restaurant)=>(
            <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}  className='relative transition-all hover:scale-95'>
              {
                restaurant?.info?.aggregatedDiscountInfoV3 ? <RestaurantCardwithOffer resData={restaurant}/> : <RestaurantCard resData={restaurant}/>
              }
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Body;
