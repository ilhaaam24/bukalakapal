import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/Error.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import Account from "./pages/Account.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import AccountAddress from "./Components/organisms/AccountAddress.jsx";
import AccountDetails from "./Components/organisms/AccountDetails.jsx";
import AccountWishlist from "./Components/organisms/AccountWishlist.jsx";
import AccountOrders from "./Components/organisms/AccountOrders.jsx";
import Register from "./pages/Auth/Register.jsx";
import Login from "./pages/Auth/Login.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/account",
    element: (
      <Account>
        <AccountDetails />
      </Account>
    ),
  },
  {
    path: "/blog/1",
    element: <BlogPost />,
  },
  {
    path: "/account/addresses",
    element: (
      <Account>
        <AccountAddress />
      </Account>
    ),
  },
  {
    path: "/account/details",
    element: (
      <Account>
        <AccountDetails />
      </Account>
    ),
  },
  {
    path: "/account/wishlist",
    element: (
      <Account>
        <AccountWishlist />
      </Account>
    ),
  },
  {
    path: "/account/orders",
    element: (
      <Account>
        <AccountOrders />
      </Account>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
