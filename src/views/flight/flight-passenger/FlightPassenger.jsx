import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

const initialValues = {
  FirstName: "",
  LastName: "",
  DateOfBirth: "",
  PassportNumber: "",
  EmailID: "",
  PassportIssuePlace: "",
  PassportIssueDate: "",
  PassportExpiryDate: "",
};
const validationSchema = Yup.object().shape({
  FirstName: Yup.string().required("First Name is required"),
  LastName: Yup.string().required("Last Name is required"),
  DateOfBirth: Yup.date().required("Date of Birth is required"),
  PassportNumber: Yup.string().required("Passport Number is required"),
  EmailID: Yup.string()
    .email("Invalid email format")
    .required("Email ID is required"),
  PassportIssuePlace: Yup.string().required("Passport Issue Place is required"),
  PassportIssueDate: Yup.date().required("Passport Issue Date is required"),
  PassportExpiryDate: Yup.date().required("Passport Expiry Date is required"),
});

const FlightPassenger = () => {
  const [startDate, setStartDate] = useState();
  const [startNewDate, setStartNewDate] = useState();
  const [endDate, setEndDate] = useState();
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
      // handleClickSearch(values);
      console.log(values);
    },
  });
  console.log(values);
  return (
    <div>
      <div className="container">
        {/* <div className="dvBreadcrumbs">
          <div className="container-lg">
            <nav>
              <ul className="breadcrumb py-3 px-0 align-items-center">
                <li className="me-2">
                  <FaArrowLeft onClick={() => history(-1)} />
                </li>
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/fli4">Hotel</Link>
                </li>
                <li className="breadcrumb-item active">
                  Flight passenger Detail
                </li>
              </ul>
            </nav>
          </div>
        </div> */}
        <div className="row my-5">
          <div className="col-md-8">
            <div className="bg-body-secondary order-1 order-md-0 p-4 rounded">
              <h4 className="mb-4 fw-semibold">Personal Details</h4>
              <form className="row g-3" onSubmit={handleSubmit}>
                <div class="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    Title*
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected>Mr.</option>
                    <option>Ms.</option>
                    <option>Mrs.</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <label htmlFor="FirstName" className="form-label">
                    First Name*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="FirstName"
                    value={values.FirstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.FirstName && touched.FirstName ? (
                    <p className="text-danger">{errors.FirstName}</p>
                  ) : null}
                </div>
                <div className="col-md-4">
                  <label htmlFor="LastName" className="form-label">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="LastName"
                    value={values.LastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.LastName && touched.LastName ? (
                    <p className="text-danger">{errors.LastName}</p>
                  ) : null}
                </div>
                <div className="col-md-4">
                  <label htmlFor="DateOfBirth" className="form-label">
                    Date Of Birth*
                  </label>
                  <DatePicker
                    id="DateOfBirth"
                    selected={startDate}
                    onChange={(date) => setFieldValue("DateOfBirth", date)}
                  />
                  {errors.DateOfBirth && touched.DateOfBirth ? (
                    <p className="text-danger">{errors.DateOfBirth}</p>
                  ) : null}
                </div>
                <div className="col-md-4">
                  <label htmlFor="PassportNumber" className="form-label">
                    Passport Number*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="PassportNumber"
                    value={values.PassportNumber}
                    onChange={handleChange}
                  />
                  {errors.PassportNumber && touched.PassportNumber ? (
                    <p className="text-danger">{errors.PassportNumber}</p>
                  ) : null}
                </div>
                <div className="col-md-4">
                  <label htmlFor="EmailID" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="EmailID"
                    value={values.EmailID}
                    onChange={handleChange}
                  />
                  {errors.EmailID && touched.EmailID ? (
                    <p className="text-danger">{errors.EmailID}</p>
                  ) : null}
                </div>
                <div className="col-md-4">
                  <label htmlFor="mobile" className="form-label">
                    Mobile No (without country code)*
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobile"
                    placeholder=""
                    value={values.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.mobile && touched.mobile ? (
                    <p className="text-danger">{errors.mobile}</p>
                  ) : null}
                </div>
                <div className="col-md-4">
                  <label htmlFor="PassportIssuePlace" className="form-label">
                    Passport Issue Place*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="PassportIssuePlace"
                    value={values.PassportIssuePlace}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.PassportIssuePlace && touched.PassportIssuePlace ? (
                    <p className="text-danger">{errors.PassportIssuePlace}</p>
                  ) : null}
                </div>
                <div className="col-md-4">
                  <label htmlFor="PassportIssueDate" className="form-label">
                    Passport Issue Date*
                  </label>
                  <DatePicker
                    id="PassportIssueDate"
                    selected={startNewDate}
                    onChange={(date) => setStartNewDate(date)}
                    selectsStart
                    startDate={startNewDate}
                    endDate={endDate}
                  />
                  {errors.PassportIssueDate && touched.PassportIssueDate ? (
                    <p className="text-danger">{errors.PassportIssueDate}</p>
                  ) : null}
                </div>
                <div className="col-md-4">
                  <label htmlFor="PassportExpiryDate" className="form-label">
                    Passport Expiry Date
                  </label>
                  <DatePicker
                    id="PassportExpiryDate"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startNewDate}
                    endDate={endDate}
                    minDate={startNewDate}
                  />
                  {errors.PassportExpiryDate && touched.PassportExpiryDate ? (
                    <p className="text-danger">{errors.PassportExpiryDate}</p>
                  ) : null}
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row bg-body-secondary rounded p-3">
              <div className="col-12">
                <div class="orderSum">
                  <div class="txt-itinerary">
                    <h3
                      data-i18n="flightpassenger-itinerary"
                      className="mb-4 fw-semibold"
                    >
                      Itinerary
                    </h3>
                  </div>
                  <div class="fDetails">
                    <strong
                      class="mb-2 txt-depart-flight"
                      data-i18n="flightpassenger-departure"
                    >
                      Departure Flight
                    </strong>

                    <div class="row mb-3 mt-3">
                      <div class="col-md-2 col-12">
                        <img
                          class="img-fluid"
                          src="https://ibe.infiplanets.com/Images/AirlinesLogo/SG.gif"
                        />
                      </div>
                      <div class="col-md-3 col-4">
                        <p>Mumbai (BOM)</p>
                        <p>20/02/2024</p>
                        <p>08:40 PM</p>
                      </div>
                      <div class="col-md-3 col-4 text-blk">
                        <i class="fa fa-clock-o"></i>2 hr 15 m
                      </div>
                      <div class="col-md-3 col-4">
                        <p>New Delhi (DEL)</p>
                        <p>20/02/2024</p>
                        <p>10:55 PM</p>
                      </div>
                    </div>

                    <strong class="mb-2">
                      <span
                        id="CP_lblarrival"
                        class="arrivalTxt"
                        data-i18n="flightpassenger-arrival"
                      >
                        Arrival Flight
                      </span>
                    </strong>

                    <div class="row mb-3 mt-3">
                      <div class="col-md-2 col-12">
                        <img
                          class="img-fluid"
                          src="https://ibe.infiplanets.com/Images/AirlinesLogo/SG.gif"
                        />
                      </div>
                      <div class="col-md-3 col-4">
                        <p>New Delhi (DEL)</p>
                        <p>21/02/2024</p>
                        <p>10:55 PM</p>
                      </div>
                      <div class="col-md-3 col-4 text-blk">
                        <i class="fa fa-clock-o"></i>2 hr 15 m
                      </div>
                      <div class="col-md-3 col-4">
                        <p>Mumbai (BOM)</p>
                        <p>22/02/2024</p>
                        <p>01:10 AM</p>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer font-weight-bold">
                    <span data-i18n="flightpassenger-total-points">
                      Total Points:{" "}
                    </span>
                    <span id="CP_lblTotalPoints">810</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightPassenger;
