import React, { lazy, Suspense, useEffect } from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import AboutUs from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import Cart from "./components/Cart.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

const Grocery = lazy(() => import("./components/Grocery.js"));
const AppLayout = () => {
  const [userName, setuserName] = useState();
  const [userLocation, setuserLocation] = useState();
  useEffect(() => {
    const userObj = {
      name: "Ankit Singh",
      city:"Kolkata"
    };
    setuserName(userObj.name);
    setuserLocation(userObj.city)
    
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName ,location:userLocation,setuserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider></Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
