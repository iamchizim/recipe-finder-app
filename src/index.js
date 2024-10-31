import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeFinderApp from "./components/RecipeFinderApp";
import NotFoundPage from "./pages/NotFoundPage";
import RecipeDetails from "./pages/RecipeDetails";

const router = createBrowserRouter([
  { path: "/", element: <RecipeFinderApp />, errorElement: <NotFoundPage /> },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  { path: "/RecipeDetails:recipeId", element: <RecipeDetails /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
