import React, { useEffect, useState } from "react";
import "./flightlist.css";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { flightApi } from "../../../api/services";
import FlightSearchForm from "../../../components/flightSearchForm/FlightSearchForm";
import FlightListCard from "./FlightListCard";

const FlightList = () => {
  const [flightResult, setflightResult] = useState(null);
  const [isBookingForm, setisBookingForm] = useState(false);

  useEffect(() => {
    getFlightList();
  }, []);

  const getFlightList = () => {
    try {
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
            <div className="col-lg-3">
              <p className="bg-black p-3 rounded-top-2 text-white">
                Total Hotels Found:{" "}
                <span>{flightResult && flightResult.length}</span>
              </p>
              <div className="p-3">
                <p className="fw-bold">Flight Ratings</p>

                <div className="dvLabel d-flex justify-content-between">
                  <label className="checkbox-container d-flex">
                    <span className="d-inline-block">
                      <input
                        id="all"
                        value={"All"}
                        type="radio"
                        name="sort_rating"
                      />
                      <span className="checkmark"></span>
                    </span>
                    <span className="ms-2 d-inline-block ml-2">Select All</span>
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
                        <i className="fa fa-caret-up"></i>
                      </span>
                    </button>
                  </div>
                </div>
                {isBookingForm && <FlightSearchForm />}
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
  );
};

export default FlightList;
