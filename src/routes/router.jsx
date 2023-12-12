import { createBrowserRouter } from "react-router-dom";
import Root from "../views/Root";
import Flight from "../views/Flight";
import Hotel from "../views/Hotel";
import Shop from "../views/Shop/Shop";
import ShopList from "../views/ShopList/ShopList";
import Home from "../views/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/FlightSearch", element: <Flight /> },
      { path: "/HotelSearch", element: <Hotel /> },
      { path: "/Shop", element: <Shop /> },
      { path: "/ShopList", element: <ShopList /> },
    ],
  },
]);

export default router;
