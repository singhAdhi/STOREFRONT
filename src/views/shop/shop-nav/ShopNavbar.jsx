import React, { useState } from "react";
import "./shop-nav.css";
import Dropdown from "../../../components/Dropdown/Dropdown";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const ShopNavbar = () => {
  const [val, setVal] = useState(null);
  const [arrow, setArrow] = useState(true);
  const categoryOptions = [
    { value: "electronics", label: "Electronics" },
    { value: "homeAndKitchen", label: "Home & Kitchen" },
    { value: "clothing", label: "Clothing" },
    { value: "books", label: "Books" },
  ];

  const handleMouseEnter = (value) => {
    setVal(value);
    setArrow(!arrow);
  };

  const handleMouseLeave = () => {
    setVal(null);
    setArrow(!arrow);
  };

  return (
    <>
      <div className="container d-flex justify-content-between align-content-center">
        <div className="left">
          <div className="menu  mt-4">
            <div className="d-flex gap-4">
              {categoryOptions.map((cur, i) => (
                <div
                  key={cur.value}
                  onMouseEnter={() => handleMouseEnter(cur.value)}
                  onMouseLeave={() => handleMouseLeave(cur.value)}
                >
                  <button>
                    <span className="px-2">{cur.label}</span>
                    {val === cur.value ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>

                  {val === cur.value && <Dropdown value={cur.value} />}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right d-flex align-items-center justify-content-center">
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
      </div>
    </>
  );
};

export default ShopNavbar;
