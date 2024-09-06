import { createContext } from "react";
import { useState } from "react";

export let storeContext = createContext(null);

const StoreContextProvider = (props) => {
  let [inptValue, setInptValue] = useState("");
  let [todo, setTodo] = useState([]);

  function getInptValue(e) {
    setInptValue(e.target.value);
  }

  let addTodo = () => {
    setTodo([...todo, { name: inptValue }]);
    setInptValue("");
  };

  let deleteTodo = (name) => {
    let a = todo.filter((e) => {
      return e?.name !== name;
    });

    setTodo(a);
  };

  function updateItem(obj) {
    setInptValue(obj?.name);
    console.log(obj);
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
