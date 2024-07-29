import React, { useState } from "react";

import { useEffect } from "react";
import { MENU_URL } from "./constants";
const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();

    },[])

    const fetchData = async()=>{
        const data = await fetch(MENU_URL+resId);
        const response = await  data.json();
        setResInfo(response.data);

    }
  return resInfo;
};

export default useRestaurantMenu;
