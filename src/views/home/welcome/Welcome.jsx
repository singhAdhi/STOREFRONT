import React from "react";
import WelcomeCard from "../../../components/welcome-card/WelcomeCard";
import "./welcome.css";

const Welcome = () => {
  const welcomeData = [
    {
      id: 1,
      figure: "public/assets/images/homepage/welcome-section/1.svg",
      icon: "public/assets/images/homepage/welcome-section/spend.svg",
      title: "Spend",
      text: "Swipe your Card for all your transactions from daily spending to travel and more to start earning Siddhartha Rewards Points.",
    },
    {
      id: 2,
      figure: "public/assets/images/homepage/welcome-section/2.svg",
      icon: "public/assets/images/homepage/welcome-section/earn.svg",
      title: "Earn",
      text: "You can earn Siddhartha Rewards Points with every swipe of your Siddhartha Card. Every transaction counts, the more you spend, the more you earn.",
    },
    {
      id: 3,
      figure: "public/assets/images/homepage/welcome-section/3.svg",
      icon: "public/assets/images/homepage/welcome-section/redeem.svg",
      title: "Redeem",
      text: "You can then redeem your earned Siddhartha Rewards Points for excellent options such as fine dining, shopping, or traveling.",
    },
  ];
  return (
    <>
      <div className="dvWelcome py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="heading-xl mb-2">Welcome to the World of Exciting Rewards!</h2>
              <p>
                Unlock a world of exclusive benefits, personalized offers, and exciting rewards. From earning points on
                your everyday transactions to accessing special discounts, personalized offers, and unique rewards,
                we're committed to ensuring that your loyalty is rewarded every step of the way.
              </p>
            </div>
          </div>
          <div className="row flex-nowrap flex-lg-wrap scroll-hoz mx-lg-n3">
            {welcomeData &&
              welcomeData.map((item) => {
                const { id } = item;
                return <WelcomeCard key={id} {...item} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
