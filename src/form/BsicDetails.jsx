import React, { useEffect, useState } from "react";
import AdditionalQuestion from "./AdditionalQuestion";
import EnteredDetails from "./EnteredDetails";
import Response from "./Response";
import { json, useNavigate } from "react-router-dom";

const BsicDetails = () => {
  let navigate = useNavigate();
  let [basicForm, setBasicForm] = useState({
    name: "",
    email: "",
    contactNo: "",
  });

  let navToAddQuestion = () => {
    if (
      basicForm.name === "" ||
      basicForm.email === "" ||
      basicForm.contactNo === ""
    ) {
      alert("Please enter the details....");
    } else {
      navigate("/additionalquestion");
    }
  };

  function storeBasicInfo() {
    localStorage.setItem("basicForm", JSON.stringify(basicForm));
  }

  useEffect(() => {
    storeBasicInfo();
  }, [basicForm]);

  return (
    <div className="col-md-6 m-auto">
      <div className="col-md-6">
        <h1>Basic Details</h1>
        <label>Name</label>
        <input
          className="form-control"
          type="text"
          value={basicForm.name}
          onChange={(e) => setBasicForm({ ...basicForm, name: e.target.value })}
        />
        <label>Email</label>
        <input
          className="form-control"
          type="text"
          value={basicForm.email}
          onChange={(e) =>
            setBasicForm({ ...basicForm, email: e.target.value })
          }
        />
        <label>Contact No.</label>
        <input
          className="form-control"
          type="text"
          value={basicForm.contactNo}
          onChange={(e) =>
            setBasicForm({ ...basicForm, contactNo: e.target.value })
          }
        />
        <button className="btn btn-success mt-2" onClick={navToAddQuestion}>
          Next
        </button>
      </div>
    </div>
  );
};

export default BsicDetails;
