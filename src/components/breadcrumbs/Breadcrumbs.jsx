import React, { useEffect, useState } from "react";
import "./breadcrumbs.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Breadcrumbs = () => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const location = useLocation();
  const history = useNavigate();

  // console.log(breadcrumbs);

  useEffect(() => {
    // Update breadcrumbs when the location changes
    const pathnames = location.pathname.split("/").filter((x) => x);
    // console.log(pathnames);
    const newBreadcrumbs = pathnames.map((pathname, index) => ({
      text: pathname,
      path: `/${pathnames.slice(0, index + 1).join("/")}`,
    }));
    setBreadcrumbs(newBreadcrumbs);
    // console.log(newBreadcrumbs);
  }, [location.pathname]);

  const handleBack = () => {
    // Navigate back one step in the history
    history(-1);
  };

  return (
    <>
      <div className="dvBreadcrumbs">
        <div className="container-lg">
          <nav>
            <ul className="breadcrumb py-3 px-0 align-items-center">
              <li className="me-3">
                {/* <a href="#">
                  <img
                    src="public/assets/images/icons/arrows/back-arrow.svg"
                    alt=""
                  />
                </a> */}
                <button
                  type="button"
                  className="btn p-0"
                  onClick={handleBack}
                  aria-label="Go back"
                >
                  <img src="assets/images/icons/arrows/back-arrow.svg" alt="" />
                </button>
              </li>
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              {/* <li className="breadcrumb-item active">active link</li> */}
              {breadcrumbs.map((breadcrumb, index) => {
                return (
                  <li key={index} className="breadcrumb-item active">
                    {/* checks if the current breadcrumb is the last one in the array. */}
                    {index === breadcrumbs.length - 1 ? (
                      <span>{breadcrumb.text}</span>
                    ) : (
                      <Link to={breadcrumb.path}>{breadcrumb.text}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
