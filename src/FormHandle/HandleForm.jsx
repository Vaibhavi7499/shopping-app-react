import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";

const HandleForm = () => {
  let form = useForm({
    defaultValues: {
      userName: "",
      email: "",
      channel: "",
    },
  });

  let { register, handleSubmit, formState, control } = form;
  let { errors } = formState;

  function formSubmit(data) {
    console.log(data);
  }
  console.log(errors);

  return (
    <div className="col-md-4 m-auto">
      <form onSubmit={handleSubmit(formSubmit)}>
        <div>
          {" "}
          <label>UserName:</label>
          <input
            type="text"
            className="form-control"
            {...register("userName", {
              required: {
                value: "true",
                message: "username is required",
              },
              maxLength: {
                value: 5,
                message: "Max char length is 5",
              },
              minLength: {
                value: 2,
                message: "Min char length is 2",
              },
            })}
          />
          <small className="text-danger">{errors?.userName?.message}</small>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            className="form-control"
            {...register("email", {
              required: {
                value: "true",
                message: "email is required",
              },
              pattern: {
                value:
                  /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/,
                message: "Invalid email format",
              },
            })}
          />
          <small className="text-danger">{errors?.email?.message}</small>
        </div>
        <div>
          <label>Channel:</label>
          <input
            type="text"
            className="form-control"
            {...register("channel", {
              required: {
                value: "true",
                message: "channel is required",
              },
            })}
          />
          <small className="text-danger">{errors?.channel?.message}</small>
        </div>
        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default HandleForm;
