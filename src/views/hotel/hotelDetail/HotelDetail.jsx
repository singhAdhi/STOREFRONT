import React, { useEffect, useState } from "react";
import "./hotelDetail.css";
import { makeGetRequest } from "../../../api/services";
import { useParams } from "react-router";
import ImgSlider from "../../../components/imgSlider/ImgSlider";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaGlobe, FaFax } from "react-icons/fa";
import Loading from "../../../components/other/loading/Loading";

const HotelDetail = () => {
  const [hotelId, setHotelId] = useState(null);
  const [apiData, setApiData] = useState({});
  const [hotelData, setHotelData] = useState([]);
  const [hotelRoomData, setHotelRoomData] = useState([]);
  const [otherData, setOtherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [hotelRoom, setHotelRoom] = useState({});

  const id = useParams();
  useEffect(() => {
    hotelInfo();
    hotelRoomInfo();
  }, []);

  let hotelInfo = async () => {
    const url = `src/dummyApiData/hotel/GetHotelInformation_DATA.json`;
    makeGetRequest({ url })
      .then(({ data }) => {
        console.log(data.GetHotelInformation_DATA.results.HotelInformation);
        let hotelId =
          data.GetHotelInformation_DATA.results.HotelInformation.hotelid;
          setApiData(data.GetHotelInformation_DATA.results.HotelInformation);
           setOtherData(
             data.GetHotelInformation_DATA.results.HotelInformation.otherinfo
           );
           setHotelId(apiData.hotelid);
           setHotelData(
             data.GetHotelInformation_DATA.results.HotelInformation.basicinfo
           );
           setLoading(false);
        // if (hotelId === id) {
        //   setApiData(data.GetHotelInformation_DATA.results.HotelInformation);
        //   setOtherData(
        //     data.GetHotelInformation_DATA.results.HotelInformation.otherinfo
        //   );
        //   setHotelId(apiData.hotelid);
        //   setHotelData(
        //     data.GetHotelInformation_DATA.results.HotelInformation.basicinfo
        //   );
        //   setLoading(false);
        // }
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error fetching category:", error);
      });
  };
  let hotelRoomInfo = async () => {
    const url = `src/dummyApiData/hotel/GetHotelSearchResponse_DATA.json`;
    makeGetRequest({ url })
      .then(({ data }) => {
        // console.log(
        //   data.GetHotelSearchResponse_DATA.results.SearchResponse.hotels.hotel
        // );
        setHotelRoomData(
          data.GetHotelSearchResponse_DATA.results.SearchResponse.hotels.hotel
        );

        setLoading(false);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error fetching category:", error);
      });
  };
  console.log(hotelRoomData);
  useEffect(() => {
    let Room = hotelRoomData.find((room) => room.hotelid === "1467528");
    setHotelRoom(Room);
    // console.log(Room);
  }, [hotelRoomData]);
  console.log(hotelRoom);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div class="dvMain">
          <div class="dvBreadcrumbs">
            <div class="container-lg">
              <nav>
                <ul class="breadcrumb px-0 py-3">
                  <li class="mr-3">
                    <a href="hotel-result.html">
                      <img src="images/icons/arrows/back-arrow.svg" alt="" />
                    </a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Hotel Details</li>
                </ul>
              </nav>
            </div>
          </div>

          <div class="dvHotelDetails pb-5">
            <div class="container-lg">
              <div class="row">
                <div class="dvThumbSwiperSlider col-md-6 mb-3">
                  <ImgSlider images={otherData.imageinfo} />
                </div>
                {hotelData.map((hotel, index) => {
                  const {
                    address,
                    hotelname,
                    communicationinfo,
                    hotelamenities,
                  } = hotel;

                  return (
                    <div class="dvHotelInfo col-md-6 mb-3" key={index}>
                      <div class="row mb-3">
                        <div class="col-12">
                          <h2 class="heading-xl-light">{hotelname}</h2>
                          <p>{address}</p>
                          <p>
                            <img
                              src="images/icons/other/star-fill.svg"
                              alt=""
                            />
                            <img
                              src="images/icons/other/star-fill.svg"
                              alt=""
                            />
                            <img
                              src="images/icons/other/star-fill.svg"
                              alt=""
                            />
                          </p>
                        </div>
                      </div>
                      <div class="row mb-3">
                        {communicationinfo.phone ? (
                          <div class="col-6 d-flex align-items-center">
                            <BsFillTelephoneFill />
                            <span class="ml-2">{communicationinfo.phone}</span>
                          </div>
                        ) : null}
                        {communicationinfo.email ? (
                          <div class="col-6 d-flex align-items-center">
                            <MdEmail />
                            <span class="ml-2">{communicationinfo.email}</span>
                          </div>
                        ) : null}
                        {communicationinfo.website ? (
                          <div class="col-6 d-flex align-items-center">
                            <FaGlobe />
                            <span class="ml-2">
                              {communicationinfo.website}
                            </span>
                          </div>
                        ) : null}
                        <div class="col-6 d-flex align-items-center">
                          <FaFax />
                          <span class="ml-2"> {communicationinfo.fax}</span>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-12">
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            Launch demo modal
                          </button>

                          <div
                            class="modal fade"
                            id="exampleModal"
                            tabindex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5
                                    class="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Modal title
                                  </h5>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body">
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

                          <p>
                            <span class="heading-md-medium">65,520 Points</span>
                            <span class="heading-xs-regular">
                              (for 1 night(s))
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                <div class="dvSelectRoom col-12">
                  <div class="row">
                    <div class="col-12">
                      <h2 class="heading-xs-medium p-3 bg-lightgray mb-3 rounded">
                        Select Your Room
                      </h2>
                    </div>
                  </div>
                    {hotelRoom?.roomrates?.RoomRate&&
                      hotelRoom?.roomrates?.RoomRate.map((room) => { 
                        return      <div class="row align-items-center">
                        <div class="col-12 col-md-6 mb-2 mb-md-0">
                          { <p class="heading-xs-regular">{room.RateType}</p> }
                        </div>
                        <div class="col-6 col-sm-4 col-md-2 mb-3 mb-sm-0">
                          <p class="heading-md-medium">{room.TotalBaseAmount}points</p>
                          <p class="heading-xs-light">(per room per night)</p>
                        </div>
                        <div class="col-6 col-sm-4 col-md-2 mb-3 mb-sm-0">
                          <p class="heading-md-medium">{room.TotalPoints} points</p>
                          <p class="heading-xs-light">(per room per night)</p>
                        </div>
                        <div class="col-12 col-sm-4 col-md-2 text-md-right">
                          <button class="btn btn-primary">Book Now</button>
                        </div>
                      </div>
                      })
                    }
               

                  <div class="border my-3"></div>
                  <div class="dvAboutHotel row">
                    <div class="col-12">
                      <h2 class="heading-xs-medium p-3 bg-lightgray mb-3 rounded">
                        About This Hotel
                      </h2>
                      <p class="heading-xs-light">
                        {
                          <div
                            dangerouslySetInnerHTML={{
                              __html: otherData.Description,
                            }}
                          />
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="row pt-5">
              <div class="dvSimilarListing col-12">
                <div class="row mb-3">
                  <div class="col-12 text-center">
                    <h2 class="heading-xl-light">Similar Listing</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorem atque quod officia consectetur modi tenetur!
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6 col-lg-4 mb-3">
                    <a href="productdetail.html" class="d-block shadow-sm">
                      <div class="bg-white border h-100 d-flex flex-column">
                        <div class="img-container">
                          <img
                            src="images/homepage/voucher-section/1.svg"
                            alt=""
                          />
                        </div>
                        <div class="d-flex flex-wrap bg-white py-2">
                          <h2 class="heading-sm-regular text-truncate col-12 mb-2">
                            Name
                          </h2>
                          <h2 class="heading-xxs-regular text-truncate col-6 order-1 mt-auto">
                            546.00
                          </h2>
                          <h2 class="heading-xxs-light text-truncate col-6 order-2 mt-auto text-right">
                            Physical
                          </h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-lg-4 mb-3">
                    <a href="productdetail.html" class="d-block shadow-sm">
                      <div class="bg-white border h-100 d-flex flex-column">
                        <div class="img-container">
                          <img
                            src="images/homepage/voucher-section/1.svg"
                            alt=""
                          />
                        </div>
                        <div class="d-flex flex-wrap bg-white py-2">
                          <h2 class="heading-sm-regular text-truncate col-12 mb-2">
                            Name
                          </h2>
                          <h2 class="heading-xxs-regular text-truncate col-6 order-1 mt-auto">
                            546.00
                          </h2>
                          <h2 class="heading-xxs-light text-truncate col-6 order-2 mt-auto text-right">
                            Physical
                          </h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-6 col-lg-4 mb-3">
                    <a href="productdetail.html" class="d-block shadow-sm">
                      <div class="bg-white border h-100 d-flex flex-column">
                        <div class="img-container">
                          <img
                            src="images/homepage/voucher-section/1.svg"
                            alt=""
                          />
                        </div>
                        <div class="d-flex flex-wrap bg-white py-2">
                          <h2 class="heading-sm-regular text-truncate col-12 mb-2">
                            Name
                          </h2>
                          <h2 class="heading-xxs-regular text-truncate col-6 order-1 mt-auto">
                            546.00
                          </h2>
                          <h2 class="heading-xxs-light text-truncate col-6 order-2 mt-auto text-right">
                            Physical
                          </h2>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelDetail;
