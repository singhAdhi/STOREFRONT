import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-500 flex container mx-auto p-4">
      <div className="left">
        <img src="https://rewards.giift.cloud/images/logo.svg" alt="" />
      </div>
      <div className="right">
        <p>login</p>
      </div>
    </div>
  );
};

export default Header;
