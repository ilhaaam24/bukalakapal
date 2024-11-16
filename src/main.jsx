import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// eslint-disable-next-line no-unused-vars
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import ErrorPage from "./pages/Error.jsx";
import HomePage from "./pages/Homepage.jsx";
import SignInPage from "./pages/Auth/SignInPage.jsx";
import SignUpPage from "./pages/Auth/SignUpPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";
import Account from "./pages/Account.jsx";
import BlogPage from "./pages/BlogPage.jsx";

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <SignInPage />,
  },
  {
    path: "/register",
    element: <SignUpPage />,
  },
  {
    path: "/home/shop",
    element: <ShopPage />,
  },
  {
    path: "/home/blog",
    element: <BlogPage />,
  },
  {
    path: "/account",
    element: <Account />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
