import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import HelpComp from "./components/HelpComp";
import CartComp from "./components/CartComp";
import SearchComp from "./components/SearchComp";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import About from "./components/About";
import {Provider} from "react-redux";
import appStore from "./appStore";
import OrderPage from "./components/OrderPage";


// React core
// const parent = React.createElement("div", {id:"parent"}, [
//     React.createElement("div", {id:"child-1"}, [
//         React.createElement("h1",{}, "This is Child-1.")
//     ]),
//     React.createElement("div", {id:"child-2"}, [
//         React.createElement("h1",{}, "Child-2")
//     ])
// ])

// react element
// const jsxHeading = <h1 className="heading">Namaste React!!</h1>
// #282c3f

// whenever i go to about me page then it will only load it - lazy loading.
// lazy loading is a function.

const About = lazy(()=>import("./components/About"))

const App = () =>{
    return (
        <Provider store={appStore}>
            <div className="App font-link">
                <Header/>
                <Outlet/>
            </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        errorElement : <Error/>,
        children:[
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/search",
                element : <SearchComp/>
            },
            {
                path : "/help",
                element : <HelpComp/>
            },
            {
                path : "/about-me",
                element : <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
            },
            {
                path : "/cart",
                element : <CartComp/>
            },
            {
                // :resId this shows dynamic id.
                path : "/restaurant/:resId",
                element : <RestaurantMenu/>
            },
            {
                path : "/order-succesfull",
                element : <OrderPage/>
            },
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);