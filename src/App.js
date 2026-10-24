import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/AboutUs";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";
import { useContext } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const AppLayout = () => {
  let { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={loggedInUser}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:resId",
        element: <Menu />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
