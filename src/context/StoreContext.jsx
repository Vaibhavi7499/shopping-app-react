import { createContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export let storeContext = createContext(null);

const StoreContextProvider = (props) => {
  let [inptValue, setInptValue] = useState("");
  let [todo, setTodo] = useState([]);
  let [id, setId] = useState("");

  function getInptValue(e) {
    setInptValue(e.target.value);
  }

  let addTodo = () => {
    if (id) {
      todo = todo.map((e) => {
        if (e?.id === id) {
          return {
            ...e,
            name: inptValue,
          };
        } else {
          return e;
        }
      });
      setTodo(todo);
      setInptValue("");
    } else {
      setTodo([...todo, { id: uuidv4(), name: inptValue }]);
      setInptValue("");
    }
  };

  let deleteTodo = (id) => {
    let a = todo.filter((e) => {
      return e?.id !== id;
    });

    setTodo(a);
  };

  function updateItem(obj) {
    setInptValue(obj?.name);
    setId(obj?.id);
  }

  const contextValue = {
    inptValue,
    setInptValue,
    todo,
    setTodo,
    getInptValue,
    addTodo,
    deleteTodo,
    updateItem,
  };

  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};
export default StoreContextProvider;
