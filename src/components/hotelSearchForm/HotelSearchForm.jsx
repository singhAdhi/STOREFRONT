import React, { useEffect, useState, useRef } from "react";
import "../../views/hotel/hotel-search/hotelsearch.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { hotelApi } from "../../api/services";
import { useFormik } from "formik";
import { addUrlValues } from "../../redux/hotel/index.jsx";
import {
  validationSchema,
  initialValues,
} from "../formInfo/validationSchema.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const HotelSearchForm = ({ handleSearch, defaultValues = initialValues }) => {
  const [showRooms, setShowRooms] = useState("1");
  const [cityName, setCityName] = useState("");
  const [apiCity, setApiCity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dropdownClicked, setDropdownClicked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
    setFieldValue,
  } = useFormik({
    initialValues: defaultValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleClickSearch(values);
    },
  });

  useEffect(() => {
    setShowRooms(defaultValues.NoOfRooms);
  }, [defaultValues]);

  let handleClickSearch = (value) => {
    try {
      let CheckInDate = convertDate(value.CheckInDate);
      let CheckOutDate = convertDate(value.CheckOutDate);
      let Country = value.Country;
      let NoOfRooms = value.NoOfRooms;
      let AdultPerRoom = convertRoomsValue(
        parseInt(value.NoOfRooms),
        "AdultRoom",
        value
      );
      let ChildrenPerRoom = convertRoomsValue(
        parseInt(value.NoOfRooms),
        "ChildRoom",
        value
      );
      console.log(CheckInDate, Country, CheckOutDate, NoOfRooms, AdultPerRoom);
      dispatch(
        addUrlValues({
          CheckInDate,
          Country,
          CheckOutDate,
          NoOfRooms,
          AdultPerRoom,
          ChildrenPerRoom,
        })
      );
      // const urlValues = addUrlValues({ CheckInDate, Country, CheckOutDate, NoOfRooms, AdultPerRoom,ChildrenPerRoom});
      // const urlValuesString = JSON.stringify(urlValues);
      // console.log(urlValuesString);
      // localStorage.setItem('urlValues', urlValuesString);

      navigate(
        `/Hotellist/${Country}/${CheckInDate}/${CheckOutDate}/${NoOfRooms}/${AdultPerRoom}/${ChildrenPerRoom}`
      );
      handleSearch({
        CheckInDate,
        CheckOutDate,
        NoOfRooms,
        AdultPerRoom,
        ChildrenPerRoom,
        Country,
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
  function convertRoomsValue(n, prop, value) {
    let str = "";
    Array.from({ length: n }, (_, index) => {
      let curr = index + 1;
      str += value[`${prop + curr}`] + (curr == n ? "" : ",");
    });
    return str;
  }
  let handlechange = (rooms) => {
    setShowRooms(rooms);
    setFieldValue("NoOfRooms", rooms);
  };

  useEffect(() => {
    setLoading(true);
    let timer = setTimeout(() => {
      if (!dropdownClicked) {
        cityNameApiCall();
      }
      setDropdownClicked(false);
    }, 500);

    document.addEventListener("click", handleDocumentClick);

    return () => {
      clearInterval(timer);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [values.Country]);

  let cityNameApiCall = async () => {
    const url = `src/dummyApiData/hotel/GetAllHotelCities_DATA.json`;
    hotelApi
      .get(url)
      .then(({ data }) => {
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
    handleChange({
      target: {
        name: "Country",
        value: value,
      },
    });
    setApiCity([]);
    setDropdownClicked(true);
  };

  const handleChangeRooms = (e) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };

  return (
    <div>
      <form className="row g-3 innerBox my-3 p-3" onSubmit={handleSubmit}>
        <div className="col-md-3 position-relative">
          <label className="form-label fw-bold">City</label>
          <input
            type="text"
            className="form-control "
            placeholder="Enter city Name"
            name="Country"
            onChange={(e) => {
              handleChange(e);
              setCityName(e.target.value);
            }}
            value={values.Country}
            onBlur={handleBlur}
          />
          {errors.Country && touched.Country ? (
            <p className="text-danger">{errors.Country}</p>
          ) : null}
          {apiCity.length > 0 && (
            <div className="position-absolute bg-white rounded-3 dropdown-hotel w-100">
              {loading ? (
                <div className="p-3 w-100 text-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
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
        <div className="col-md-3">
          <label className="form-label fw-bold">Check-In</label>
          <DatePicker
            className="form-control"
            placeholderText="Enter Date"
            name="CheckInDate"
            selected={values.CheckInDate}
            onChange={(date) => setFieldValue("CheckInDate", date)}
            selectsStart
            startDate={values.CheckInDate}
            endDate={values.CheckOutDate}
            onBlur={handleBlur}
          />
          {errors.CheckInDate && touched.CheckInDate ? (
            <p className="text-danger">{errors.CheckInDate}</p>
          ) : null}
        </div>
        <div className="col-md-3">
          <label className="form-label fw-bold">Check-Out</label>

          <DatePicker
            name="CheckOutDate"
            placeholderText="Enter Date"
            selected={values.CheckOutDate}
            onChange={(date) => setFieldValue("CheckOutDate", date)}
            selectsEnd
            startDate={values.CheckInDate}
            endDate={values.CheckOutDate}
            minDate={values.CheckInDate}
            onBlur={handleBlur}
          />
          {errors.CheckOutDate && touched.CheckOutDate ? (
            <p className="text-danger">{errors.CheckOutDate}</p>
          ) : null}
        </div>
        <div className="col-md-3">
          <label className="form-label fw-bold">Room(s)</label>
          <select
            value={values.NoOfRooms}
            name="NoOfRooms"
            id="NoOfRooms"
            className="form-select"
            onChange={(e) => {
              handlechange(e.target.value);
            }}
          >
            <option value={"1"}>1</option>
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
                  <label className="form-label">Adult(s) 12+ Yrs</label>
                  <select
                    value={`${values[`AdultRoom${index + 1}`]}`}
                    name={`AdultRoom${index + 1}`}
                    id={`${index}`}
                    className="form-select"
                    onChange={(e) => {
                      handleChangeRooms(e);
                    }}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Child(ren) 2 - 11 Yrs</label>
                  <select
                    value={`${values[`ChildRoom${index + 1}`]}`}
                    name={`ChildRoom${index + 1}`}
                    id={`${index}`}
                    className="form-select"
                    onChange={(e) => {
                      handleChangeRooms(e);
                    }}
                  >
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-12 my-3 text-end">
          <button type="submit" className="btn btn-primary">
            Search Hotel
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelSearchForm;
