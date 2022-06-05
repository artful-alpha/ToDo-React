import React from "react";

export default function FormTaskCreate(props) {
  return (
    <form onSubmit={props.onSubmit}>
      form {props.type}
      <input
        type={props.type}
        onChange={props.onChangeInput}
        value={props.input}
      />
    </form>
  );
}
