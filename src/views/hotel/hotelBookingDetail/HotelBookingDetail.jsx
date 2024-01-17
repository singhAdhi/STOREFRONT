import React, {useEffect, useState,useContext} from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../../components/other/loading/Loading';
import { useFormik } from 'formik';
import * as yup from "yup";
import { makeGetRequest } from '../../../api/services';
import { useSelector } from 'react-redux';
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const initialValues = {
    FirstName: "",
    LastName: "",
    City: "",
    Country: "",
    postalcode: "",
    mobile:"",
    inputEmail:""
}
const validationSchema = yup.object({
    FirstName: yup.string().required('First Name is required'),
    LastName: yup.string().required('Last Name is required'),
    City: yup.string().required('City is required'),
    Country: yup.string().required('Country is required'),
    postalcode: yup.string().required('Postal Code is required'),
    mobile: yup.string().required('Mobile is required').matches(/^\d{10}$/, 'Mobile must be a 10-digit number'),
    inputEmail: yup.string().email('Invalid email address'),
  });

const HotelBookingDetail = () => {
  const { id, bookingcode } = useParams();
  const hoteldata=useSelector(store=>store.hotelReducer.RoomRates);
  const [hotelData, setHotelData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actualdata, setActualData] = useState(null);
   
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
  
      let hotelInfo = async () => {
        const url = `src/dummyApiData/hotel/GetHotelInformation_DATA.json`;
        makeGetRequest({ url })
          .then(({ data }) => {
            setHotelData(
              data.GetHotelInformation_DATA.results.HotelInformation.basicinfo
            );
            setLoading(false);
          })
          .catch((error) => {
            // Handle errors here
            console.error("Error fetching category:", error);
          });
      };
      useEffect(() => {
        hotelInfo();
      }, []);
      useEffect(() => {
        const bookingId = bookingcode.split("|");
        const actualdata = hoteldata.find((hotel) => { 
          return hotel.bookingcode.includes(bookingId[0]);
        });
        setActualData(actualdata);
        console.log(id, bookingId[0], hoteldata, actualdata);
      }, [bookingcode, hoteldata]);
    
    
  return (
      <div>
      <div className="container">
      <div className="dvBreadcrumbs">
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
                    <Link to="/Hotel">Hotel</Link>
                  </li>
                  <li className="breadcrumb-item active">Hotel Booking Detail</li>
                </ul>
              </nav>
            </div>
          </div>
              <div className="row my-5">
                  <div className="col-md-8">
                      <div className='bg-body-secondary order-1 order-md-0 p-4 rounded'>
                          <h4 className="mb-4 fw-semibold">Personal Details</h4>
                          <form className="row g-3" onSubmit={handleSubmit}>
                      <div class="col-md-4">
                            <label htmlFor="inputState" className="form-label">Title*</label>
                            <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                            </select>
                    </div>
                      <div class="col-md-4">
                            <label htmlFor="FirstName" className="form-label">First Name*</label>
                                  <input type="text" className="form-control" id="FirstName" value={values.FirstName} onChange={handleChange} onBlur={handleBlur} />
                                  {errors.FirstName && touched.FirstName ? (<p className="text-danger">{errors.FirstName}</p>) : null}
                          </div>
                          <div className="col-md-4">
                            <label htmlFor="LastName" className="form-label">Last Name*</label>
                                  <input type="text" className="form-control" id="LastName" value={values.LastName} onChange={handleChange} onBlur={handleBlur} />
                                  {errors.LastName && touched.LastName ? (<p className="text-danger">{errors.LastName}</p>) : null}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="City" className="form-label">City*</label>
                                  <input type="text" className="form-control" id="City" value={values.City} onChange={handleChange} onBlur={handleBlur} />
                                  {errors.City && touched.City ? (<p className="text-danger">{errors.City}</p>) : null}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="Country" className="form-label">Country*</label>
                                  <input type="text" className="form-control" id="Country" value={values.Country} onChange={handleChange} onBlur={handleBlur}/>
                                  {errors.Country && touched.Country ? (<p className="text-danger">{errors.Country}</p>) : null}
                          </div>
                          <div className="col-md-4">
                            <label htmlFor="postalcode" className="form-label">Postal Code*</label>
                                  <input type="text" className="form-control" id="postalcode" value={values.postalcode} onChange={handleChange} onBlur={handleBlur} />
                                  {errors.postalcode && touched.postalcode ? (<p className="text-danger">{errors.postalcode}</p>) : null}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="mobile" className="form-label">Mobile No (without country code)*</label>
                                  <input type="tel" className="form-control" id="mobile" placeholder="" value={values.mobile} onChange={handleChange} onBlur={handleBlur} />
                                  {errors.mobile && touched.mobile ? (<p className="text-danger">{errors.mobile}</p>) : null}
                        </div>
                        <div className="col-md-6">                
                            <label htmlFor="inputEmail" className="form-label">Email</label>
                                  <input type="email" className="form-control" id="inputEmail" value={values.inputEmail} onChange={handleChange} onBlur={handleBlur} />
                                  {errors.inputEmail && touched.inputEmail ? (<p className="text-danger">{errors.inputEmail}</p>) : null}
                        </div>
                          <div class="col-md-12">
                          <label htmlFor="Request" className="form-label">Special Request</label>
                        <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                        <label htmlFor="floatingTextarea2">Comments</label>
                        </div>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" htmlFor="gridCheck">
                                Check me out
                            </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                      </form>
                      </div>
                  </div>
                  <div className="col-md-4">   
                  <div className="row bg-body-secondary  rounded">
                <div className="col-12">
                  <div className="bg d-flex justify-content-between align-items-center rounded">
                    <h2 className="mb-4 fw-semibold">Hotel Details</h2>
                    <button type="button" className="btn btn-secondary mr-2">Edit</button>
                  </div>
                </div>
                  {loading?<Loading/>:<div className="col-12">
                  {hotelData &&hotelData.map((name,idx) => { 
                              const { hotelname,address,thumbnailimage}=name
                              return <div key={idx}>
                              <div className="bg-lightgray" >
                              <div className="row">
                              <div className="col-12">          
                             <h2 className="heading-xs-medium">{hotelname}</h2>
                            <p className="heading-xxs-light">
                        {address}
                            </p> 
                      </div>
                    </div>
                    <div className="border my-3"></div>
                    <div className="row align-items-center">
                      <div className="col-3 col-sm-2 mb-3 mb-sm-0 pr-lg-1">
                        <div className="img-container">
                          <img src={thumbnailimage} alt={thumbnailimage}
                          />
                        </div>
                      </div>
                      <div
                        className="col-6 offset-3 offset-sm-0 col-sm-3 col-lg-3 d-flex align-items-center flex-lg-column text-lg-center mb-3 mb-sm-0 px-lg-1">
                          <img src="time.png" alt="" />
                        <div className="ml-2 ml-lg-0 mt-lg-1">
                          <p className="heading-xxs-regular">Check-in</p>
                          <p className="heading-xxs-regular">{actualdata.DayRates[0].date}</p>
                        </div>
                      </div>
                      <div
                        class="col-6 col-sm-3 col-lg-3 col-xl-4 d-flex align-items-center flex-lg-column text-lg-center px-lg-1"
                      >
                        <img src="time.png" alt="" />
                        <div className="ml-2 ml-lg-0 mt-lg-1">
                          <p className="heading-xxs-regular">1 Night(s)</p>
                          <p className="heading-xxs-regular">1 Adult(s)</p>
                        </div>
                      </div>
                      <div
                        className="col-6 col-sm-3 col-lg-3 d-flex align-items-center flex-lg-column text-lg-center pl-lg-1"
                      >
                         <img src="time.png" alt="" />
                        <div className="ml-2 ml-lg-0 mt-lg-1">
                          <p className="heading-xxs-regular">Check-out</p>
                                        <p className="heading-xxs-regular">{actualdata.DayRates[1].date}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border my-3"></div>
                    <div className="row">
                      <div className="col-12 text-right">
                        <p className="heading-sm-medium">Total Points {actualdata.TotalPoints}</p>
                      </div>
                    </div>
                </div>
                </div>
                   })}
                </div> } 
                </div>
                </div>
              </div>
          </div>
    </div>
  )
}

export default HotelBookingDetail;