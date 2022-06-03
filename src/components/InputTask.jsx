import React from "react";

export default function InputTask({ otpravka }) {
  const [inputValue, setValue] = React.useState("");
  console.log(inputValue);

  const taskSend = (e) => {
    e.preventDefault();
    otpravka(e.target[0].value);
  };
  return (
    <form onSubmit={taskSend}>
      <input
        type='text'
        value={inputValue}
        onChange={(tag) => setValue(tag.target.value)}
      />
    </form>
  );
}
