import React, { useEffect, useState } from "react";
import { makeGetRequest } from "../../../api/services";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import Card from "../../../components/card/Card";
import Shimmer from "../../../components/shimmer/Shimmer";
import { enqueueSnackbar } from "notistack";
import HotelSearchForm from "../../../components/hotelSearchForm/HotelSearchForm";

const STARRATINGS = [
  "OneStarOrLess",
  "TwoStarOrLess",
  "ThreeStarOrLess",
  "FourStarOrLess",
  "FiveStarOrLess",
];

const HotelList = () => {
  const navigate = useNavigate();
  const paramsData = useParams();
  const history = useNavigate();
  const [hotelResultTemp, sethotelResultTemp] = useState(null);
  const [hotelResult, sethotelResult] = useState(null);
  const [isloading, setisloading] = useState(false);
  const [isBookingForm, setisBookingForm] = useState(false);
  useEffect(() => {
    getHotelList();
  }, []);

  const getHotelList = (data = paramsData) => {
    let location = data.Country.split(",");
    setisloading(true);
    let body = {
      CheckInDate: data.CheckInDate, //Mandatory
      CheckOutDate: data.CheckOutDate, //Mandatory
      IpAddress: "1", //Mandatory, but can be left as empty
      CountryISOCode: location[0], //Mandatory
      Country: location[1], //Mandatory
      CityName: location[2], //Mandatory
      AdultPerRoom: data.AdultPerRoom, //Mandatory, For multiple rooms, put adult per room separated by comma e.g for 2 rooms - "1,1" or "1,2" for 3 rooms - 2,2,2 etc depending on requirements
      ChildrenPerRoom: data.ChildrenPerRoom, //Mandatory, For multiple rooms, put child per room separated by comma e.g for 2 rooms - "1,1" or "1,2" etc depending on requirements
      MembershipReference: "30303", //Put a unique identifier
      NoOfRooms: parseInt(data.NoOfRooms), //Mandatory
      StarRating: "", //Optional, to filter hotels by star rating(e.g -3 star or more), Possible values - "All", "OneStarOrLess", "TwoStarOrLess", "ThreeStarOrLess", "FourStarOrLess", "FiveStarOrLess", "OneStarOrMore", "TwoStarOrMore", "ThreeStarOrMore", "FourStarOrMore", "FiveStarOrMore"
      OrderBy: "", //Optional, to filter hotels by price, star (low to high, high to low,Possible values -  "PriceAsc", "PriceDesc", "StarRatingAsc", "StarRatingDesc"
      ResultCount: 10, //Optional, No. Of hotels required in the response
      RedemptionRate: 0.006, //To be provided by Giift
    };
    // let url = `https://ibeapi.giift.com/IBENEW/api/Hotel/GetHotelSearchResponse`;

    let url = "src/dummyApiData/hotel/GetHotelSearchResponse_DATA.json";
    makeGetRequest({ url })
      .then(({ data: { GetHotelSearchResponse_DATA } }) => {
        sethotelResult(GetHotelSearchResponse_DATA.results.SearchResponse);
        sethotelResultTemp(GetHotelSearchResponse_DATA.results.SearchResponse);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setisloading(false);
      });
  };

  function convertDate(date) {
    const fullDate = new Date(date);
    const dayOfWeek = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(fullDate);
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      fullDate
    );
    const day = fullDate.getDate();
    return `${dayOfWeek}, ${month} ${day}`;
  }
  const SearchedQueryComponent = ({
    country,
    checkindate,
    checkoutdate,
    numberofrooms,
  }) => {
    const inDate = convertDate(checkindate);
    const outDate = convertDate(checkoutdate);
    return (
      <span className="fw-semibold">{`Your Hotel Search: ${country}, ${inDate} - ${outDate}, ${numberofrooms} Room`}</span>
    );
  };

  const handleRadioClick = (e) => {
    let value = e.target.value;
    if (value == "PriceAsc") {
      sethotelResult((prev) => ({
        ...prev,
        hotels: {
          ...prev.hotels,
          hotel: hotelResult.hotels.hotel.slice().sort((a, b) => {
            return (
              a.basicinfo.minhotelprice.TotalPrice -
              b.basicinfo.minhotelprice.TotalPrice
            );
          }),
        },
      }));
    } else {
      sethotelResult((prev) => ({
        ...prev,
        hotels: {
          ...prev.hotels,
          hotel: hotelResult.hotels.hotel.slice().sort((a, b) => {
            return (
              b.basicinfo.minhotelprice.TotalPrice -
              a.basicinfo.minhotelprice.TotalPrice
            );
          }),
        },
      }));
    }
  };

  const handleCheckRating = (e) => {
    let value = e.target.id;
    if (value == "all") {
      sethotelResult(hotelResultTemp);
      return;
    }
    let list = hotelResultTemp.hotels.hotel.filter(
      (x) => parseInt(x.basicinfo.hotelratings.HotelRating[0].rating) == value
    );
    if (list.length > 0) {
      sethotelResult((prev) => ({
        ...prev,
        hotels: {
          ...prev.hotels,
          hotel: list,
        },
      }));
    } else {
      enqueueSnackbar("Hotels not found", { variant: "warning" });
    }
  };

  const handleSearch = (value) => {
    getHotelList(value);
    setisBookingForm(false);
  };

  const handleLoad = () => {
    return;
    let newList = hotelResultTemp.hotels.hotel;
    sethotelResult((prev) => ({
      ...prev,
      hotels: {
        ...prev.hotels,
        hotel: [...prev.hotels.hotel, ...newList],
      },
    }));
  };

  return (
    <div className="dvMain">
      <div className="dvBreadcrumbs">
        <div className="container-lg">
          <nav>
            <ul className="breadcrumb py-3 px-0 align-items-center">
              <li className="me-2">
                <FaArrowLeft onClick={() => history(-1)} />
              </li>
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/Hotel">Hotel</Link>
              </li>
              <li className="breadcrumb-item active">Hotel List</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="dvProductList pb-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-3">
              <p className="bg-black p-3 rounded-top-2 text-white">
                Total Hotels Found:{" "}
                <span>{hotelResult && hotelResult.hotels.hotel.length}</span>
              </p>
              <div className="p-3">
                <p className="fw-bold">Hotel Ratings</p>

                <div className="dvLabel d-flex justify-content-between">
                  <label className="checkbox-container d-flex">
                    <span className="d-inline-block">
                      <input
                        id="all"
                        value={"All"}
                        type="checkbox"
                        onClick={handleCheckRating}
                      />
                      <span className="checkmark"></span>
                    </span>
                    <span className="ms-2 d-inline-block ml-2">Select All</span>
                  </label>
                </div>
                {STARRATINGS.map((val, idx) => (
                  <div
                    key={idx}
                    className="dvLabel d-flex justify-content-between"
                  >
                    <label className="checkbox-container d-flex">
                      <span className="d-inline-block">
                        <input
                          id={idx + 1}
                          value={val}
                          type="checkbox"
                          onClick={handleCheckRating}
                        />
                        <span className="checkmark"></span>
                      </span>
                      <span className="ms-2 d-inline-block ml-2">
                        {idx + 1} Star
                      </span>
                    </label>
                  </div>
                ))}
              </div>
              <div className="p-3">
                <p className="fw-bold">Sort Points</p>

                <div className="dvLabel d-flex justify-content-between">
                  <label className="checkbox-container d-flex">
                    <span className="d-inline-block">
                      <input
                        type="radio"
                        name="sorting"
                        value="PriceDesc"
                        onClick={handleRadioClick}
                      />
                      <span className="checkmark"></span>
                    </span>
                    <span className="ms-2 d-inline-block ml-2">
                      High to low
                    </span>
                  </label>
                </div>
                <div className="dvLabel d-flex justify-content-between">
                  <label className="checkbox-container d-flex">
                    <span className="d-inline-block">
                      <input
                        type="radio"
                        name="sorting"
                        value="PriceAsc"
                        onClick={handleRadioClick}
                      />
                      <span className="checkmark"></span>
                    </span>
                    <span className="ms-2 d-inline-block ml-2">
                      Low to high
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="dvModify col-12 mb-3">
                  <div className="bg-dark-subtle d-flex flex-wrap justify-content-between align-items-center py-2 px-2 px-lg-3 mb-1">
                    <button
                      data-toggle="modal"
                      data-target="#dvFilterModal"
                      type="button"
                      className="btn btn-primary col-12 d-lg-none mb-2"
                    >
                      Filter
                    </button>
                    <p className="heading-xs-regular col-8 px-0">
                      {hotelResult && hotelResult.searchcriteria && (
                        <SearchedQueryComponent
                          {...hotelResult.searchcriteria}
                        />
                      )}
                    </p>
                    <button
                      className="btn btn-primary modifyBtn col-auto d-flex"
                      type="button"
                      data-toggle="collapse"
                      data-target="#dvForm"
                      onClick={() => setisBookingForm(!isBookingForm)}
                    >
                      <span className="d-inline-block">Modify</span>
                      <span className="arrow-icon ml-2">
                        <i className="fa fa-caret-up"></i>
                      </span>
                    </button>
                  </div>
                </div>
                {isBookingForm && (
                  <HotelSearchForm handleSearch={handleSearch} />
                )}
                <div className="dvProducts col-12">
                  <div className="dvProducts row">
                    {isloading && <Shimmer />}
                    {!isloading &&
                    hotelResult &&
                    hotelResult.hotels.hotel.length > 0 ? (
                      hotelResult.hotels.hotel.map((item) => {
                        const { hotelid } = item;
                        return (
                          <div key={hotelid} className="col-md-4 mb-3">
                            <Card
                              id={hotelid}
                              name={item.basicinfo.hotelname}
                              img={item.basicinfo.thumbnailimage}
                              points={item.basicinfo.minhotelprice.TotalPrice}
                              route={`/HotelDetail/${hotelid}`}
                            />
                          </div>
                        );
                      })
                    ) : (
                      <p className="text-capitalize text-center text-bg-danger">
                        Hotel not found
                      </p>
                    )}
                  </div>
                </div>
                <button
                  className="bg-warning border-0 fw-semibold mx-auto p-2 rounded-2 text-white w-auto"
                  onClick={handleLoad}
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
