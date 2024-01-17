import React, { useEffect, useState } from "react";
import "./hotelDetail.css";
import { makeGetRequest } from "../../../api/services";
import { useParams } from "react-router";
import ImgSlider from "../../../components/imgSlider/ImgSlider";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaGlobe, FaFax, FaArrowLeft } from "react-icons/fa";
import Loading from "../../../components/other/loading/Loading";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";

const HotelDetail = () => {
  const navigate = useNavigate();
  const [hotelId, setHotelId] = useState(null);
  const [apiData, setApiData] = useState({});
  const [hotelData, setHotelData] = useState([]);
  const [hotelRoomData, setHotelRoomData] = useState([]);
  const [otherData, setOtherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [hotelRoom, setHotelRoom] = useState(null);
  const { id } = useParams();
  const { RoomRates } = useSelector((store) => store.hotelReducer);

  useEffect(() => {
    hotelInfo();
    setHotelRoom(RoomRates);
  }, []);

  let hotelInfo = async () => {
    const url = `src/dummyApiData/hotel/GetHotelInformation_DATA.json`;
    makeGetRequest({ url })
      .then(({ data }) => {
        let hotelId =
          data.GetHotelInformation_DATA.results.HotelInformation.hotelid;
        if (hotelId === id) {
          setApiData(data.GetHotelInformation_DATA.results.HotelInformation);
          setOtherData(
            data.GetHotelInformation_DATA.results.HotelInformation.otherinfo
          );
          setHotelId(apiData.hotelid);
          setHotelData(
            data.GetHotelInformation_DATA.results.HotelInformation.basicinfo
          );
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="dvMain">
          <div className="dvBreadcrumbs">
            <div className="container-lg">
              <nav>
                <ul className="breadcrumb py-3 px-0 align-items-center">
                  <li className="me-2">
                    <FaArrowLeft onClick={() => navigate(-1)} />
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <p
                      style={{ cursor: "pointer" }}
                      className="d-flex text-warning"
                      onClick={() => navigate(-1)}
                    >
                      Hotel List
                    </p>
                  </li>
                  <li className="breadcrumb-item active">Hotel Details</li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="dvHotelDetails pb-5">
            <div className="container-lg">
              <div className="row">
                <div className="dvThumbSwiperSlider col-md-6 mb-3">
                  <ImgSlider images={otherData.imageinfo} />
                </div>
                {hotelData.map((hotel, index) => {
                  const {
                    address,
                    hotelname,
                    communicationinfo,
                    hotelamenities,
                    starrating,
                  } = hotel;

                  return (
                    <div className="dvHotelInfo col-md-6 mb-3" key={index}>
                      <div className="row mb-3">
                        <div className="col-12">
                          <h2 className="heading-xl-light">{hotelname}</h2>
                          <p>{address}</p>
                          {Array.from({ length: starrating }, (_, i) => (
                            <FaStar />
                          ))}
                        </div>
                      </div>
                      <div className="row mb-3">
                        {communicationinfo.phone ? (
                          <div className="col-6 d-flex align-items-center">
                            <BsFillTelephoneFill />
                            <span className="ml-2">
                              {communicationinfo.phone}
                            </span>
                          </div>
                        ) : null}
                        {communicationinfo.email ? (
                          <div className="col-6 d-flex align-items-center">
                            <MdEmail />
                            <span className="ml-2">
                              {communicationinfo.email}
                            </span>
                          </div>
                        ) : null}
                        {communicationinfo.website ? (
                          <div className="col-6 d-flex align-items-center">
                            <FaGlobe />
                            <span className="ml-2">
                              {communicationinfo.website}
                            </span>
                          </div>
                        ) : null}
                        {communicationinfo.fax ? (
                          <div className="col-6 d-flex align-items-center">
                            <FaFax />
                            <span className="ml-2">
                              {" "}
                              {communicationinfo.fax}
                            </span>
                          </div>
                        ) : null}
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Launch demo modal
                          </button>

                          <div
                            className="modal fade"
                            id="exampleModal"
                            tabIndex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Modal title
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body">
                                  {hotelamenities.Amenities[0].Amenities.hotelamenity.map(
                                    (amenity, index) => {
                                      return (
                                        <div key={index}>{amenity.Value}</div>
                                      );
                                    }
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* <p>
                            <span class="heading-md-medium">65,520 Points</span>
                            <span class="heading-xs-regular">
                              (for 1 night(s))
                            </span>
                          </p> */}
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div className="dvSelectRoom col-12">
                  <div className="row">
                    <div className="col-12">
                      <h2 className="heading-xs-medium p-3 bg-lightgray mb-3 rounded">
                        Select Your Room
                      </h2>
                    </div>
                  </div>
                  {hotelRoom &&
                      hotelRoom.map((room, i) => {
                      return (
                        <div className="row align-items-center mb-3" key={i}>
                          <div className="col-12 col-md-6 mb-2 mb-md-0">
                            <p className="heading-xs-regular">
                              {room.RateType}
                            </p>
                          </div>
                          <div className="col-6 col-sm-4 col-md-2 mb-3 mb-sm-0">
                            <p className="heading-md-medium">
                              {room.TotalBaseAmount}points
                            </p>
                            <p className="heading-xs-light">
                              (per room per night)
                            </p>
                          </div>
                          <div className="col-6 col-sm-4 col-md-2 mb-3 mb-sm-0">
                            <p className="heading-md-medium">
                              {room.TotalPoints} points
                            </p>
                            <p className="heading-xs-light">
                              (per room per night)
                            </p>
                          </div>
                          <div className="col-12 col-sm-4 col-md-2 text-md-right">
                            <Link to={`/HotelBookingDetail/${id}/${room.bookingcode}`}>
                            <button className="btn btn-primary">
                              Book Now
                              </button>
                              </Link>
                          </div>
                        </div>
                      );
                    })}

                  <div className="border my-3"></div>
                  <div className="dvAboutHotel row">
                    <div className="col-12">
                      <h2 className="heading-xs-medium p-3 bg-lightgray mb-3 rounded">
                        About This Hotel
                      </h2>
                      <div className="heading-xs-light">
                        {
                          <div
                            dangerouslySetInnerHTML={{
                              __html: otherData.Description,
                            }}
                          />
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelDetail;
