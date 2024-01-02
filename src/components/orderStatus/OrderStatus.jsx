import React from "react";

const OrderStatus = () => {
  return (
    <div>
      <div class="container my-5">
        <div class="row">
          <div class="col-md-12 my-5">
            <div class="bg-light">
              <div class="bg-white d-flex justify-content-center align-items-center flex-column ">
                <img
                  src="/public/assets/images/gif/congrats.gif"
                  alt="Animated GIF"
                  className="mb-4"
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
