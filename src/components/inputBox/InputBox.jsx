import React, { useState, useEffect } from "react";
import { flightApi } from "../../api/services";

const InputBox = ({ title, url }) => {
  const [inputFrom, setInputFrom] = useState("");
  const [fromData, setfromData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [airline, setAirline] = useState(null);
  const [isFromItemClicked, setIsFromItemClicked] = useState(false);
  const [isAirlineItemClicked, setIsAirlineItemClicked] = useState(false);

  let handleChange = (e) => {
    setInputFrom(e.target.value);
    setIsFromItemClicked(false);
    setIsAirlineItemClicked(false);
  };
  useEffect(() => {
    setLoading(true);
    if (!inputFrom) return;
    let timer = setTimeout(() => {
      getFromCity();
      setLoading(false);
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, [inputFrom]);

  const getFromCity = () => {
    flightApi
      .get(url)
      .then((response) => {
        setfromData(response?.data?.GetAllAirField_DATA?.results);
        setAirline(response?.data?.GetAllCarriers_DATA?.results);
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const filteredFromData = fromData
    ? fromData
        .filter((city) =>
          city.City.toLowerCase().includes(inputFrom.toLowerCase())
        )
        .slice(0, 10)
    : [];
  const filteredAirlineData = airline
    ? airline
        .filter((carrier) =>
          carrier.CarrierName.toLowerCase().includes(inputFrom.toLowerCase())
        )
        .slice(0, 10)
    : [];

  const handleFromItemClick = (searchDetails) => {
    setInputFrom(searchDetails);
    setIsFromItemClicked(true);
  };
  const handleAirlineItemClick = (searchDetails) => {
    setInputFrom(searchDetails);
    setIsAirlineItemClicked(true);
  };
  return (
    <div>
      <label className="form-label fw-bold">{title}</label>
      <input
        type="text"
        className="form-control"
        id="from"
        placeholder="Enter City or Airport"
        value={inputFrom}
        onChange={(e) => handleChange(e)}
      />
      {inputFrom && filteredFromData.length > 0 && !isFromItemClicked && (
        <ul className="position-absolute bg-white rounded-3 dropdown-hotel w-100">
          {loading ? (
            <div className="p-3 w-100 text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {filteredFromData.map((from, i) => {
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
                    onClick={() => handleFromItemClick(SearchAirfieldDetails)}
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
      )}
      {inputFrom && filteredAirlineData.length > 0 && !isAirlineItemClicked && (
        <ul className="position-absolute bg-white rounded-3 dropdown-hotel w-100">
          {loading ? (
            <div className="p-3 w-100 text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {filteredAirlineData.map((from, i) => {
                const { CarrierName } = from;
                return (
                  <li
                    key={i}
                    className="cityName py-2 px-3"
                    onClick={() => handleAirlineItemClick(CarrierName)}
                  >
                    <div>
                      <span className="fw-bolder">{CarrierName}</span>,
                    </div>
                  </li>
                );
              })}
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default InputBox;
