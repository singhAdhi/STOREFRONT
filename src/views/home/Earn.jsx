import React from "react";
import EarnCard from "../../components/earn-card/EarnCard";

const Earn = () => {
  const earnData = [
    {
      id: 1,
      image: "public/assets/images/homepage/earn/bonus-points.svg",
      title: "Bonus Points",
      subTitle: "Join Siddhartha Rewards Points for an instant bonus",
      text: "Enrol in our Siddhartha Rewards Points today and instantly receive (xxx) bonus points. These points can be used to obtain exciting rewards and exclusive perks right away.",
    },
    {
      id: 2,
      image: "public/assets/images/homepage/earn/daily-spends.svg",
      title: "Daily Spends",
      subTitle: "Your everyday spending can lead to countless rewards",
      text: "Maximize your daily expenses with our Siddhartha Rewards, which lets you accumulate points on all purchases, from groceries to fuel and beyond.",
    },
    {
      id: 3,
      image: "public/assets/images/homepage/earn/international-spends.svg",
      title: "International Spends",
      subTitle: "Explore the globe and reap limitless benefits",
      text: "Siddhartha Rewards allows you to earn rewards while traveling the world. Earn points by spending on international transactions, such as flights, hotels, dining, and shopping.",
    },
  ];
  return (
    <>
      <div className="dvEarn pb-5">
        <div className="bg mb-4">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2 text-center mb-4">
                <h2 className="heading-sm-semibold text-uppercase mb-3">How to Earn?</h2>
                <h2 className="heading-xl mb-2 text-white">Get more from your banking experience</h2>
                <p>
                  Earn Siddhartha Rewards points on every transaction with the Siddhartha Bank. Enjoy significant
                  savings on your next purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mn-top">
            {earnData &&
              earnData.map((item) => {
                const { id } = item;
                return (
                  <>
                    <EarnCard key={id} {...item} />
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Earn;
