// ** React Imports
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// ** Layouts Imports
import MainLayout from "../components/layouts";

// ** Pages Imports
const UsersPage = lazy(() => import("../screen/users"));
const FavoritesPage = lazy(() => import("../screen/favorites"));

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <UsersPage /> },
      { path: "/Favorites", element: <FavoritesPage /> },
    ],
  },
]);
