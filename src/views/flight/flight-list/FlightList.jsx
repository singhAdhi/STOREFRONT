import React, { useEffect, useState } from "react";
import "./flightlist.css";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { flightApi } from "../../../api/services";
import FlightSearchForm from "../../../components/flightSearchForm/FlightSearchForm";
import FlightListCard from "./FlightListCard";

const FlightList = () => {
  const [flightResult, setflightResult] = useState(null);
  const [isBookingForm, setisBookingForm] = useState(false);
  const paramsData = useParams();

  const [bookingFormDefaultValues, setbookingFormDefaultValues] =
    useState(null);

  useEffect(() => {
    let defaultVal = paramsData;

    setbookingFormDefaultValues({
      ...defaultVal,
      DepartureDate: new Date(defaultVal.DepartureDate),
      ReturnDate: new Date(defaultVal.ReturnDate),
    });
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
              <div class="card w-auto h-auto">
                <div class="card-header p-0">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left heading-sm-medium"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse2"
                    >
                      Stops
                    </button>
                  </h2>
                </div>
                <div
                  id="collapse2"
                  class="collapse show"
                  data-parent="#filter-accordion"
                >
                  <div class="card-body scroll-ver p-3">
                    <h2 class="heading-xs-regular mb-2">Stop</h2>

                    <div class="dvLabel d-flex justify-content-between">
                      <label class="checkbox-container d-flex">
                        <span class="d-inline-block">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="d-inline-block ml-2">0 Stop</span>
                      </label>
                      <span class="d-inline-block ml-2">45</span>
                    </div>
                    <div class="dvLabel d-flex justify-content-between">
                      <label class="checkbox-container d-flex">
                        <span class="d-inline-block">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="d-inline-block ml-2">1 Stop</span>
                      </label>
                      <span class="d-inline-block ml-2">45</span>
                    </div>
                    <div class="dvLabel d-flex justify-content-between">
                      <label class="checkbox-container d-flex">
                        <span class="d-inline-block">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="d-inline-block ml-2">2 Stop</span>
                      </label>
                      <span class="d-inline-block ml-2">45</span>
                    </div>
                    <div class="dvLabel d-flex justify-content-between">
                      <label class="checkbox-container d-flex">
                        <span class="d-inline-block">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="d-inline-block ml-2">3 Stop</span>
                      </label>
                      <span class="d-inline-block ml-2">45</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card w-auto h-auto">
                <div class="card-header p-0">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed heading-sm-medium"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapse3"
                    >
                      Airlines
                    </button>
                  </h2>
                </div>
                <div
                  id="collapse3"
                  class="collapse show"
                  data-parent="#filter-accordion"
                >
                  <div class="card-body scroll-ver p-3">
                    <h2 class="heading-xs-regular mb-2">Airlines</h2>
                    <div class="dvLabel d-flex justify-content-between">
                      <label class="checkbox-container d-flex">
                        <span class="d-inline-block">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="d-inline-block ml-2">Select All</span>
                      </label>
                      <span class="d-inline-block ml-2">45</span>
                    </div>
                    <div class="dvLabel d-flex justify-content-between">
                      <label class="checkbox-container d-flex">
                        <span class="d-inline-block">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="d-inline-block ml-2">Air India</span>
                      </label>
                      <span class="d-inline-block ml-2">45</span>
                    </div>
                    <div class="dvLabel d-flex justify-content-between">
                      <label class="checkbox-container d-flex">
                        <span class="d-inline-block">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="d-inline-block ml-2">Etihad Airways</span>
                      </label>
                      <span class="d-inline-block ml-2">45</span>
                    </div>
                    <div class="dvLabel d-flex justify-content-between">
                      <label class="checkbox-container d-flex">
                        <span class="d-inline-block">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="d-inline-block ml-2">
                          Spicejet Limited
                        </span>
                      </label>
                      <span class="d-inline-block ml-2">45</span>
                    </div>
                    <div class="dvLabel d-flex justify-content-between">
                      <label class="checkbox-container d-flex">
                        <span class="d-inline-block">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="d-inline-block ml-2">Oman Av (SAOG)</span>
                      </label>
                      <span class="d-inline-block ml-2">45</span>
                    </div>
                    <div class="dvLabel d-flex justify-content-between">
                      <label class="checkbox-container d-flex">
                        <span class="d-inline-block">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="d-inline-block ml-2">Vistara</span>
                      </label>
                      <span class="d-inline-block ml-2">45</span>
                    </div>
                    <div class="dvLabel d-flex justify-content-between">
                      <label class="checkbox-container d-flex">
                        <span class="d-inline-block">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="d-inline-block ml-2">Indigo</span>
                      </label>
                      <span class="d-inline-block ml-2">45</span>
                    </div>
                    <div class="dvLabel d-flex justify-content-between">
                      <label class="checkbox-container d-flex">
                        <span class="d-inline-block">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="d-inline-block ml-2">Fly Dubai</span>
                      </label>
                      <span class="d-inline-block ml-2">45</span>
                    </div>
                    <div class="dvLabel d-flex justify-content-between">
                      <label class="checkbox-container d-flex">
                        <span class="d-inline-block">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="d-inline-block ml-2">Emirates</span>
                      </label>
                      <span class="d-inline-block ml-2">45</span>
                    </div>
                    <div class="dvLabel d-flex justify-content-between">
                      <label class="checkbox-container d-flex">
                        <span class="d-inline-block">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="d-inline-block ml-2">Gulf Air</span>
                      </label>
                      <span class="d-inline-block ml-2">45</span>
                    </div>
                    <div class="dvLabel d-flex justify-content-between">
                      <label class="checkbox-container d-flex">
                        <span class="d-inline-block">
                          <input type="checkbox" />
                          <span class="checkmark"></span>
                        </span>
                        <span class="d-inline-block ml-2">
                          Ethiopian Airlines Corporation
                        </span>
                      </label>
                      <span class="d-inline-block ml-2">45</span>
                    </div>
                  </div>
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
                        <i className="ms-1 fa fa-caret-up"></i>
                      </span>
                    </button>
                  </div>
                </div>
                {isBookingForm && (
                  <FlightSearchForm defaultValues={bookingFormDefaultValues} />
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
  );
};

export default FlightList;
