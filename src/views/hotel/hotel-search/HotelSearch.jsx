import React, { useEffect, useState, useRef } from "react";
import "./hotelsearch.css";
import HeroSlider from "../../home/hero-slider/HeroSlider";

const HotelSearch = () => {
  const [showRooms, setShowRooms] = useState("1");

  let handlechange = (rooms) => {
    console.log(rooms);
    setShowRooms(rooms);
  };

  return (
    <div>
      <HeroSlider />
      <div className="container">
        <form class="row g-3 innerBox my-5 p-4">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label fw-bold">
              City
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label fw-bold">
              Check-In
            </label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-md-6">
            <label for="inputAddress" class="form-label fw-bold">
              Check-Out
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="col-md-6">
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
          <div className="col-md-12">
            {[...Array(Number(showRooms))].map((_, index) => (
              <div className="mb-3" key={index}>
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
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HotelSearch;
