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
import HotelBookingDetail from "../views/hotel/hotelBookingDetail/HotelBookingDetail";
import FlightList from "../views/flight/flight-list/FlightList";
import FlightPassenger from "../views/flight/flight-passenger/FlightPassenger";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Flight", element: <FlightSearch /> },
      {
        path: "/FlightList/:OriginLocation/:DestinationLocation/:DepartureDate/:ReturnDate?/:Adults/:Childrens/:Infants/:AirlinePrefCode/:travelClass",
        element: <FlightList />,
      },
      {
        path: "/FlightPassenger",
        element: <FlightPassenger />,
      },
      {
        path: "/Hotel",
        element: <HotelSearch />,
      },
      {
        path: "/Hotellist/:Country/:CheckInDate/:CheckOutDate/:NoOfRooms/:AdultPerRoom/:ChildrenPerRoom",
        element: <HotelList />,
      },
      {
        path: "/HotelDetail/:id/:SearchId",
        element: <HotelDetail />,
      },
      {
        path: "/HotelBookingDetail/:id/:SearchId/:bookingcode",
        element: <HotelBookingDetail />,
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
