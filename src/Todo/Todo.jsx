import React, { useContext } from "react";
import { storeContext } from "../context/StoreContext";

const Todo = () => {
  let {
    inptValue,
    todo,
    getInptValue,
    addTodo,
    deleteTodo,
    updateItem,
  } = useContext(storeContext);


  return (
    <div className="col-md-4 m-auto">
      <h1>Todo</h1>
      <label>Todo Name:</label>
      <input
        className="form-control"
        type="text"
        value={inptValue}
        onChange={(e) => getInptValue(e)}
      />
      <button className="btn btn-primary mt-4" onClick={addTodo}>
        Add Todo
      </button>
      <hr></hr>
      <ul>
        {todo.map((e) => (
          <li key={e?.id}>
            {e?.name} &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-success" onClick={() => updateItem(e)}>
              Update
            </button>{" "}
            <button
              className="btn btn-danger"
              onClick={() => deleteTodo(e?.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
