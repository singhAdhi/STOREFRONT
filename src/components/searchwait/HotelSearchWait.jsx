import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./HotelSearchWait.css"
const HotelSearchWait = ({ data }) => {
  console.log(data);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
    const {Country,CheckInDate,CheckOutDate } = data;
  return (
      <div className='container d-flex justify-content-center align-items-center flex-column searchwait'>
          <div className="px-0 px-lg-3 mt-n2">
            <Link to="/">
              <img src="/assets/images/logos/siddhartha-logo.svg" alt="" />
            </Link>
          </div>
          <div className='d-flex my-3'>
              <span className='mx-2 fw-bolder fs-5'>{Country},</span>
              <span className='fw-bolder fs-5'>{CheckInDate} <span className='mx-1'> to</span></span>
              <span className='fw-bolder fs-5'>{CheckOutDate}</span>
          </div>
          <div class="text-center mt-3">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
          </div>
    </div>
  )
}

export default HotelSearchWait