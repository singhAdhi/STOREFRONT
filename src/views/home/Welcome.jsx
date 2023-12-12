import React from "react";

const Welcome = () => {
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
            <div className="col-md-4 d-flex flex-column h-100">
              <div className="d-flex align-items-center m-auto">
                <div className="no">
                  <img src="public/assets/images/homepage/welcome-section/1.svg" alt="" />
                </div>
                <div className="icon text-center mt-3">
                  <img src="public/assets/images/homepage/welcome-section/spend.svg" alt="" />
                  <p className="mt-3">Spend</p>
                </div>
              </div>
              <p className="text-center">
                Swipe your Card for all your transactions from daily spending to travel and more to start earning
                Siddhartha Rewards Points.
              </p>
            </div>
            <div className="col-md-4 d-flex flex-column h-100">
              <div className="d-flex align-items-center m-auto">
                <div className="no">
                  <img src="public/assets/images/homepage/welcome-section/2.svg" alt="" />
                </div>
                <div className="icon text-center mt-3">
                  <img src="public/assets/images/homepage/welcome-section/earn.svg" alt="" />
                  <p className="mt-3">Earn</p>
                </div>
              </div>
              <p className="text-center">
                You can earn Siddhartha Rewards Points with every swipe of your Siddhartha Card. Every transaction
                counts, the more you spend, the more you earn.
              </p>
            </div>
            <div className="col-md-4 d-flex flex-column h-100">
              <div className="d-flex align-items-center m-auto">
                <div className="no">
                  <img src="public/assets/images/homepage/welcome-section/3.svg" alt="" />
                </div>
                <div className="icon text-center mt-3">
                  <img src="public/assets/images/homepage/welcome-section/redeem.svg" alt="" />
                  <p className="mt-3">Redeem</p>
                </div>
              </div>
              <p className="text-center">
                You can then redeem your earned Siddhartha Rewards Points for excellent options such as fine dining,
                shopping, or traveling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
