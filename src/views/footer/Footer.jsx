import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="dvFooter py-3 py-lg-5">
        <div className="container-lg">
          <div className="row">
            <div className="dvSocialIcons col-lg-3 text-center text-lg-start order-lg-0 mb-3 mb-lg-0">
              <a className="d-inline-block px-1" href="#" target="_blank">
                <img src="/assets/images/icons/social/facebook.svg" />
              </a>
              <a className="d-inline-block px-1" href="#" target="_blank">
                <img src="/assets/images/icons/social/linkedin.svg" />
              </a>
              <a className="d-inline-block px-1" href="#" target="_blank">
                <img src="/assets/images/icons/social/twitter.svg" />
              </a>
              <a className="d-inline-block px-1" href="#" target="_blank">
                <img src="/assets/images/icons/social/instagram.svg" />
              </a>
              <a className="d-inline-block px-1" href="#" target="_blank">
                <img src="/assets/images/icons/social/youtube.svg" />
              </a>
            </div>
            <div className="dvLinks col-lg-9 text-center text-lg-end order-lg-1 mb-3 mb-lg-0">
              <a className="d-inline-block pb-2 pb-lg-0" href="#">
                Earn
              </a>
              <a className="d-inline-block pb-2 pb-lg-0" href="#">
                Redeem
              </a>
              <a className="d-inline-block pb-2 pb-lg-0" href="#">
                About Us
              </a>
              <a className="d-inline-block pb-2 pb-lg-0" href="#">
                FAQs
              </a>
              <a className="d-inline-block pb-2 pb-lg-0" href="#">
                Terms &amp; Conditions
              </a>
              <a className="d-inline-block pb-2 pb-lg-0" href="#">
                Privacy Policy
              </a>
              <a className="d-inline-block pb-2 pb-lg-0" href="#">
                Booking Policy
              </a>
              <a className="d-inline-block pb-2 pb-lg-0" href="#">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
        <div className="border-thin my-lg-4 d-none d-lg-block"></div>
        <div className="container-lg">
          <div className="row align-items-lg-center">
            <div className="col-sm-12 col-lg-2 text-center text-lg-end order-lg-4 mb-3">
              <img
                className="img-fluid footer-logo"
                src="/assets/images/logos/footer-logo.svg"
                alt="Siddhartha Bank Logo"
              />
            </div>
            <div className="col-sm-12 col-lg-5 text-center text-lg-end order-lg-3 mb-3">
              <p>
                ©<script>document.write(new Date().getFullYear());</script>
                Siddhartha Rewards. All rights reserved.
              </p>
            </div>
            <div className="col-sm-12 col-lg-5 d-flex align-items-center justify-content-center justify-content-lg-start order-lg-2">
              <p className="me-2">Powered By:</p>
              <div>
                <img
                  className="img-fluid"
                  src="/assets/images/logos/giift-logo.svg"
                  alt="Giift Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
