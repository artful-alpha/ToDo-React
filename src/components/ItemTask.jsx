import React from "react";

export default function ItemTask(props) {
  return (
    <div className='task'>
      <button onClick={props.comleted}>DONE</button>
      <p>{props.name}</p>
      <button onClick={props.clickRemove}>X</button>
    </div>
  );
}
