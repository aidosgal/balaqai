import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./commponents/Home.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
          {
            path: '/',
            element: <Home/>
          }
        ]
    },
    ]);

export default router;
