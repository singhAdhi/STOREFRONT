import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import InputBox from "../inputBox/InputBox";
import { useFormik } from "formik";
import * as Yup from "yup";

const FlightSearchForm = () => {
  const [inputValue, setInputValue] = useState("Return");
  const [showReturn, setShowReturn] = useState(true);

  const validationSchema = Yup.object().shape({
    from: Yup.string().required("From is required"),
    to: Yup.string().required("To is required"),
    departure: Yup.date().required("Departure date is required"),
    return: Yup.date().required("Return date is required"),
  });

  const initialValues = {
    from: "",
    to: "",
    departure: null,
    return: null,
    returnEnabled: true,
  };

  const handleRadioChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (inputValue === "Return") {
      setShowReturn(false);
    } else {
      setShowReturn(true);
    }
  };
  const {
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
    onSubmit: (value) => {
      console.log(value);
    },
  });
  console.log(values, errors, touched, setFieldValue);
  return (
    <>
      <div className="dvFlightSearch">
        <div className="container-lg">
          <div className="row">
            <div className="col-12">
              <form
                className="row g-3 innerBox my-3 p-3"
                onSubmit={handleSubmit}
              >
                <div className="col-12 pb-2">
                  <div className="d-flex">
                    <div className="form-check me-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value="Oneway"
                        onChange={handleRadioChange}
                        checked={inputValue === "Oneway"}
                      />
                      <label className="form-check-label fw-bold">
                        One way
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        value="Return"
                        onChange={handleRadioChange}
                        checked={inputValue === "Return"}
                      />
                      <label className="form-check-label fw-bold">Return</label>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <InputBox
                    title={"From"}
                    url={"src/dummyApiData/flight/GetAllAirField_DATA.json"}
                  />
                </div>
                <div className="col-md-4">
                  <InputBox
                    title={"To"}
                    url={"src/dummyApiData/flight/GetAllAirField_DATA.json"}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-bold">Departure</label>
                  <DatePicker
                    selected={values.departure}
                    onChange={(date) => setFieldValue("departure", date)}
                    selectsStart
                    startDate={values.departure}
                    endDate={values.return}
                    placeholderText={"Enter the Departure Date"}
                  />
                  {touched.departure && errors.departure && (
                    <div className="text-danger">{errors.departure}</div>
                  )}
                </div>
                {showReturn && (
                  <div className="col-md-4">
                    <label className="form-label fw-bold">Return</label>
                    <DatePicker
                      selected={values.return}
                      onChange={(date) => setFieldValue("return", date)}
                      selectsEnd
                      startDate={values.departure}
                      endDate={values.return}
                      minDate={values.departure}
                      placeholderText={"Enter the Return Date"}
                    />
                    {touched.return && errors.return && (
                      <div className="text-danger">{errors.return}</div>
                    )}
                  </div>
                )}
                <div className="col-md-4">
                  <label className="form-label fw-bold">Travel Class</label>
                  <select className="form-control" id="dropDownListEconomy">
                    <option value="Economy" defaultValue>
                      Economy
                    </option>
                    <option value="Business">Business</option>
                    <option value="First">First</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <InputBox
                    title={"Airline Preference"}
                    url={"src/dummyApiData/flight/GetAllCarriers_DATA.json"}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-bold">Adult(s) 12+ Yrs</label>
                  <select className="form-control" id="dropDownListEconomy">
                    <option value="1" defaultValue>
                      1
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-bold">
                    Child(ren) 2 - 11 Yrs
                  </label>
                  <select className="form-control" id="dropDownListEconomy">
                    <option value="0" defaultValue>
                      0
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-bold">
                    Infant(s) Below 2 Yrs
                  </label>
                  <select className="form-control" id="dropDownListEconomy">
                    <option value="0" defaultValue>
                      0
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightSearchForm;
