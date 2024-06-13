import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import { Provider } from "react-redux";

import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import useOnlineStatus from "./utils/useOnlineStatus";
import RestaurantDetails from "./components/restaurantDetail";
import appStore from "./utils/store/appStore";
import Login from "./components/Authentication/login";
import { GoogleOAuthProvider } from "@react-oauth/google";


const AppLayout = () => {

    const onlineStatus = useOnlineStatus();

    return (
        <div className="App-Layout">
            <Header />
            {!onlineStatus && <h1>You are offline, please check your Internet !!</h1>}
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
                path: "/contact-us",
                element: <Contact />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantDetails />
            },
            {
                path: "/login",
                element: <Login />
            }
        ],
        errorElement: <Error />
    },

]);

const root = ReactDOM.createRoot(document.getElementById('demo'));
root.render(
    <GoogleOAuthProvider clientId="210767712784-tg8p82p30m9ljo0t3rr5j0pv3gbgispf.apps.googleusercontent.com">
        <Provider store={appStore}>
            <RouterProvider router={router} />
        </Provider>
    </GoogleOAuthProvider>
);