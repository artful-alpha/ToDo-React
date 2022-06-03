import React from "react";
import "./App.css";
import InputTask from "./components/InputTask";
import Task from "./components/Taks";
function App() {
  const [arrTask, setArrTask] = React.useState([]);

  const getTask = (text) => {
    setArrTask(() => [...arrTask, text]);
  };

  return (
    <div className='App'>
      <h1>ToDo in React v0.1</h1>
      <InputTask otpravka={getTask} />

      {arrTask.map((item) => (
        <Task taskName={item} />
      ))}
    </div>
  );
}

export default App;
