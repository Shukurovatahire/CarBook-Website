import ReactDOM from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home.tsx";
import Details from "./Components/Details/Details.tsx";
import AddCar from "./Components/AddCar/AddCar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cardetails/:id",
    element: <Details />,
  },
  {
    path:"/addcar",
    element:<AddCar/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
