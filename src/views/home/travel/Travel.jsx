import React from "react";
import TravelCard from "../../../components/travel-card/TravelCard";
import "./travel.css";

const Travel = () => {
  const travelData = [
    {
      id: 1,
      image: "public/assets/images/homepage/travel-section/2.svg",
      title: "Flights",
      text: "Looking for ways to save money on your flights? Consider joining Siddhartha Rewards Points. As a member, you'll have access to amazing discounts, deals, and savings that can make your travel experience even better.",
    },
    {
      id: 2,
      image: "public/assets/images/homepage/travel-section/3.svg",
      title: "Hotels",
      text: "Join Siddhartha Rewards Points for stress-free hotel bookings worldwide. Enjoy exclusive benefits and unbeatable savings for your business or leisure travels. Sign up today and experience exceptional accommodations that fit your budget.",
    },
    {
      id: 3,
      image: "public/assets/images/homepage/travel-section/3.svg",
      title: "Lounge",
      text: "Upgrade your airport experience with Siddhartha Rewards Points. Access exclusive lounges worldwide for VIP treatment and relaxation before your flight. Join now to enjoy unparalleled luxury at airports around the world.",
    },
  ];

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
            {travelData &&
              travelData.map((item) => {
                const { id } = item;
                return <TravelCard key={id} {...item} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Travel;
