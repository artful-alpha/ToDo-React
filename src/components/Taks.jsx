import React from "react";

export default function Task({ taskName }) {
  return (
    <div className='task'>
      <button>DONE</button>
      <p>{taskName}</p>
      <button>X</button>
    </div>
  );
}
