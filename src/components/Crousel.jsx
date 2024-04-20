import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Crousel = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        
        const data = await fetch(
          "https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999"
        );
        const json = await data.json();
        
        const restaurants = json?.data?.cards[0].card.card.imageGridCards.info;

        setListOfRestaurants(restaurants);
        // console.log("crouselllllllllllllllllllllllllll");
        // console.log(restaurants);
    }


  return (
    <div className='Crousel'>
      <h2>What's on your mind?</h2>
        <div className='crousel-container'>
            {
                listOfRestaurants && listOfRestaurants.map((info)=>{
                    return <Link to={info.action.link} key={info.id} onClick={()=>console.log(info.action.text)}>
                    <div >
                        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${info.imageId}`} style={{borderRadius:"50px"}} height="150px" width="140px"/>
                    </div>
                    </Link>
                })
            }
        </div>
    </div>
  )
}

export default Crousel
