import React, { useState } from "react";

const Todo = () => {
  let [inptValue, setInptValue] = useState("");
  let [todo, setTodo] = useState([]);

  function getInptValue(e){
setInptValue(e.target.value)
  }

  let addTodo = () => {
    setTodo([...todo, { name: inptValue }]);
    setInptValue("")
  };


  let deleteTodo=(name)=>{
let a = todo.filter((e)=>{
return e?.name !== name
})

setTodo(a);
  }

  function updateItem(obj){
setInptValue(obj?.name)
console.log(obj)
  }
  console.log(inptValue)

  return (
    <div className="col-md-4 m-auto">
      <h1>Todo</h1>
      <label>Todo Name:</label>
      <input
        className="form-control"
        type="text"
        value={inptValue}
        onChange={(e) =>getInptValue(e)}
      />
      <button className="btn btn-primary mt-4" onClick={addTodo}>
        Add Todo
      </button>
      <hr></hr>
      <ul>
        {todo.map((e) => (
          <li>{e?.name}{" "}&nbsp;&nbsp;&nbsp;&nbsp;<button className="btn btn-success" onClick={()=>updateItem(e)}>Update</button>{" "}<button className="btn btn-danger" onClick={()=>deleteTodo(e?.name)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
