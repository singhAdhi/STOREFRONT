import React, { useEffect } from "react";

const OrderStatus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 my-5">
            <div className="bg-light">
              <div className="bg-white d-flex justify-content-center align-items-center flex-column ">
                <img
                  src="/public/assets/images/gif/congrats.gif"
                  alt="Animated GIF"
                  classNameName="mb-4"
                />

                <h2>
                  Your order is placed successfully, an email confirmation will
                  be sent to your Email address.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
