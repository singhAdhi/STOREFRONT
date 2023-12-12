import React from "react";

const Travel = () => {
  return (
    <>
      <div className="dvTravel py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2 text-center mb-4">
              <h2 className="heading-xl mb-2">Travel The World</h2>
              <p>
                Unleash the power of your Siddhartha Rewards Points and unlock a world of travel opportunities, with
                over 10,000+ deals on flights, hotels, and more.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4 mb-4 mb-md-0">
              <a href="flight.html" className="shadow-sm border d-block h-100 bg-white">
                <div className="img-container">
                  <img src="public/assets/images/homepage/travel-section/2.svg" alt="" />
                </div>
                <div className="bg-white p-4">
                  <h2 className="heading-md-regular mb-2 d-flex align-items-center">
                    <img className="ms-n4 me-3" src="public/assets/images/icons/arrows/triangle-icon.svg" alt="" />
                    Flights
                  </h2>
                  <p>
                    Looking for ways to save money on your flights? Consider joining Siddhartha Rewards Points. As a
                    member, you'll have access to amazing discounts, deals, and savings that can make your travel
                    experience even better.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 mb-4 mb-md-0">
              <a href="shop.html" className="shadow-sm border d-block h-100 bg-white">
                <div className="img-container">
                  <img src="public/assets/images/homepage/travel-section/2.svg" alt="" />
                </div>
                <div className="bg-white p-4">
                  <h2 className="heading-md-regular mb-2 d-flex align-items-center">
                    <img className="ms-n4 me-3" src="public/assets/images/icons/arrows/triangle-icon.svg" alt="" />
                    Hotels
                  </h2>
                  <p>
                    Join Siddhartha Rewards Points for stress-free hotel bookings worldwide. Enjoy exclusive benefits
                    and unbeatable savings for your business or leisure travels. Sign up today and experience
                    exceptional accommodations that fit your budget.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-md-4 mb-4 mb-md-0">
              <a href="lounge.html" className="shadow-sm border d-block h-100 bg-white">
                <div className="img-container">
                  <img src="public/assets/images/homepage/travel-section/3.svg" alt="" />
                </div>
                <div className="bg-white p-4">
                  <h2 className="heading-md-regular mb-2 d-flex align-items-center">
                    <img className="ms-n4 me-3" src="public/assets/images/icons/arrows/triangle-icon.svg" alt="" />
                    Lounge
                  </h2>
                  <p>
                    Upgrade your airport experience with Siddhartha Rewards Points. Access exclusive lounges worldwide
                    for VIP treatment and relaxation before your flight. Join now to enjoy unparalleled luxury at
                    airports around the world.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Travel;
