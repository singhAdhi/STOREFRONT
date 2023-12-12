import React from "react";

const Earn = () => {
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
            <div className="col-sm-6 col-md-4">
              <div className="bg-white d-flex flex-column text-center shadow-sm h-100">
                <div className="bg-icon p-5">
                  <img src="public/assets/images/homepage/earn/bonus-points.svg" alt="" />
                </div>
                <h2 className="heading-md-bold px-3 pt-3">Bonus Points</h2>
                <h2 className="heading-sm-regular py-3 px-3">Join Siddhartha Rewards Points for an instant bonus</h2>
                <p className="px-3 pb-3 mt-auto">
                  Enrol in our Siddhartha Rewards Points today and instantly receive (xxx) bonus points. These points
                  can be used to obtain exciting rewards and exclusive perks right away.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="bg-white d-flex flex-column text-center shadow-sm h-100">
                <div className="bg-icon p-5">
                  <img src="public/assets/images/homepage/earn/daily-spends.svg" alt="" />
                </div>
                <h2 className="heading-md-bold px-3 pt-3">Daily Spends</h2>
                <h2 className="heading-sm-regular py-3 px-3">Your everyday spending can lead to countless rewards</h2>
                <p className="px-3 pb-3 mt-auto">
                  Maximize your daily expenses with our Siddhartha Rewards, which lets you accumulate points on all
                  purchases, from groceries to fuel and beyond.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="bg-white d-flex flex-column text-center shadow-sm h-100">
                <div className="bg-icon p-5">
                  <img src="public/assets/images/homepage/earn/international-spends.svg" alt="" />
                </div>
                <h2 className="heading-md-bold px-3 pt-3">International Spends</h2>
                <h2 className="heading-sm-regular py-3 px-3">Explore the globe and reap limitless benefits</h2>
                <p className="px-3 pb-3 mt-auto">
                  Siddhartha Rewards allows you to earn rewards while traveling the world. Earn points by spending on
                  international transactions, such as flights, hotels, dining, and shopping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Earn;
