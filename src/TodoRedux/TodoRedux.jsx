import React, { useState } from "react";
import TodoList from "./TodoList/TodoList";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../Store/Slice/TodoSlice";
import { v4 as uuidv4 } from "uuid";

const TodoRedux = () => {
  let dispatch = useDispatch();
  let [inptValue, setInptValue] = useState("");
  let [id, setId] = useState("");

  let getInptValue = (obj) => {
    setInptValue(obj?.name);
    setId(obj?.id);
  };

  let addUpdateTodo = () => {
    if (id) {
      dispatch(updateTodo({ id, name: inptValue }));
      setId("")
    } else {
      dispatch(addTodo({ id: uuidv4(), name: inptValue }));
    }
    setInptValue("")
  };

  return (
    <div className="col-md-4  m-auto">
      <h1>Todo Redux</h1>
      <div>
        <label>Todo Name:</label>
        <input
          className="form-control"
          type="text"
          value={inptValue}
          onChange={(e) => setInptValue(e.target.value)}
        />

        <button className="btn btn-primary mt-3" onClick={() => addUpdateTodo()}>
          {id ? "Update" : "Add"} Todo
        </button>
      </div>
      <hr />
      <TodoList getInptValue={getInptValue} />
    </div>
  );
};

export default TodoRedux;
