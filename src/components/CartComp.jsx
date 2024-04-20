import React from 'react'
import EmptyCart from './EmptyCart';
import {useSelector, useDispatch} from "react-redux";
import ItemsList from './ItemsList';
import { Link, NavLink } from 'react-router-dom';
import OrderPage from './OrderPage';
import { clearcart } from '../slices/cartSlice';


const CartComp = () => {

  // subscribing to whole store
  // const store = useSelector((store)=>store);
  // const cartItems = store.cart.items;

  const cartItems = useSelector((store)=> store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart=()=>{
    // clear cart is clicked!!
    dispatch(clearcart());
  }


  return (
    <div>
      {
        cartItems.length==0?<EmptyCart/>:<div style={{backgroundColor:"#e4e6ed", padding:"20px 30px", margin:"20px 0px"}}>
            <ItemsList itemCards={cartItems}/>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginTop:"20px", marginBottom:"10px"}}>
              <button style={{border:"none", outline:"none", padding:"10px 20px", backgroundColor:"black", color:"white", cursor:"pointer", fontSize:"18px"}} onClick={()=>handleClearCart()}>Clear Cart</button>
              <NavLink to="/order-succesfull"><button style={{border:"none", outline:"none", padding:"10px 30px", backgroundColor:"rgb(248, 129, 43)", color:"white", cursor:"pointer", fontSize:"18px"}}>Order</button></NavLink>
            </div>
          </div>
      }
    </div>
  )
}

export default CartComp
