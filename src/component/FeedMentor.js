import React, { useContext } from "react";
import { profile } from "../asset/index";
import { Link } from "react-router-dom";
import DataContext from "../Context/DataContext";
// creating and loading mentors list
const FeedMentor = () => {
  const { mentorLists, handleDeleteMentor } = useContext(DataContext);
  return (
    <>
      {mentorLists.map((e, i) => (
        <div key={i}>
          <div key={i} className="row">
            <div className="d-flex align-items-center flex-wrap justify-content-start row p-2 col-12">
              <div className="img col-3">
                <img
                  src={profile}
                  className="rounded-circle float-right"
                  style={{ width: "40px" }}
                  alt="..."
                />
              </div>
              <div className="px-2  col-3">{e.name}</div>
              <Link
                className="taskTime col-sm-2 col-3"
                data-set={e.id}
                to={`${e.id}`}
              >
                <button className="btn btn-warning  col-12">Edit</button>
              </Link>
              <button
                className="btn btn-danger col-md-2 col-3"
                onClick={() => handleDeleteMentor(e.id)}
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

export default FeedMentor;