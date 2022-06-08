import React from "react";

export default function ItemTask(props) {
  return (
    <div className={props.status ? "task done" : "task"}>
      <button onClick={props.comleted}>DONE</button>
      <p>{props.name}</p>
      <button onClick={props.clickRemove}>X</button>
    </div>
  );
}
