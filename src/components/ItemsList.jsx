import React from 'react'
import {useDispatch} from "react-redux";
import { additem } from '../slices/cartSlice';

const ItemsList = ({itemCards}) => {

  const dispatch = useDispatch();

  const handleAddItem=(item)=>{
    // dispatch an action
    dispatch(additem(item))
  }


  return (
    <div>
      {
        itemCards.map((item, itemIndex)=>{
            return <div key = {item.card.info.id}>
            <div style={{padding:"20px 0px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <div style={{display:"flex", gap:"8px", flexDirection:"column", width:"70%", alignContent:"center"}}>
                    <h3>{item.card.info.name}</h3>
                    <h4>Rs {item.card.info?.price/100 || item.card.info?.defaultPrice/100}</h4>
                    <h5>{item.card.info.ratings.aggregatedRating.rating?item.card.info.ratings.aggregatedRating.rating+" stars ":1.2+" stars "} - {item.card.info.ratings.aggregatedRating.ratingCount?item.card.info.ratings.aggregatedRating.ratingCount:10+" Ratings"}</h5>
                    <p>{item.card.info.description}</p>
                </div>
                <div style={{position:"relative"}}>
                  <button 
                  style={{position:"absolute", bottom:"0px", padding:"5px 20px", color:"green", fontSize:"18px", fontWeight:600, border:"none", outline:"none", cursor:"pointer", borderRadius:"10px", left:55}}
                  onClick={()=>handleAddItem(item)}
                  >Add</button>
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`} width="180px" height="150px" style={{borderRadius:"15px"}}></img>
                </div>
            </div>
            <hr></hr>
            </div>
        })   
      }
    </div>
  )
}

export default ItemsList;
