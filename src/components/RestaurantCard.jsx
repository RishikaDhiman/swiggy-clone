import React from "react";

const RestaurantCard = ({resData}) =>{
    // console.log(resData);
    const {cloudinaryImageId, name, avgRating, sla, cuisines, areaName, locality} = resData.info;
    return  <div className="card">
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} width="260px" height="200px"/>
                <div className="details">
                    <h3>{name}</h3>
                    <h5>{avgRating?avgRating:1} Stars . {sla.slaString}</h5>
                    <p>{cuisines.slice(0,2).join(', ')}{cuisines.length>2?", ...":""}</p>
                    <p>{areaName}</p>
                </div>
            </div>
}

// higher order component
export const withDiscountLabel =(RestaurantCard) =>{
    return (props)=>{
        const {resData} = props;
        const {header, subHeader} = resData.info.aggregatedDiscountInfoV3;
       
        return(
            <div style={{position: "relative"}}>
                <h3 style={{position: "absolute", color:"white", left:"25px", fontWeight:1000, top:"170px"}}>{`${header}  ${subHeader}`}</h3>
                <RestaurantCard {...props} />
            </div>
        )
    }
}
 
export default RestaurantCard;
