import { RouteObject } from "react-router-dom";
import WebsiteLayout from "../layouts/website";
import { Home } from "../pages/home";
import { About } from "../pages/about"; // Assuming HomePage is the default export

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  { path: "*", element: <h2>error 404</h2> },
];
