import React from "react";
import "./pagenotfound.css";

const PageNotFound = () => {
  return (
    <>
      <div className="dvPageNotFound">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="alert alert-danger p-3">404 Page Not Found</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
