import React, { useEffect, useState } from "react";
import "./product-details.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { newProducts } from "../../../redux/shop/featuredoffers/FeaturedOffersSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../../../redux/product-details/ProductDetailsSlice";
import axios from "axios";
// import ShopNavbar from "../../Shop/shop-nav/ShopNavbar";
import { CustomerId, CustomerName, STORE_ID } from "../../../config";
import { shopApi } from "../../../api/services";
import {
  addCartCount,
  fetchcartDetails,
} from "../../../redux/common/cartDetails/cartDetailsSlice";
import { addCartId } from "../../../redux/common";
import Loading from "../../../components/other/loading/Loading";
import { enqueueSnackbar } from "notistack";
const ProductDetails = () => {
  const { CATALOG_ID, CART_ID } = useSelector((state) => state.commonReducer);
  const [productData, setproductData] = useState(null);
  const [cartItems, setcartItems] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [count, setCount] = useState(0);
  const [isloading, setisloading] = useState(false);

  const { id: productid } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    getProductDetails();
    getCartDetails();
  }, []);

  const getProductDetails = () => {
    if (!productid) {
      navigate(-1);
      return;
    }
    setisloading(true);
    // let url = `/api/StoreFront/GetProductById/${productid}?StoreId=${STORE_ID}&CatalogId=${CATALOG_ID}&LanguageCode=en-US&CurrencyCode=AED`;
    let url = `src/dummyApiData/shop/${productid}.json`;
    shopApi
      .get(url)
      .then(({ data }) => {
        if (data[productid]) {
          setproductData(data[productid]);
        } else {
          setisloading(false);
          navigate(-1);
        }
      })
      .catch((err) => {
        console.log(err);
        // shopApi.get( url: "ER-iPhone-15-512GB-Black" )
        //   .then(({ data }) => {
        //     setproductData(data);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
      })
      .finally(() => setisloading(false));
  };

  const getCartDetails = () => {
    // let url = `/api/StoreFront/SearchCart`;
    let url = `SearchCart_DATA`;
    let body = {
      StoreId: STORE_ID,
      Name: "default",
      CustomerId: CustomerId,
      CustomerName: CustomerName,
      Type: null,
      CurrencyCode: "AED",
      LanguageCode: "en-US",
    };
    //this is temp impl
    GettempCart();
    return;
    // Below is API impl
    dispatch(fetchcartDetails({ url, body }))
      .then(({ payload }) => {
        setcartItems(
          payload.Items.map(({ ProductId, Quantity }) => ({
            ProductId,
            Quantity,
          }))
        );
        dispatch(addCartId(payload.Id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToCart = async () => {
    // if (count < 1) {
    //   alert("add quantity to cart");
    //   return;
    // }
    let existingItem = cartItems.filter((x) => x.ProductId === productid);
    if (existingItem.length > 0) {
      existingItem[0].Quantity = count;
    } else {
      cartItems.push({ ProductId: productid, Quantity: count });
    }
    setcartItems([...cartItems]);
    //this is temp impl
    SettempCart(cartItems);
    dispatch(addCartCount(cartItems.length));
    enqueueSnackbar("Item added to cart", { variant: "success" });
    return;
    // Below is API impl
    let url = `/api/StoreFront/AddOrUpdateItemInCart`;
    let body = {
      CatalogId: CATALOG_ID,
      CartId: CART_ID,
      Items: [...cartItems],
    };
    shopApi
      .get(url, body)
      .then((result) => {
        result.data.Items.map(({ ProductId, Quantity }) => ({
          ProductId,
          Quantity,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function SettempCart(items) {
    localStorage.setItem("cart", JSON.stringify(items));
  }
  function GettempCart() {
    let cart = localStorage.getItem("cart");
    dispatch(addCartCount(cart ? JSON.parse(cart).length : 0));
    setcartItems(cart ? JSON.parse(cart) : []);
  }

  return (
    <>
      {/* <Breadcrumbs /> */}
      <ShopNavbar />
      <div className="dvBreadcrumbs">
        <div className="container-lg">
          <nav>
            <ul className="breadcrumb py-3 px-0 align-items-center">
              <li className="me-2">
                <FaArrowLeft onClick={() => navigate(-1)} />
              </li>
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="breadcrumb-item active">ProductDetails</li>
            </ul>
          </nav>
        </div>
      </div>
      {isloading && <Loading />}
      {!isloading && (
        <div className="dvProductDetail pb-5">
          <div className="container-lg">
            <div className="row">
              {productData && (
                <>
                  <div className="dvThumbSwiperSlider col-12 col-md-3">
                    <Swiper
                      style={{
                        "--swiper-navigation-color": "var(--primary-colour)",
                        "--swiper-pagination-color": "var(--primary-colour)",
                      }}
                      spaceBetween={0}
                      navigation={true}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper2"
                    >
                      {/* <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide> */}
                      {/* {imgUrl &&
                      imgUrl.map((item, index) => {
                        const { Url } = item;
                        return (
                          <SwiperSlide key={index}>
                            <img src={Url} />
                          </SwiperSlide>
                        );
                      })} */}
                      {productData &&
                        productData.Images.map((item, index) => {
                          const { Url, Id } = item;
                          return (
                            <SwiperSlide key={index}>
                              <img src={Url} />
                            </SwiperSlide>
                          );
                        })}
                    </Swiper>
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      spaceBetween={10}
                      slidesPerView={4}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper"
                    >
                      {/* <SwiperSlide>
                      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </SwiperSlide> */}
                      {productData &&
                        productData.Images.map((item, index) => {
                          const { Url } = item;
                          return (
                            <SwiperSlide key={index}>
                              <img src={Url} />
                            </SwiperSlide>
                          );
                        })}
                    </Swiper>
                  </div>
                  <div className="dvProductInfo col-12 col-md-9">
                    <div className="dvInfo row mb-4">
                      <div className="col-12">
                        <h2 className="heading-md mb-4">
                          {productData && productData.Name}
                        </h2>
                        <h2 className="heading-md-semibold">358 points</h2>
                      </div>
                    </div>
                    <div className="dvAdd row mb-4">
                      <div className="col-12">
                        <h2 className="heading-sm-regular mb-2">Quantity</h2>
                        <div className="row">
                          <div className="d-flex align-items-center col-10 col-sm-6 col-md-9 col-xl-6">
                            <div className="plus col-auto">
                              <button
                                type="button"
                                onClick={() =>
                                  setCount((prev) => {
                                    console.log(prev);
                                    if (prev < 1) {
                                      return 0; // Return 0 if prev is less than 1
                                    }
                                    return prev - 1; // Decrement prev otherwise
                                  })
                                }
                                className="btn-addtocart p-0"
                              >
                                <FaMinus />
                              </button>
                            </div>
                            <div className="value mx-2 col-2">
                              <p className="border text-center">{count}</p>
                            </div>
                            <div className="minus col-auto">
                              <button
                                type="button"
                                className="btn-addtocart p-0"
                                onClick={() => setCount((prev) => prev + 1)}
                              >
                                <FaPlus />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dvDenominations row mb-4" hidden>
                      <div className="col-12">
                        <h2 className="heading-sm-regular mb-2">
                          Denominations
                        </h2>
                      </div>
                      <div className="col-12 d-flex flex-wrap">
                        <input
                          type="radio"
                          name="radio"
                          className="denomination-checkbox"
                          id="denomination1"
                          defaultChecked
                        />
                        <label
                          className="denomination-btn col-3 col-sm-2"
                          htmlFor="denomination1"
                        >
                          10
                        </label>

                        <input
                          type="radio"
                          name="radio"
                          className="denomination-checkbox"
                          id="denomination2"
                        />
                        <label
                          className="denomination-btn col-3 col-sm-2"
                          htmlFor="denomination2"
                        >
                          200
                        </label>

                        <input
                          type="radio"
                          name="radio"
                          className="denomination-checkbox"
                          id="denomination3"
                        />
                        <label
                          className="denomination-btn col-3 col-sm-2"
                          htmlFor="denomination3"
                        >
                          300
                        </label>

                        <input
                          type="radio"
                          name="radio"
                          className="denomination-checkbox"
                          id="denomination4"
                        />
                        <label
                          className="denomination-btn col-3 col-sm-2"
                          htmlFor="denomination4"
                        >
                          500
                        </label>

                        <input
                          type="radio"
                          name="radio"
                          className="denomination-checkbox"
                          id="denomination5"
                        />
                        <label
                          className="denomination-btn col-3 col-sm-2"
                          htmlFor="denomination5"
                        >
                          1000
                        </label>

                        <input
                          type="radio"
                          name="radio"
                          className="denomination-checkbox"
                          id="denomination6"
                        />
                        <label
                          className="denomination-btn col-3 col-sm-2"
                          htmlFor="denomination6"
                        >
                          1000
                        </label>

                        <input
                          type="radio"
                          name="radio"
                          className="denomination-checkbox"
                          id="denomination7"
                        />
                        <label
                          className="denomination-btn col-3 col-sm-2"
                          htmlFor="denomination7"
                        >
                          1000
                        </label>

                        <input
                          type="radio"
                          name="radio"
                          className="denomination-checkbox"
                          id="denomination8"
                        />
                        <label
                          className="denomination-btn col-3 col-sm-2"
                          htmlFor="denomination8"
                        >
                          1000
                        </label>

                        <input
                          type="radio"
                          name="radio"
                          className="denomination-checkbox"
                          id="denomination9"
                        />
                        <label
                          className="denomination-btn col-3 col-sm-2"
                          htmlFor="denomination9"
                        >
                          1000
                        </label>

                        <input
                          type="radio"
                          name="radio"
                          className="denomination-checkbox"
                          id="denomination10"
                        />
                        <label
                          className="denomination-btn col-3 col-sm-2"
                          htmlFor="denomination10"
                        >
                          1000
                        </label>
                      </div>
                    </div>
                    <div className="dvButtons row mb-4">
                      <div className="col-12 col-sm-4 col-xl-3 mb-3">
                        <button
                          type="button"
                          onClick={() => addToCart(productid)}
                          className="btn btn-primary w-100"
                        >
                          Add to Cart
                        </button>
                      </div>
                      <div className="col-6 col-sm-4 col-xl-3">
                        <button
                          type="button"
                          className="btn btn-primary w-100"
                          onClick={() => navigate(-1)}
                        >
                          Back
                        </button>
                      </div>
                      <div className="col-6 col-sm-4 col-xl-3" hidden>
                        <button type="button" className="btn btn-primary w-100">
                          Redeem
                        </button>
                      </div>
                    </div>
                    <div className="dvDetails row mb-4">
                      <div className="col-12">
                        <nav>
                          <div
                            className="nav nav-tabs flex-nowrap scroll-hoz border-bottom-0"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              className="nav-link active text-capitalize"
                              id="nav-description-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-description"
                              type="button"
                              role="tab"
                              aria-controls="nav-description"
                              aria-selected="true"
                            >
                              description
                            </button>
                            <button
                              className="nav-link text-capitalize"
                              id="nav-termsconditions-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-termsconditions"
                              type="button"
                              role="tab"
                              aria-controls="nav-termsconditions"
                              aria-selected="false"
                            >
                              terms & conditions
                            </button>
                            <button
                              className="nav-link text-capitalize"
                              id="nav-specifications-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-specifications"
                              type="button"
                              role="tab"
                              aria-controls="nav-specifications"
                              aria-selected="false"
                            >
                              specifications
                            </button>
                          </div>
                        </nav>
                        <div className="tab-content" id="nav-tabContent">
                          <div
                            className="tab-pane border p-3 fade show active"
                            id="nav-description"
                            role="tabpanel"
                            aria-labelledby="nav-description-tab"
                          >
                            <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Suscipit illo neque facere
                              dolorum, itaque dignissimos corporis. Velit
                              impedit delectus veniam excepturi beatae nostrum
                              fuga sit quos, sequi aut, blanditiis dignissimos
                              consectetur. Et distinctio, perferendis qui
                              voluptate ratione aut ut temporibus nihil
                              laboriosam officia! Vel possimus veniam saepe
                              dicta optio ipsum excepturi nostrum, nesciunt
                              aspernatur nulla incidunt commodi aut nam
                              accusantium asperiores! Nostrum, alias nihil!
                              Nostrum illum odio id placeat, debitis voluptatum
                              blanditiis dolore nesciunt ipsum obcaecati sequi
                              numquam commodi architecto atque natus! Deserunt
                              modi ea necessitatibus atque libero sed at
                              accusamus voluptate quo quasi, quas nulla aliquam
                              ipsa inventore recusandae.
                            </p>
                          </div>
                          <div
                            className="tab-pane border p-3 fade"
                            id="nav-termsconditions"
                            role="tabpanel"
                            aria-labelledby="nav-termsconditions-tab"
                          >
                            <ul className="list ps-3">
                              <li>Description point</li>
                              <p className="mb-3">
                                Description - Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Doloremque,
                                perspiciatis.
                              </p>
                              <li>Description point</li>
                              <p className="mb-3">
                                Description - Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Doloremque,
                                perspiciatis.
                              </p>
                              <li>Description point</li>
                              <p className="mb-3">
                                Description - Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Doloremque,
                                perspiciatis.
                              </p>
                              <li>Description point</li>
                              <p className="mb-3">
                                Description - Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Doloremque,
                                perspiciatis.
                              </p>
                            </ul>
                          </div>
                          <div
                            className="tab-pane border p-3 fade"
                            id="nav-specifications"
                            role="tabpanel"
                            aria-labelledby="nav-specifications-tab"
                          >
                            <ul className="list ps-3">
                              <li>Specification point</li>
                              <p className="mb-3">
                                Specification - Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Doloremque,
                                perspiciatis.
                              </p>
                              <li>Specification point</li>
                              <p className="mb-3">
                                Specification - Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Doloremque,
                                perspiciatis.
                              </p>
                              <li>Specification point</li>
                              <p className="mb-3">
                                Specification - Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Doloremque,
                                perspiciatis.
                              </p>
                              <li>Specification point</li>
                              <p className="mb-3">
                                Specification - Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Doloremque,
                                perspiciatis.
                              </p>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
