import React from "react";
import "./loading.css";

const Loading = ({ isLoadingText }) => {
  return (
    <>
      <div className="dvLoading py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 text-center">
              {/* <h2 className="heading-xl">
                Please wait {isLoadingText} is Loading...
              </h2> */}
              <div className="heading-xl spinner-grow" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
