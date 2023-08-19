import { RouteObject } from "react-router-dom";
// import CardList from "../components/pages/CardList";
import WebsiteLayout from "../layouts/website";

import { HomePage } from "../pages/home";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  { path: "*", element: <h2>error 404</h2> },
];

// <BrowserRouter>
//     <Routes>
//       {/* WEBSITE LAYOUT */}
//       <Route element={<WebsiteLayout />}>
//         <Route index element={<HomePage />} />
//       </Route>
//       <Route path="*" element={<h2>error 404</h2>} />
//     </Routes>
//   </BrowserRouter>
