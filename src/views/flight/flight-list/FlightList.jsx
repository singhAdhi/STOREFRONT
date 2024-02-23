import React, { useEffect, useState } from "react";
import "./flightlist.css";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { flightApi } from "../../../api/services";
import FlightSearchForm from "../../../components/flightSearchForm/FlightSearchForm";
import FlightListCard from "./FlightListCard";
import FlightFilter from "./FlightFilter";
import FlightSearchWait from "./FlightSearchWait";

const FlightList = () => {
  const [flightResult, setflightResult] = useState(null);
  const [isBookingForm, setisBookingForm] = useState(false);
  const paramsData = useParams();

  const [bookingFormDefaultValues, setbookingFormDefaultValues] =
    useState(null);
  const [showSearch, setShowSearch] = useState(true);

  useEffect(() => {
    let defaultVal = paramsData;
    setTimeout(() => {
      setShowSearch(false);
    }, 1000);
    setbookingFormDefaultValues({
      ...defaultVal,
      DepartureDate: new Date(defaultVal.DepartureDate),
      ReturnDate: new Date(defaultVal.ReturnDate),
    });
    getFlightList();
  }, []);

  const getFlightList = async (data = paramsData) => {
    try {
      let body = {
        Adults: 1, //Mandatory, no. of adult passengers
        Childrens: 0, //Mandatory, no. of child passenger(below the age of 12 years)
        Infants: 0, //Mandatory, no. of infant passengers(below the age of 2 years)
        AirlinePrefCode: data.AirlinePrefCode, //Mandatory, Possible values - Carrier Code from the GetAllCarriers api response e.g - GF, AI etc, otherwise put "Any" for all airlines
        Cabin: data.travelClass, //Mandatory, possible values - Economy, Business, First
        DepartureDate: data.DepartureDate, //Mandatory, Departure date in yyyy-mm-dd formate
        ReturnDate: data.ReturnDate, //Mandatory(In case of return Journey), Return date in yyyy-mm-dd format
        OriginLocation: data.OriginLocation, //Mandatory , Origin Air Field IATA Code from the GetAllAirFields api response
        DestinationLocation: data.DestinationLocation, //Mandatory, Destination Air Field IATA Code from the GetAllAirFields api response
        IPAddress: "1", //Mandatory, IP address of the client, otherwise put 1
        IsReturn: true, //Mandatory. true if return journey, false if oneway journey
        MemberId: "313545", //Mandatory in case member logged in, put a unique identifier
        ResultCount: "10", //Optional, no. of search results required in the response
        PointRate: 1, //Mandatory, to be provided by Giift
      };
      // let url = `https://ibeapi.giift.com/IBENEW/api/Hotel/GetHotelSearchResponse`;

      let url = "src/dummyApiData/flight/AirSearchRequest_DATA.json";
      flightApi
        .get(url)
        .then(({ data: { AirSearchRequest_DATA } }) => {
          setflightResult(AirSearchRequest_DATA.results.ItineraryDetailsList);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          // setisloading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async (value) => {
    await getFlightList(value);
    setisBookingForm(false);
    setbookingFormDefaultValues({
      ...value,
      DepartureDate: new Date(value.DepartureDate),
      ReturnDate: new Date(value.ReturnDate),
    });
  };

  return (
    <>
      {showSearch ? (
        <FlightSearchWait data={paramsData} />
      ) : (
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
                    <Link to="/Flight">Flight</Link>
                  </li>
                  <li className="breadcrumb-item active">Flight List</li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="dvFlightList dvProductList pb-5">
            <div className="container-lg">
              <div className="row">
                <FlightFilter />
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
                          Mumbai → Dubai, Economy, Wed 14 Feb | 1 Adult(s)
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
                            <i className="ms-1 fa fa-caret-up"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                    {isBookingForm && (
                      <FlightSearchForm
                        defaultValues={bookingFormDefaultValues}
                        handleSearch={handleSearch}
                      />
                    )}
                    <div className="dvProducts col-12">
                      <div className="row equal-col">
                        {flightResult &&
                          flightResult.map((item) => (
                            <div key={item.FareKey}>
                              <FlightListCard {...item} />
                            </div>
                          ))}
                        <div className="col-12 text-center">
                          <button className="btn btn-primary">
                            Show More Flights
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FlightList;
