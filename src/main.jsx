import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./components/Main";
import Phones from "./components/Phones";
import PhoneDetails from "./components/PhoneDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:"/phones",
        element: <Phones></Phones>,
        loader: () => fetch('http://localhost:7000/phones'),
      },
      {
        path:"/phone/:id",
        element: <PhoneDetails></PhoneDetails>,
        loader: ({params}) => fetch(`http://localhost:7000/phones/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
