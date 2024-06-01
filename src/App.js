import React, { lazy, Suspense } from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import useOnlineStatus from "./utils/useOnlineStatus";
import RestaurantDetails from "./components/restaurantDetail";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"))

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
                path: "/about",
                element: <About />
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
                path: "/grocery",
                element:
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Grocery />
                    </Suspense>
            }
        ],
        errorElement: <Error />
    },

]);

const root = ReactDOM.createRoot(document.getElementById('demo'));
root.render(
    <Provider store={appStore}>
        <RouterProvider router={router} />
    </Provider>
);