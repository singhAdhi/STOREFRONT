import React, { useEffect, useState, useRef } from "react";
import "../../views/hotel/hotel-search/hotelsearch.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { makeGetRequest } from "../../api/services";
import { useFormik } from "formik";

import {
  validationSchema,
  initialValues,
} from "../formInfo/validationSchema.jsx";

const HotelSearchForm = ({ handleSearch }) => {
  const [showRooms, setShowRooms] = useState("1");
  const [cityName, setCityName] = useState("");
  const [apiCity, setApiCity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dropdownClicked, setDropdownClicked] = useState(false);

  let {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSearch(values);
    },
  });
  let handlechange = (rooms) => {
    console.log(rooms);
    setShowRooms(rooms);
  };

  useEffect(() => {
    setLoading(true);
    let timer = setTimeout(() => {
      if (!dropdownClicked) {
        console.log("api call");
        cityNameApiCall();
      }
      setDropdownClicked(false);
    }, 500);

    document.addEventListener("click", handleDocumentClick);

    return () => {
      clearInterval(timer);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [values.city]);

  let cityNameApiCall = async () => {
    const url = `src/dummyApiData/hotel/GetAllHotelCities_DATA.json`;
    makeGetRequest({ url })
      .then(({ data }) => {
        console.log(data.GetAllHotelCities_DATA.results);
        const filteredCities = data.GetAllHotelCities_DATA.results.filter(
          (item) =>
            cityName && item.toLowerCase().includes(cityName.toLowerCase())
        );

        setApiCity(filteredCities);
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error fetching category:", error);
      });
  };

  const handleDocumentClick = (e) => {
    // Check if the clicked element is outside the dropdown
    if (!e.target.closest(".dropdown")) {
      setApiCity([]);
    }
  };

  const inputData = (value) => {
    console.log(value);
    handleChange({
      target: {
        name: "city",
        value: value,
      },
    });
    setApiCity([]);
    setDropdownClicked(true);
  };
  return (
    <div>
      <form class="row g-3 innerBox my-5 p-3" onSubmit={handleSubmit}>
        <div class="col-md-3 position-relative">
          <label for="city" class="form-label fw-bold">
            City
          </label>
          <input
            type="text"
            class="form-control "
            placeholder="Enter city Name"
            name="city"
            onChange={(e) => {
              handleChange(e);
              setCityName(e.target.value);
            }}
            value={values.city}
            onBlur={handleBlur}
          />
          {errors.city && touched.city ? (
            <p className="text-danger">{errors.city}</p>
          ) : null}
          {apiCity.length > 0 && (
            <div className="position-absolute bg-white rounded-3 dropdown-hotel w-100">
              {loading ? (
                <div className="p-3 w-100 text-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                apiCity.length > 0 && (
                  <div>
                    {apiCity.slice(0, 10).map((city) => (
                      <div
                        key={city}
                        className="cityName p-2 text-truncate"
                        onClick={() => {
                          inputData(city);
                        }}
                      >
                        {city}
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          )}
        </div>
        <div class="col-md-3">
          <label for="checkIn" class="form-label fw-bold">
            Check-In
          </label>
          <DatePicker
            class="form-control"
            placeholderText="Enter Date"
            name="checkIn"
            selected={values.checkIn}
            onChange={(date) => setFieldValue("checkIn", date)}
            selectsStart
            startDate={values.checkIn}
            endDate={values.checkOut}
            onBlur={handleBlur}
          />
          {errors.checkIn && touched.checkIn ? (
            <p className="text-danger">{errors.checkIn}</p>
          ) : null}
        </div>
        <div class="col-md-3">
          <label for="checkOut" class="form-label fw-bold">
            Check-Out
          </label>

          <DatePicker
            name="checkOut"
            placeholderText="Enter Date"
            selected={values.checkOut}
            onChange={(date) => setFieldValue("checkOut", date)}
            selectsEnd
            startDate={values.checkIn}
            endDate={values.checkOut}
            minDate={values.checkIn}
            onBlur={handleBlur}
          />
          {errors.checkOut && touched.checkOut ? (
            <p className="text-danger">{errors.checkOut}</p>
          ) : null}
        </div>
        <div class="col-md-3">
          <label for="inputAddress2" class="form-label fw-bold">
            Room(s)
          </label>
          <select
            id="inputState"
            class="form-select"
            onChange={(e) => {
              handlechange(e.target.value);
            }}
          >
            <option defaultValue="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="row">
          {[...Array(Number(showRooms))].map((_, index) => (
            <div className="mt-3 col-md-6" key={index}>
              <p className="fw-bold mb-1">Room {index + 1}</p>
              <div className="row">
                <div className="col-md-6">
                  <label
                    htmlFor={`adultsRoom${index + 1}`}
                    className="form-label"
                  >
                    Adult(s) 12+ Yrs
                  </label>
                  <select id={`adultsRoom${index + 1}`} className="form-select">
                    <option selected>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor={`childrenRoom${index + 1}`}
                    className="form-label"
                  >
                    Child(ren) 2 - 11 Yrs
                  </label>
                  <select
                    id={`childrenRoom${index + 1}`}
                    className="form-select"
                  >
                    <option selected>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div class="col-12 my-3 text-end">
          <button type="submit" class="btn btn-primary">
            Search Hotel
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelSearchForm;
