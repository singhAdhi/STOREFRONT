import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../views/RootLayout";
import FlightSearch from "../views/flight/flight-search/FlightSearch";
import HotelSearch from "../views/hotel/hotel-search/HotelSearch";
import Shop from "../views/shop/Index";
import ShopList from "../views/shoplist/list/ShopList";
import Home from "../views/home/Index";
import ProductDetails from "../views/shop/product-details/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/FlightSearch", element: <FlightSearch /> },
      { path: "/HotelSearch", element: <HotelSearch /> },
      { path: "/Shop", element: <Shop /> },
      { path: "/ShopList", element: <ShopList /> },
      { path: "/ProductDetails/:id", element: <ProductDetails /> },
    ],
  },
]);

export default router;
