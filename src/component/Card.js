import React from "react";
import { Link } from "react-router-dom";
// for creacting dasboard cards
const Card = ({ data }) => {
  return (
    <Link
      to={data.title === "No. of Students" ? "/student" : "/mentor"}
      className="col-xl-6 col-md-6 mb-4 text-decoration-none"
    >
      <div className={`card border-left-${data.color} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-md font-weight-bold text-${data.color} text-uppercase mb-1`}
              >
                {data.title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {data.value}
              </div>
            </div>
            <div className="col-auto">
              <i className={`fas ${data.icon} fa-2x text-${data.color}`}></i>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;