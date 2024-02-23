import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import InputBox from "../inputBox/InputBox";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { flightApi } from "../../api/services";

const FlightSearchForm = ({ defaultValues, handleSearch }) => {
  const [inputValue, setInputValue] = useState("Return");
  const [showReturn, setShowReturn] = useState(true);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    OriginLocation: Yup.string().required("From is required"),
    DestinationLocation: Yup.string().required("To is required"),
    DepartureDate: Yup.date().required("Departure date is required"),
    ReturnDate: Yup.date().when("inputValue", {
      is: "Return",
      then: Yup.date().required("Return date is required"),
    }),
  });
  const initialValues = {
    OriginLocation: "",
    DestinationLocation: "",
    DepartureDate: null,
    ReturnDate: null,
    travelClass: "Economy",
    AirlinePrefCode: "",
    Adults: "1",
    Childrens: "0",
    Infants: "0",
  };

  const handleRadioChange = (e) => {
    const newValue = e.target.value;

    setInputValue(newValue);

    // Use newValue instead of inputValue
    if (newValue === "Return") {
      setShowReturn(true);
      setFieldValue("ReturnDate", null);
    } else {
      setShowReturn(false);
      setFieldValue("ReturnDate", new Date());
    }
  };
  const { values, errors, touched, handleSubmit, handleChange, setFieldValue } =
    useFormik({
      initialValues: defaultValues ? defaultValues : initialValues,
      validationSchema: validationSchema,
      onSubmit: (value) => {
        handleClickSearch(value);
      },
    });
  let handleClickSearch = (value) => {
    try {
      let DepartureDate = convertDate(value.DepartureDate);
      let ReturnDate = convertDate(value.ReturnDate);
      let OriginLocation = value.OriginLocation.split(",")[0];
      let DestinationLocation = value.DestinationLocation.split(",")[0];
      let travelClass = values.travelClass;
      let AirlinePrefCode = values.AirlinePrefCode || "Any";
      let Adults = values.Adults;
      let Childrens = values.Childrens;
      let Infants = values.Infants;
      if (inputValue === "Oneway") {
        navigate(
          `/FlightList/${OriginLocation}/${DestinationLocation}/${DepartureDate}/${ReturnDate}/${Adults}/${Childrens}/${Infants}/${AirlinePrefCode}/${travelClass}/false`
        );
      } else if (inputValue === "Return") {
        navigate(
          `/FlightList/${OriginLocation}/${DestinationLocation}/${DepartureDate}/${ReturnDate}/${Adults}/${Childrens}/${Infants}/${AirlinePrefCode}/${travelClass}/true`
        );
      }
      handleSearch({
        DepartureDate,
        ReturnDate,
        OriginLocation,
        DestinationLocation,
        travelClass,
        AirlinePrefCode,
        Adults,
        Childrens,
        Infants,
      });
    } catch (error) {
      console.log(error);
    }
  };
  function convertDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const [airFieldData, setairFieldData] = useState(null);
  const [carrierData, setcarrierData] = useState(null);
  const [originData, setoriginData] = useState(null);
  const [destinationData, setdestinationData] = useState(null);
  const [airlineData, setairlineData] = useState(null);
  const [isoriginloading, setisoriginloading] = useState(false);
  const [isdestinyloading, setisdestinyloading] = useState(false);
  const [isairlineloading, setisairlineloading] = useState(false);
  const [inputTxt, setinputTxt] = useState(null);

  useEffect(() => {
    getGetAllAirField();
    getGetAllCarriers();
    const OriginLocation = document.getElementById("OriginLocation");
    const DestinationLocation = document.getElementById("DestinationLocation");
    const AirlinePrefCode = document.getElementById("AirlinePrefCode");

    document.addEventListener("click", function (event) {
      if (!OriginLocation.contains(event.target)) {
        setoriginData(null);
      } else if (!DestinationLocation.contains(event.target)) {
        setdestinationData(null);
      } else if (!AirlinePrefCode.contains(event.target)) {
        setairlineData(null);
      }
    });
  }, []);

  const getGetAllAirField = () => {
    try {
      // let url = `https://ibeuat.giift.com/api/flight/GetAllAirField`;

      let url = "src/dummyApiData/flight/GetAllAirField_DATA.json";
      flightApi
        .get(url)
        .then(({ data: { GetAllAirField_DATA } }) => {
          setairFieldData(GetAllAirField_DATA.results);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const getGetAllCarriers = () => {
    try {
      // let url = `https://ibeuat.giift.com/api/flight/GetAllCarriers`;

      let url = "src/dummyApiData/flight/GetAllCarriers_DATA.json";
      flightApi
        .get(url)
        .then(({ data: { GetAllCarriers_DATA } }) => {
          setcarrierData(GetAllCarriers_DATA.results);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      if (inputTxt) handleFilter(inputTxt);
    }, 500); // value in ms

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [inputTxt]);

  const handleDropdownChange = (e) => {
    if (!e) return;
    const { name, value } = e.target;
    setFieldValue(name, value);
    setinputTxt({ name, value });
  };
  const handleFilter = ({ name, value }) => {
    if (name == "OriginLocation") {
      setisoriginloading(true);
    } else if (name == "DestinationLocation") {
      setisdestinyloading(true);
    } else if (name == "AirlinePrefCode") {
      setisairlineloading(true);
    }

    let timeout = setTimeout(() => {
      if (name == "OriginLocation") {
        setoriginData(
          airFieldData.filter(
            (city) =>
              city.City.toLowerCase().includes(value.toLowerCase()) ||
              city.IATACode.toLowerCase().includes(value.toLowerCase())
          )
        );
        setisoriginloading(false);
      } else if (name == "DestinationLocation") {
        setdestinationData(
          airFieldData.filter((city) =>
            city.City.toLowerCase().includes(value.toLowerCase())
          )
        );
        setisdestinyloading(false);
      } else if (name == "AirlinePrefCode") {
        setairlineData(
          carrierData.filter((carrier) =>
            carrier.CarrierName.toLowerCase().includes(value.toLowerCase())
          )
        );
        setisairlineloading(false);
      }
      clearTimeout(timeout);
    }, 1000);
  };

  const handleOriginLocationClick = (SearchAirfieldDetails, IATACode) => {
    setFieldValue("OriginLocation", SearchAirfieldDetails);
    setoriginData(null);
  };
  const handleDestinationLocationClick = (CarrierName) => {
    setFieldValue("DestinationLocation", CarrierName);
    setdestinationData(null);
  };
  const handleAirlineClick = (CarrierName) => {
    setFieldValue("AirlinePrefCode", CarrierName);
    setairlineData(null);
  };

  const LocationDropdown = ({ isloading, data, handleClick }) => (
    <>
      <ul className="position-absolute bg-white rounded-3 dropdown-hotel w-100">
        {isloading ? (
          <div className="p-3 w-100 text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {data &&
              data.map((from, i) => {
                const {
                  City,
                  CountryName,
                  IATACode,
                  AirportName,
                  SearchAirfieldDetails,
                } = from;
                return (
                  <li
                    key={i}
                    className="cityName py-2 px-3"
                    onClick={() => handleClick(SearchAirfieldDetails, IATACode)}
                  >
                    <div>
                      <span className="fw-bolder">{City}</span>,
                      <span className="text-uppercase fw-bolder">
                        {CountryName}
                      </span>
                    </div>
                    <div>
                      <span>{AirportName}</span>
                      <span>({IATACode})</span>
                    </div>
                  </li>
                );
              })}
          </>
        )}
      </ul>
    </>
  );

  return (
    <>
      <div className="dvFlightSearch">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <form
                className="row g-3 innerBox my-3 p-3"
                onSubmit={handleSubmit}
              >
                <div className="col-12 pb-2">
                  <div className="d-flex">
                    <div className="form-check me-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value="Oneway"
                        onChange={handleRadioChange}
                        checked={inputValue === "Oneway"}
                      />
                      <label className="form-check-label fw-bold">
                        One way
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="Return"
                        onChange={handleRadioChange}
                        checked={inputValue === "Return"}
                      />
                      <label className="form-check-label fw-bold">Return</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4" id="OriginLocation">
                  <label className="form-label fw-bold">From</label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Enter City or Airport"
                    name="OriginLocation"
                    onChange={handleDropdownChange}
                    value={values.OriginLocation}
                  />
                  {touched.OriginLocation && errors.OriginLocation && (
                    <div className="text-danger">{errors.OriginLocation}</div>
                  )}
                  <LocationDropdown
                    isloading={isoriginloading}
                    data={originData}
                    handleClick={handleOriginLocationClick}
                  />
                </div>
                <div className="col-md-4" id="DestinationLocation">
                  <label className="form-label fw-bold">To</label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Enter City or Airport"
                    name="DestinationLocation"
                    onChange={handleDropdownChange}
                    value={values.DestinationLocation}
                  />
                  {touched.DestinationLocation &&
                    errors.DestinationLocation && (
                      <div className="text-danger">
                        {errors.DestinationLocation}
                      </div>
                    )}
                  <LocationDropdown
                    isloading={isdestinyloading}
                    data={destinationData}
                    handleClick={handleDestinationLocationClick}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-bold">Departure</label>
                  <DatePicker
                    selected={values.DepartureDate}
                    onChange={(date) => setFieldValue("DepartureDate", date)}
                    selectsStart
                    startDate={values.DepartureDate}
                    endDate={values.ReturnDate}
                    placeholderText={"Enter the Departure Date"}
                  />
                  {touched.DepartureDate && errors.DepartureDate && (
                    <div className="text-danger">{errors.DepartureDate}</div>
                  )}
                </div>
                {showReturn && (
                  <div className="col-md-4">
                    <label className="form-label fw-bold">Return</label>
                    <DatePicker
                      selected={values.ReturnDate}
                      onChange={(date) => setFieldValue("ReturnDate", date)}
                      selectsEnd
                      startDate={values.DepartureDate}
                      endDate={values.ReturnDate}
                      minDate={values.DepartureDate}
                      placeholderText={"Enter the Return Date"}
                    />
                    {touched.ReturnDate && errors.ReturnDate && (
                      <div className="text-danger">{errors.ReturnDate}</div>
                    )}
                  </div>
                )}
                <div className="col-md-4">
                  <label className="form-label fw-bold">Travel Class</label>
                  <select
                    className="form-control form-select"
                    id="dropDownListEconomy"
                    onChange={(e) =>
                      setFieldValue("travelClass", e.target.value)
                    }
                  >
                    <option value="Economy" defaultValue>
                      Economy
                    </option>
                    <option value="Business">Business</option>
                    <option value="First">First</option>
                  </select>
                </div>
                <div className="col-md-4" id="AirlinePrefCode">
                  <label className="form-label fw-bold">
                    Airline Preference
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Enter City or Airport"
                    name="AirlinePrefCode"
                    onChange={handleDropdownChange}
                    value={values.AirlinePrefCode}
                  />
                  {touched.AirlinePrefCode && errors.AirlinePrefCode && (
                    <div className="text-danger">{errors.AirlinePrefCode}</div>
                  )}
                  <ul className="position-absolute bg-white rounded-3 dropdown-hotel w-100">
                    {isairlineloading ? (
                      <div className="p-3 w-100 text-center">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      <>
                        {airlineData &&
                          airlineData.map((from, i) => {
                            const { CarrierName } = from;
                            return (
                              <li
                                key={i}
                                className="cityName py-2 px-3"
                                onClick={() => handleAirlineClick(CarrierName)}
                              >
                                <div>
                                  <span className="fw-bolder">
                                    {CarrierName}
                                  </span>
                                  ,
                                </div>
                              </li>
                            );
                          })}
                      </>
                    )}
                  </ul>
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-bold">Adult(s) 12+ Yrs</label>
                  <select
                    className="form-control form-select"
                    id="dropDownListEconomy"
                    onChange={(e) => setFieldValue("Adults", e.target.value)}
                  >
                    <option value="1" defaultValue>
                      1
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-bold">
                    Child(ren) 2 - 11 Yrs
                  </label>
                  <select
                    className="form-control form-select"
                    id="dropDownListEconomy"
                    onChange={(e) => setFieldValue("Childrens", e.target.value)}
                  >
                    <option value="0" defaultValue>
                      0
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-bold">
                    Infant(s) Below 2 Yrs
                  </label>
                  <select
                    className="form-control form-select"
                    id="dropDownListEconomy"
                    onChange={(e) => setFieldValue("Infants", e.target.value)}
                  >
                    <option value="0" defaultValue>
                      0
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="col-12 text-end">
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightSearchForm;
