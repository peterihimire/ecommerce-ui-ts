import { RouteObject } from "react-router-dom";
import WebsiteLayout from "../layouts/website";
import Home from "../components/Website/Home";
// import {Home} from "../pages/home"; // Assuming HomePage is the default export

export const routes: RouteObject[] = [
  { path: "/", element: <Home /> },
  {
    path: "/card",
    element: <WebsiteLayout />,
    children: [
      {
        index: true,
        element: <Home />,
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
