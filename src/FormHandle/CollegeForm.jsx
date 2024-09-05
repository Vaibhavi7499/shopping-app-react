import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";

const CollegeForm = () => {
  let form = useForm();
  let { register, control, formState, handleSubmit } = form;
  let { errors } = formState;

  let formSubmit = (data) => {
    console.log("Form submitted", data);
  };

  return (
    <div className="col-md-6 m-auto">
      <form onSubmit={handleSubmit(formSubmit)}>
        {" "}
        <h1>CollegeForm</h1>
        <div className="col-md-6">
          <label>Enter Name:</label>
          <input
            type="text"
            className="form-control"
            {...register("name", {
              required: {
                value: "true",
                message: "Name is required",
              },
            })}
          />
          <small className="text-danger">{errors?.name?.message}</small>
        </div>
        <div className="col-md-6">
          <label>Enter email:</label>
          <input
            type="text"
            className="form-control"
            {...register("email", {
              required: {
                value: "true",
                message: "Name is required",
              },

              pattern: {
                value:
                  /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/,
                  message: "Invalid email",
              },
            })}
          />
          <small className="text-danger">{errors?.email?.message}</small>
        </div>
        <div className="col-md-6">
          <label>Enter City:</label>
          <input
            type="text"
            className="form-control"
            {...register("city", {
              required: {
                value: "true",
                message: "City is required",
              },
            })}
          />
          <small className="text-danger">{errors?.city?.message}</small>
        </div>
        <div className="col-md-6 mt-3">
          <button className="btn btn-info" type="submit">submit</button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default CollegeForm;
