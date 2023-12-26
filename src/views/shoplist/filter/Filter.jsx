import React, { useEffect, useState } from "react";
import "./filter.css";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { latestValue } from "../../../redux/shop/filteredData/filteredDataSlice";

const Filter = ({ Category, onFilterChange }) => {
  const [ischecked, setIsChecked] = useState({});
  const dispatch = useDispatch();

  function handleCheckboxChange(val) {
    dispatch(latestValue(val));
    onFilterChange(val);
    setIsChecked((prevState) => ({
      ...prevState,
      [val]: !prevState[val],
    }));
  }
  console.log(ischecked);

  return (
    <>
      <div
        className="dvFilter modal fade col-lg-4 col-xl-3"
        id="dvFilterModal"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0">
            <div className="modal-header d-lg-none">
              <h5 className="modal-title" id="dvFilterModal">
                Apply Filters
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-lg-0">
              <div className="row">
                <div className="col-12">
                  <h2 className="heading-sm-regular bg-black text-white p-3 rounded-top rounded-right">
                    Total Record(s) found (5)
                  </h2>
                </div>
              </div>
              <div className="accordion" id="filterAccordion">
                {Category.map((item, i) => {
                  let { Field, Items } = item;

                  return (
                    <>
                      <div key={i} className="dvCategory accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button heading-sm-semibold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${i}`}
                            aria-expanded="true"
                            aria-controls={`collapse${i}`}
                          >
                            {Field}
                          </button>
                        </h2>
                        <div
                          id={`collapse${i}`}
                          className="accordion-collapse collapse"
                          data-bs-parent="#filterAccordion"
                        >
                          <div className="accordion-body">
                            {Items.map((subcategory, i) => {
                              let { Value } = subcategory;
                              return (
                                <div
                                  key={i}
                                  className="dvLabel d-flex justify-content-between mb-2"
                                >
                                  <label className="checkbox-container d-flex">
                                    <span className="d-inline-block input">
                                      <input
                                        type="checkbox"
                                        checked={ischecked[Value]}
                                        onClick={() =>
                                          handleCheckboxChange(Value)
                                        }
                                      />
                                      <span className="checkmark"></span>
                                    </span>
                                    <span className="d-inline-block ms-2 name">
                                      {Value}
                                    </span>
                                  </label>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="modal-footer d-lg-none">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
