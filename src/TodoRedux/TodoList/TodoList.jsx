import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../Store/Slice/TodoSlice";


const TodoList = ({getInptValue}) => {
  let todos = useSelector((state) => state.todo);
let dispatch = useDispatch();

  return (
    <div>
      <ol className="list-group list-group-numbered">
        {todos.map((e) => (
          <li key={e?.id} className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">{e?.name}</div>
            </div>
            <span>
              <button className="btn btn-success" onClick={()=>getInptValue(e)}>Update</button>{" "}
              <button className="btn btn-danger" onClick={()=>dispatch(removeTodo(e?.id))}>Delete</button>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
