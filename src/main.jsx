import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import Home from "./pages/Home.jsx"
import TweetDetail from "./pages/TweetDetail.jsx";
import Login from "./pages/Login.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/:username/status/:tweetId',
        element:<TweetDetail/>
      }
    ],
  },
  {
    path:'/login',
    element:<Login/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
