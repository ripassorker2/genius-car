import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import CHeekOut from "../Pages/CheekOut/CHeekOut";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Orders";
import Resister from "../Pages/Resister/Resister";
import PrivetRouter from "./PrivetRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "/orders",
        element: (
          <PrivetRouter>
            {" "}
            <Orders />
          </PrivetRouter>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/resister", element: <Resister /> },
      {
        path: "/service/:id",
        element: (
          <PrivetRouter>
            <CHeekOut />
          </PrivetRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);
export default router;
