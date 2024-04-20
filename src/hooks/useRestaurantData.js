import React, { useState, useEffect } from 'react'

const useRestaurantData = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        
        const data = await fetch(
          "https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999"
        );
        const json = await data.json();
        // console.log("hsdgfffffffffffffffffffffffffffffffffffffffffffffffffh");
        // console.log(json.data.cards);

        // The ?. is called the "optional chaining" operator in JavaScript. It's used to access properties of an object when it's uncertain whether those properties or their parent objects exist.
        const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setListOfRestaurants(restaurants);
        
        // console.log(restaurants);

    }
    return listOfRestaurants;


}

export default useRestaurantData
