import React from 'react'
import { NavLink } from 'react-router-dom'


const EmptyCart = () => {
  return (
    <div style={{display: "flex", justifyContent:"center",alignItems:"center",flexDirection:"column", height:"80vh", width:"100%", gap:"25px"}}>
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" width="240px" height="220px"></img>
      <h3>Your cart is empty!</h3>
      <h4>You can go to home page to view more restaurants.</h4>
      <NavLink to="/"><button style={{border:"none", outline:"none", padding:"10px 25px", backgroundColor:"rgb(248, 129, 43)", color:"white", cursor:"pointer"}} >SEE RESTAURANTS NEAR YOU</button></NavLink>
    </div>
  )
}

export default EmptyCart
