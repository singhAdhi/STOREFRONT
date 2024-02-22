import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FlightPassengerDetail from "./FlightPassengerDetail";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
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
  const [startDate, setStartDate] = useState(null);
  const [startNewDate, setStartNewDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
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
      console.log(values);
    },
  });
  const { Adults, Childrens, Infants } = useParams();

  const numberOfAdults = parseInt(Adults);
  const numberOfChildren = parseInt(Childrens);
  const numberOfInfants = parseInt(Infants);
  console.log(numberOfAdults, numberOfChildren, numberOfInfants);
  const data = useSelector((state) => state.flightReducer.UrlValue);

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
                {[...Array(numberOfAdults)].map((_, index) => {
                  return (
                    <>
                      <h1>Adult {index + 1}</h1>
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
                          onChange={(date) => {
                            setStartDate(date);
                            setFieldValue("DateOfBirth", date);
                          }}
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
                        <label
                          htmlFor="PassportIssuePlace"
                          className="form-label"
                        >
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
                        {errors.PassportIssuePlace &&
                        touched.PassportIssuePlace ? (
                          <p className="text-danger">
                            {errors.PassportIssuePlace}
                          </p>
                        ) : null}
                      </div>
                      <div className="col-md-4">
                        <label
                          htmlFor="PassportIssueDate"
                          className="form-label"
                        >
                          Passport Issue Date*
                        </label>
                        <DatePicker
                          id="PassportIssueDate"
                          selected={startNewDate}
                          onChange={(date) => {
                            setStartNewDate(date);
                            setFieldValue("PassportIssueDate", date); // Set formik field value
                          }}
                          selectsStart
                          startDate={startNewDate}
                          endDate={endDate}
                        />
                        {errors.PassportIssueDate &&
                        touched.PassportIssueDate ? (
                          <p className="text-danger">
                            {errors.PassportIssueDate}
                          </p>
                        ) : null}
                      </div>
                      <div className="col-md-4">
                        <label
                          htmlFor="PassportExpiryDate"
                          className="form-label"
                        >
                          Passport Expiry Date
                        </label>
                        <DatePicker
                          id="PassportExpiryDate"
                          selected={endDate}
                          onChange={(date) => {
                            setEndDate(date);
                            setFieldValue("PassportExpiryDate", date);
                          }}
                          selectsEnd
                          startDate={startNewDate}
                          endDate={endDate}
                          minDate={startNewDate}
                        />
                        {errors.PassportExpiryDate &&
                        touched.PassportExpiryDate ? (
                          <p className="text-danger">
                            {errors.PassportExpiryDate}
                          </p>
                        ) : null}
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck"
                          >
                            Check me out
                          </label>
                        </div>
                      </div>
                      {/* <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </div> */}
                    </>
                  );
                })}
                {[...Array(numberOfChildren)].map((_, index) => {
                  return (
                    <>
                      <h1>Children {index + 1}</h1>
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
                          onChange={(date) => {
                            setStartDate(date);
                            setFieldValue("DateOfBirth", date);
                          }}
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
                        <label
                          htmlFor="PassportIssuePlace"
                          className="form-label"
                        >
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
                        {errors.PassportIssuePlace &&
                        touched.PassportIssuePlace ? (
                          <p className="text-danger">
                            {errors.PassportIssuePlace}
                          </p>
                        ) : null}
                      </div>
                      <div className="col-md-4">
                        <label
                          htmlFor="PassportIssueDate"
                          className="form-label"
                        >
                          Passport Issue Date*
                        </label>
                        <DatePicker
                          id="PassportIssueDate"
                          selected={startNewDate}
                          onChange={(date) => {
                            setStartNewDate(date);
                            setFieldValue("PassportIssueDate", date); // Set formik field value
                          }}
                          selectsStart
                          startDate={startNewDate}
                          endDate={endDate}
                        />
                        {errors.PassportIssueDate &&
                        touched.PassportIssueDate ? (
                          <p className="text-danger">
                            {errors.PassportIssueDate}
                          </p>
                        ) : null}
                      </div>
                      <div className="col-md-4">
                        <label
                          htmlFor="PassportExpiryDate"
                          className="form-label"
                        >
                          Passport Expiry Date
                        </label>
                        <DatePicker
                          id="PassportExpiryDate"
                          selected={endDate}
                          onChange={(date) => {
                            setEndDate(date);
                            setFieldValue("PassportExpiryDate", date);
                          }}
                          selectsEnd
                          startDate={startNewDate}
                          endDate={endDate}
                          minDate={startNewDate}
                        />
                        {errors.PassportExpiryDate &&
                        touched.PassportExpiryDate ? (
                          <p className="text-danger">
                            {errors.PassportExpiryDate}
                          </p>
                        ) : null}
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck"
                          >
                            Check me out
                          </label>
                        </div>
                      </div>
                      {/* <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </div> */}
                    </>
                  );
                })}
                {[...Array(numberOfInfants)].map((_, index) => {
                  return (
                    <>
                      <h1>Infant {index + 1}</h1>
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
                          onChange={(date) => {
                            setStartDate(date);
                            setFieldValue("DateOfBirth", date);
                          }}
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
                        <label
                          htmlFor="PassportIssuePlace"
                          className="form-label"
                        >
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
                        {errors.PassportIssuePlace &&
                        touched.PassportIssuePlace ? (
                          <p className="text-danger">
                            {errors.PassportIssuePlace}
                          </p>
                        ) : null}
                      </div>
                      <div className="col-md-4">
                        <label
                          htmlFor="PassportIssueDate"
                          className="form-label"
                        >
                          Passport Issue Date*
                        </label>
                        <DatePicker
                          id="PassportIssueDate"
                          selected={startNewDate}
                          onChange={(date) => {
                            setStartNewDate(date);
                            setFieldValue("PassportIssueDate", date); // Set formik field value
                          }}
                          selectsStart
                          startDate={startNewDate}
                          endDate={endDate}
                        />
                        {errors.PassportIssueDate &&
                        touched.PassportIssueDate ? (
                          <p className="text-danger">
                            {errors.PassportIssueDate}
                          </p>
                        ) : null}
                      </div>
                      <div className="col-md-4">
                        <label
                          htmlFor="PassportExpiryDate"
                          className="form-label"
                        >
                          Passport Expiry Date
                        </label>
                        <DatePicker
                          id="PassportExpiryDate"
                          selected={endDate}
                          onChange={(date) => {
                            setEndDate(date);
                            setFieldValue("PassportExpiryDate", date);
                          }}
                          selectsEnd
                          startDate={startNewDate}
                          endDate={endDate}
                          minDate={startNewDate}
                        />
                        {errors.PassportExpiryDate &&
                        touched.PassportExpiryDate ? (
                          <p className="text-danger">
                            {errors.PassportExpiryDate}
                          </p>
                        ) : null}
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="gridCheck"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="gridCheck"
                          >
                            Check me out
                          </label>
                        </div>
                      </div>
                      {/* <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </div> */}
                    </>
                  );
                })}
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
                  {data && <FlightPassengerDetail flightData={data} />}

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
