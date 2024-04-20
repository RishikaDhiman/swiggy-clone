import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import RestaurantDishes from './RestaurantDishes';
// import Shimmer from './Shimmer';

const RestaurantMenu = () => {

    const [resData, setResData] = useState([]);
    const [offers, setOffers] = useState([]);
    const [category, setCategory] = useState([]);
    const [showItems, setShowItems] = useState(false);
    const [showIndex, setShowIndex] = useState(0);

    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[resId]);

    const fetchMenu = async()=>{
      try {
        let api = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}`);
        api = await api.json();
        // console.log(api);
        // console.log("api-")
        // console.log(api.data.cards);

        const res = api?.data?.cards[2]?.card?.card?.info;
        const offer = api?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
        const dishes = api?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

        // console.log(dishes);
        setResData(res); 
        setOffers(offer);
        const categories = dishes.filter((dish)=>{
          return dish?.card?.["card"]?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        })
        setCategory(categories);
        // console.log("res-")
        // console.log(res);
        // console.log("offers-")
        // console.log(offer);
        // console.log("dishes-")
        // console.log(dishes);

        
        console.log("catttttttttttttttttttttttttttttt")
        console.log(categories)

      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    }

   
  return !resData || resData.length==0? (<></>):
  <div className='menuContainer'>
    <div style={{display:"flex", justifyContent:"space-between"}}>
      <div className='detailedMenu'>
        <h2>{resData.name}</h2>
        <div style={{display:"flex", flexDirection:"column", margin:"10px 0px", gap:"3px",}}>
          <p>{resData.cuisines.join(", ")}</p>
          <p>{resData.city}</p>
        </div>
        <div style={{display:"flex", flexDirection:"column", margin:"10px 0px", gap:"3px"}}>
          <div><button style={{color:"green", fontWeight:"bold"}}>{resData.avgRating}</button> || {resData.totalRatingsString}</div>
          <p>{resData.feeDetails.message}</p>
        </div>
      </div>
        <div style={{position:"relative"}}>
          <button 
            style={{position:"absolute", bottom:"0px", padding:"5px 20px", color:"green", fontSize:"18px", fontWeight:600, border:"none", outline:"none", cursor:"pointer", borderRadius:"10px", left:55}}
          >Add</button>
          <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`} width="180px" height="150px" style={{borderRadius:"15px"}}/>
        </div>
    </div>
      <hr style={{margin: "12px 0px"}}></hr>
      <h4>{resData.sla.slaString} || {resData.costForTwoMessage}</h4>
      <hr style={{margin: "12px 0px"}}></hr>

      {!offers || offers.length==0 ? (<></>):   
        <div style={{margin:"10px 0px", display:"flex", flexWrap:"wrap", gap:"15px", alignContent:"center"}}>
          {offers.map((offers,index)=>{
            return <button key={index} style={{padding:"5px 10px", background:"none", border:"1px solid grey", outline:"none", }} ><h4>{offers.info.header}</h4><h6>{offers.info.couponCode || offers.info.description}</h6></button>
          })}
        </div>
      }

    <hr style={{margin: "12px 0px"}}></hr>

    {/* loading of class means creating instance of class - (object).*/}
    {category && category.length > 0 ? (
            category.map((cat, index)=>{
              return <RestaurantDishes cat={cat} key={index} showItems={index==showIndex ?true:false} setShowIndex={()=>setShowIndex(index)}/>
            })
        ) : (
            <div>Loading menu...</div>
    )}
    
    </div>
  
}

export default RestaurantMenu;
