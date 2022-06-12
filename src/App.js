import React from "react";
import "./App.css";
import TaskBlock from "./components/TaskBlock";

function App() {
  const [global, setGlobal] = React.useState("");
  return (
    <div className='App'>
      <h1>ToDo in React v0.9</h1>

      <TaskBlock type='high' />
      <TaskBlock type='low' />
    </div>
  );
}

export default App;
