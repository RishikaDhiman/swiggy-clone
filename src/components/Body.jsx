import React, { useEffect, useState } from "react";
import resList from "../api/api";
import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import OnlineStatusError from "./OnlineStatusError";
import useRestaurantData from "../hooks/useRestaurantData";
import Crousel from "./Crousel";


const Body = () =>{

    // const [listOfRestaurants, setListOfRestaurants] = useState([]);

    // useEffect(()=>{
    //     fetchData();
    // },[])

    // console.log("body renderd!!");

    // const fetchData = async () => {
        
    //     const data = await fetch(
    //       "https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999"
    //     );
    //     const json = await data.json();
    //     console.log(json.data);

    //     // The ?. is called the "optional chaining" operator in JavaScript. It's used to access properties of an object when it's uncertain whether those properties or their parent objects exist.
    //     const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    //     setListOfRestaurants(restaurants);
        
    //     console.log(restaurants);
    // }

    const RestaurantCardDiscounted = withDiscountLabel(RestaurantCard);
    console.log("body");

    const listOfRestaurants = useRestaurantData();

    const onlineStatus = useOnlineStatus();
    if(onlineStatus==false){
      return <OnlineStatusError/>;
    }

    // contional Rendering
    if(listOfRestaurants.length==0){
        return <Shimmer/>;
    }

    // ternary operator
    return <div className="body">
        <Crousel/>
       <h2>Restaurants with online food delivery in Bangalore</h2>
       
       <div className="filter-buttons">
            <button className="top-rated-restaurants">
            {/* onClick={()=>{
                setListOfRestaurants(listOfRestaurants.filter((res)=>res.info.avgRating>4));  
            }} */}
                Top-Rated-Restaurants
            </button>
       </div>
       <div className="resturantCards">
        {
           listOfRestaurants.map((restaurant)=>{
               return <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id} onClick={()=>console.log("restaurant clicked!!")}>
                {/* if restaurant have discountFlag in it */
                restaurant.info?.aggregatedDiscountInfoV3?.discountTag?<RestaurantCardDiscounted resData={restaurant}/>:<RestaurantCard resData={restaurant}/>
                }
                </Link>
           })
        }
       </div>
    </div>
}

export default Body;