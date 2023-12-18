import React from "react";
import "./filter.css";

const Filter = () => {
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
                <div className="dvCategory accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button heading-sm-semibold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Category
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#filterAccordion"
                  >
                    <div className="accordion-body">
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dvSubCategory accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button heading-sm-semibold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Sub Category
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#filterAccordion"
                  >
                    <div className="accordion-body">
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dvCountry accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button heading-sm-semibold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Country
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#filterAccordion"
                  >
                    <div className="accordion-body">
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dvTotalPoints accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button heading-sm-semibold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Total Points
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#filterAccordion"
                  >
                    <div className="accordion-body">
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dvHotelRatings accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button heading-sm-semibold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Hotel Ratings
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#filterAccordion"
                  >
                    <div className="accordion-body">
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dvHotelAmenities accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button heading-sm-semibold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      Hotel Amenities
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    data-bs-parent="#filterAccordion"
                  >
                    <div className="accordion-body">
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dvStop accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button heading-sm-semibold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      Stop
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    data-bs-parent="#filterAccordion"
                  >
                    <div className="accordion-body">
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dvPoints accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button heading-sm-semibold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      Points
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    data-bs-parent="#filterAccordion"
                  >
                    <div className="accordion-body">
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dvAirlines accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button heading-sm-semibold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseNine"
                      aria-expanded="false"
                      aria-controls="collapseNine"
                    >
                      Airlines
                    </button>
                  </h2>
                  <div
                    id="collapseNine"
                    className="accordion-collapse collapse"
                    data-bs-parent="#filterAccordion"
                  >
                    <div className="accordion-body">
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dvTotalDuration accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button heading-sm-semibold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTen"
                      aria-expanded="false"
                      aria-controls="collapseTen"
                    >
                      Total Duration
                    </button>
                  </h2>
                  <div
                    id="collapseTen"
                    className="accordion-collapse collapse"
                    data-bs-parent="#filterAccordion"
                  >
                    <div className="accordion-body">
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dvDepartureTime accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button heading-sm-semibold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEleven"
                      aria-expanded="false"
                      aria-controls="collapseEleven"
                    >
                      Departure Time
                    </button>
                  </h2>
                  <div
                    id="collapseEleven"
                    className="accordion-collapse collapse"
                    data-bs-parent="#filterAccordion"
                  >
                    <div className="accordion-body">
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dvArrivalTime accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button heading-sm-semibold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwelve"
                      aria-expanded="false"
                      aria-controls="collapseTwelve"
                    >
                      Arrival Time
                    </button>
                  </h2>
                  <div
                    id="collapseTwelve"
                    className="accordion-collapse collapse"
                    data-bs-parent="#filterAccordion"
                  >
                    <div className="accordion-body">
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" defaultChecked />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Artificial Jewellery & Accessories
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">45</span>
                      </div>
                      <div className="dvLabel d-flex justify-content-between mb-2">
                        <label className="checkbox-container d-flex">
                          <span className="d-inline-block input">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </span>
                          <span className="d-inline-block ms-2 name">
                            Handmade Dhup
                          </span>
                        </label>
                        <span className="d-inline-block ms-2 count">15</span>
                      </div>
                    </div>
                  </div>
                </div>
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
