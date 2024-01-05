import React, { useEffect, useState, useRef } from "react";
import "./hotelsearch.css";
import HeroSlider from "../../home/hero-slider/HeroSlider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { makeGetRequest } from "../../../api/services";

const HotelSearch = () => {
  const [showRooms, setShowRooms] = useState("1");
  const [cityName, setCityName] = useState("");
  const [apiCity, setApiCity] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [dropdownClicked, setDropdownClicked] = useState(false);

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
  }, [cityName]);

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
    setCityName(value);
    setApiCity([]);
    setDropdownClicked(true);
  };

  return (
    <div>
      <HeroSlider />
      <div className="container">
        <form class="row g-3 innerBox my-5 p-3">
          <div class="col-md-3 position-relative">
            <label for="inputEmail4" class="form-label fw-bold">
              City
            </label>
            <input
              type="text"
              class="form-control "
              placeholder="Enter city Name"
              onChange={(e) => {
                setCityName(e.target.value);
              }}
              value={cityName}
            />
            {apiCity.length > 0 && (
              <div className="position-absolute bg-white rounded-3 dropdown w-100">
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
            <label for="inputPassword4" class="form-label fw-bold">
              Check-In
            </label>
            <DatePicker
              class="form-control"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
          </div>
          <div class="col-md-3">
            <label for="inputAddress" class="form-label fw-bold">
              Check-Out
            </label>

            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
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
                    <select
                      id={`adultsRoom${index + 1}`}
                      className="form-select"
                    >
                      <option selected>Choose...</option>
                      <option>1</option>
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
                      <option selected>Choose...</option>
                      <option>...</option>
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
    </div>
  );
};

export default HotelSearch;
