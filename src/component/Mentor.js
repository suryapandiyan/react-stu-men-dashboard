import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import FeedMentor from "./FeedMentor";

const Mentor = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex align-items-start justify-content-between">
          <h2>Mentor List</h2>
          <Link to={"newmentor"}>
            <button className="addBtn btn btn-primary">
              Add <FaPlus />
            </button>
          </Link>
        </div>
      </div>
      <Outlet />
      <div className="mt-5">
        <FeedMentor />
      </div>
    </>
  );
};

export default Mentor;