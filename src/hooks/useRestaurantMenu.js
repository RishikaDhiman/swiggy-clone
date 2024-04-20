import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) =>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[resId]);

    const fetchMenu = async()=>{
        try {
          let api = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}`);
          api = await api.json();

          setResInfo(api.data);
          console.log(api);
          console.log(api.data.cards);
  
        } catch (error) {
          console.error("Error fetching menu:", error);
        }
      }


    return resInfo;
}

export default useRestaurantMenu;