import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../context/UserContext";
import {useSelector} from "react-redux";

const Header = () =>{
    const [btn, setBtn] = useState("Sign In");

    console.log("header rendered!!")

    const onlineStatus = useOnlineStatus();

    // useContext is a hook.
    const data = useContext(UserContext); 
    // console.log(data);

    // selector gives access to the store.
    // what portion we need to use or we subscribing to which portion of the store.
    const cartItems = useSelector((store)=>store.cart.items);
    console.log("cartitems-",cartItems);

    return <>
    <div className="header font-link">
        <img className="logo" src="https://www.theknowhowlib.com/wp-content/uploads/2020/05/Swiggy-2.png" alt="logo"/>
        <div className="nav-items">
            {/* dont use anchor tag as if when you will use anchor tag whole page will get re-freshed when we click on it and try to move to other page.*/}
                {/* <a>Search</a> */}
                {/* <Link to="/">{onlineStatus?"Online":"Offline"}</Link> */}
                <Link to="/search">Search</Link>
                <Link to="/">Home</Link>
                <Link to="/about-me">About Me</Link>
                <Link to="/help">Help</Link>
                {/* reconcilation process happens, header component will re-render and then it will check the difference between two dom and changes and refresh that part which is being changed! */}
                <Link onClick={()=> btn=="Sign In"?setBtn("Sign Out"):setBtn("Sign In")}>
                    {btn}
                    </Link>
                <Link to="/cart">Cart<b>{` (${cartItems.length})`}</b></Link>
        </div>
    </div>
    {/* <Body searchFood={searchFood}/> */}
    </>
}

export default Header;