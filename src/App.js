import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";

import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/about";
import Contact from "./components/Contact";

import RestaurantDetails from "./components/restaurantDetail";

const AppLayout = () => {
    return (
        <div className="App-Layout">
            <Header />
            <Outlet />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact-us",
                element: <Contact />
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantDetails />
            }
        ],
        errorElement: <Error />
    },

]);

const root = ReactDOM.createRoot(document.getElementById('demo'));
root.render(
    <>

        <RouterProvider router={router} />
    </>
);