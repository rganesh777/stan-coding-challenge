import React from "react";

const Index = React.lazy(() => import("./pages/Index"));
const Movies = React.lazy(() => import("./pages/Movies"));
const Series = React.lazy(() => import("./pages/Series"));

export const routes = [
  { path: "/", Component: Index, title: "Popular Titles" },
  { path: "/movies", Component: Movies, title: "Popular Movies" },
  { path: "/series", Component: Series, title: "Popular Series" },
];
