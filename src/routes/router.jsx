import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../views/RootLayout";
import FlightSearch from "../views/flight/flight-search/FlightSearch";
import HotelSearch from "../views/hotel/hotel-search/HotelSearch";
import Shop from "../views/shop/Index";
import ShopList from "../views/shoplist/list/ShopList";
import Home from "../views/home/Index";
import ProductDetails from "../views/shoplist/product-details/ProductDetails";
import Cart from "../views/cart/Cart";
import PageNotFound from "../components/other/pagenotfound/PageNotFound";
import Checkout from "../views/Shop/checkout/Checkout";
import OrderStatus from "../components/orderStatus/OrderStatus";
import HotelList from "../views/hotel/hotelList/HotelList";
import HotelDetail from "../views/hotel/hotelDetail/HotelDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/FlightSearch", element: <FlightSearch /> },
      {
        path: "/Hotel",
        element: <HotelSearch />,
      },
      {
        path: "/Hotellist/:Country/:CheckInDate/:CheckOutDate/:NoOfRooms/:AdultPerRoom/:ChildrenPerRoom",
        element: <HotelList />,
      },
      {
        path: "/HotelDetail/:id",
        element: <HotelDetail />,
      },
      { path: "/Shop", element: <Shop /> },
      { path: "/ShopList", element: <ShopList /> },
      { path: "/ShopList/:id", element: <ShopList /> },
      { path: "/ProductDetails/:id", element: <ProductDetails /> },
      { path: "/Cart", element: <Cart /> },
      { path: "/Checkout", element: <Checkout /> },
      { path: "/OrderStatus", element: <OrderStatus /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

export default router;
