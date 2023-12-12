import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, text }) => {
  return (
    <div>
      <div class="card">
        <img
          src="https://www.kanis.rw/public/uploads/all/ENzu5k3dtJzI0tzIONyA35sxC36P1twMfo8Gt5B9.jpg"
          alt=""
          className="slider-img card-img-top w-100"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <Link className="btn btn-grey">View Detail</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
