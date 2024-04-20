import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';
import Crousel from './Crousel';

export default function SearchComp() {
    const [searchFood, setSearchFood] = useState("");
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(
          "https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999"
        );
    
        const json = await data.json();
        // The ?. is called the "optional chaining" operator in JavaScript. It's used to access properties of an object when it's uncertain whether those properties or their parent objects exist.
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if(searchFood==""){
            setListOfRestaurants(restaurants);
        }
        else{
            const filterSearchRestaurants = restaurants.filter((res)=>{
                return res.info.name.toLowerCase().includes(searchFood.toLowerCase());
            })
            setListOfRestaurants(filterSearchRestaurants);
        }

        console.log(restaurants);
    }


  return (
    <div className="search-comp">
      {/* if this input box is only changing in header component then, header component will re-render, refresh then sees diff. between 2 doms and change only that part which is changed - Reconcilation algorithm!! */}
        <input type="text" placeholder="Search for restuarants and food" className="search" value={searchFood} 
        onChange={(e)=> {setSearchFood(e.target.value);}}></input>

        <Crousel/>

        {searchFood==""?<></>: <div className="resturantCards">{
           listOfRestaurants.map((restaurant)=>{
               return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
           })
           }
       </div>

        }
    </div>
  )
}
