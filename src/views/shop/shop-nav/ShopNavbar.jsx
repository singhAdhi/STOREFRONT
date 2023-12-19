import React, { useState } from "react";
import "./shop-nav.css";
import Dropdown from "../../../components/Dropdown/Dropdown";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const ShopNavbar = () => {
  const data = useSelector((store) => store.example.items);
  //console.log(data);
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
      <div className="bg-nav">
        <div className="container d-flex flex-md-row flex-column justify-content-between align-content-center">
          <div
            class="accordion accordion-flush d-md-none d-block"
            id="accordionFlushExample"
          >
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="left">
                  <div className="menu ">
                    <div className="d-flex gap-4">
                      {categoryOptions.map((cur, i) => (
                        <div
                          key={cur.value}
                          onMouseEnter={() => handleMouseEnter(cur.value)}
                          onMouseLeave={() => handleMouseLeave(cur.value)}
                        >
                          <button>
                            <span className="px-2">{cur.label}</span>
                            {val === cur.value ? (
                              <IoIosArrowUp />
                            ) : (
                              <IoIosArrowDown />
                            )}
                          </button>

                          {val === cur.value && <Dropdown value={cur.value} />}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="left d-md-block d-none">
            <div className="menu ">
              <div className="d-flex gap-4">
                {categoryOptions.map((cur, i) => (
                  <div
                    key={cur.value}
                    onMouseEnter={() => handleMouseEnter(cur.value)}
                    onMouseLeave={() => handleMouseLeave(cur.value)}
                  >
                    <button>
                      <span className="px-2">{cur.label}</span>
                      {val === cur.value ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
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
            <Link to="/cart">
              <p className="d-flex align-items-center justify-content-center">
                <FiShoppingCart className="cart mx-3" />

                <span className="border bg-white px-2 py-1 rounded-2">
                  {data.length}
                </span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopNavbar;
