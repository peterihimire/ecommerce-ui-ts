import { RouteObject } from "react-router-dom";
import WebsiteLayout from "../layouts/website";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import { Collections } from "../pages/collections";

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
        path: "/about/who-we-are",
        element: <About />,
      },
      {
        path: "/about/who-we-are",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
    ],
  },
  { path: "*", element: <h2>error 404</h2> },
];
