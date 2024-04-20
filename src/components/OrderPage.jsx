import React from 'react'
import { NavLink } from 'react-router-dom'

const OrderPage = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"70vh", gap:"30px"}}>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center",}}>
        <h1 style={{fontSize:"50px"}}>Order Succesfull </h1>
        <i class="fa-regular fa-circle-check" style={{fontSize:"50px", color:"rgb(248, 129, 43)",paddingLeft:"10px"}}></i>
      </div>
      <NavLink to="/"><button style={{border:"none", outline:"none", padding:"10px 25px", backgroundColor:"rgb(248, 129, 43)", color:"white", cursor:"pointer"}} >SEE RESTAURANTS NEAR YOU</button></NavLink>
    </div>
  )
}

export default OrderPage
