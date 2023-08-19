import React, { useContext } from "react";
import { profile } from "../asset/index";
import { Link } from "react-router-dom";
import DataContext from "../Context/DataContext";
// creating and loading students list
const Feed = () => {
  const { students, handleDelete } = useContext(DataContext);
  return (
    <>
      {students.map((e, i) => (
        <div key={i}>
          <div key={i} className="row">
            <div className="d-flex align-items-center flex-wrap justify-content-between row p-2 col-12">
              <div className="img ">
                <img
                  src={profile}
                  className="rounded-circle"
                  style={{ width: "40px" }}
                  alt="..."
                />
              </div>
              <div className="px-2 col-sm-3 ">{e.name}</div>
              <div className="taskTime px-md-1 col-1">{e.course}</div>
              <div className="taskTime px-md-1 col-2">{e.mentor}</div>
              <Link className="taskTime " data-set={e.id} to={`${e.id}`}>
                <button className="btn btn-warning mx-md-1">Edit</button>
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(e.id)}
              >
                Delete
              </button>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Feed;