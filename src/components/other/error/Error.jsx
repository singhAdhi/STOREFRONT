import React from "react";
import "./error.css";

const Error = ({ isError, isLoadingText }) => {
  return (
    <>
      <div className="dvLoading py-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="alert alert-danger">
                Error fetching {isError ? isLoadingText : null}.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
