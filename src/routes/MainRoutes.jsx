import React from "react";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import AdminPage from "../pages/AdminPage";
import EditProductPage from "../pages/EditProductPage";
import { Navigate, Route, Routes } from "react-router-dom";
import SeriesPage from "../pages/SeriesPage";
import FilmsPage from "../pages/FilmsPage";
import CartoonsPage from "../pages/CartoonsPage";
import ProductPage from "../pages/ProductPage";
import ProductDetail from "../components/ProductDetails/ProductDetails";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },

    {
      link: "*",
      element: <NotFoundPage />,
      id: 3,
    },
    {
      link: "/series",
      element: <SeriesPage />,
      id: 4,
    },

    {
      link: "/details/:id",
      element: <ProductDetail />,
      id: 6,
    },

    {
      link: "/films",
      element: <FilmsPage />,
      id: 8,
    },
    {
      link: "/cartoons",
      element: <CartoonsPage />,
      id: 9,
    },

    {
      link: "/products",
      element: <ProductPage />,
      id: 10,
    },

    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 5,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 2,
    },
  ];

  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
