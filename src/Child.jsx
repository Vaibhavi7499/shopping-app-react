import React, { memo} from "react";

const Child = (props) => {
  console.log("child called", props);

  return (
    <div>
      <hr/>
      <h1>{props?.name}</h1>
      <button onClick={() => props.getId()}>setId</button>
    </div>
  );
};

export default memo(Child);
//name=kishor
//name=vaibhavi
//name == name
