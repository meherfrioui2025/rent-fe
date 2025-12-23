import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import Layout from "./layout/Layout.tsx";
import Home from "./pages/Home.tsx";
import "./index.css";
import Listings from "./pages/Listings.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/listings",
        element: <Listings />,
      },
    ],
  },
]);

const root = document.getElementById("root");

createRoot(root!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
