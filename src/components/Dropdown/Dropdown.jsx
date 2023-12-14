import React from "react";

const Dropdown = ({ value }) => {
  return (
    <div>
      <div className="dropdown-menu">
        <ul>
          <li>{value}</li>
          <li>{value}</li>
          <li>{value}</li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
