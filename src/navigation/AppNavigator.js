import React from "react";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import NotFound from "../components/NotFound";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export const routes = [
  {
    path: "/",
    exact: true,
    component: <Home />,
    title: "Home",
    isHeaderElement: true,
  },
  {
    path: "/movies/:id",
    exact: false,
    component: <Detail />,
    title: "Detail",
    isHeaderElement: false,
  },
];
