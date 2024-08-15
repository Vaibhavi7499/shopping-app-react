import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EnteredDetails = () => {
  let navigate = useNavigate();
  let [obj, setObj] = useState({});
  let [objOne, setObjOne] = useState({});

  let navToResponse = () => {
    navigate("/response");
  };

  function getFormData() {
    setObj(JSON.parse(localStorage.getItem("basicForm")));
  }

  function getAddQuestion() {
    setObjOne(JSON.parse(localStorage.getItem("additionalquestion")));
  }

  useEffect(() => {
    getFormData();
    getAddQuestion();
  }, []);

  return (
    <div className="container-fluid qform">
      <div className="col-md-5 m-auto">
        <div className="mt-3">
          <div className="card text-left h-100">
            <div className="card-body my-3">
              <h4>Entered Details</h4>

              <p>
                <b>Name : </b> {obj?.name}
              </p>
              <p>
                <b>Email : </b> {obj?.email}
              </p>
              <p>
                <b>Contact No. : </b> {obj?.contactNo}
              </p>

              <h4>Responses</h4>

              <p>
                <b>Profession:</b> {objOne?.profession}
              </p>
              <p>
                <b>Interests:</b>
                {objOne?.interests}
              </p>
              <p>
                <b>Reference:</b> {objOne?.reference}
              </p>

              <button className="btn btn-success" onClick={navToResponse}>
                Submit
              </button>

              <center>
                <span className="badge rounded-pill disabled">1</span>
                <span className="badge rounded-pill disabled">2</span>
                <span className="badge badge-pill bg-success">
                  <b>3</b>
                </span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnteredDetails;
