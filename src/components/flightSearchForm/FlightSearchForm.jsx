import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import InputBox from "../inputBox/InputBox";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const FlightSearchForm = ({ defaultValues }) => {
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
        console.log(value);
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
      console.log(ReturnDate);
      if (inputValue === "Oneway") {
        navigate(
          `/FlightList/${OriginLocation}/${DestinationLocation}/${DepartureDate}/${ReturnDate}/${Adults}/${Childrens}/${Infants}/${AirlinePrefCode}/${travelClass}`
        );
      } else if (inputValue === "Return") {
        navigate(
          `/FlightList/${OriginLocation}/${DestinationLocation}/${DepartureDate}/${ReturnDate}/${Adults}/${Childrens}/${Infants}/${AirlinePrefCode}/${travelClass}`
        );
      }
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
                <div className="col-md-4">
                  <InputBox
                    title={"From"}
                    name="from"
                    value={values.OriginLocation}
                    error={touched.OriginLocation && errors.OriginLocation}
                    onBlur={handleChange}
                    onChange={(value) => setFieldValue("OriginLocation", value)}
                    url={"src/dummyApiData/flight/GetAllAirField_DATA.json"}
                  />
                </div>
                <div className="col-md-4">
                  <InputBox
                    title={"To"}
                    name="to"
                    value={values.DestinationLocation}
                    error={
                      touched.DestinationLocation && errors.DestinationLocation
                    }
                    onBlur={handleChange}
                    onChange={(value) =>
                      setFieldValue("DestinationLocation", value)
                    }
                    url={"src/dummyApiData/flight/GetAllAirField_DATA.json"}
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
                <div className="col-md-4">
                  <InputBox
                    title={"Airline Preference"}
                    url={"src/dummyApiData/flight/GetAllCarriers_DATA.json"}
                    value={values.AirlinePrefCode}
                    onChange={(value) =>
                      setFieldValue("AirlinePrefCode", value)
                    }
                  />
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
