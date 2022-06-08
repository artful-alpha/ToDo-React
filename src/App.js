import React from "react";
import "./App.css";
import TaskBlock from "./components/TaskBlock";

function App() {
  const [global, setGlobal] = React.useState("");
  return (
    <div className='App'>
      <h1>ToDo in React v0.5</h1>

      <TaskBlock type='HIGH' up={(arr) => setGlobal([global, arr])} />
      <TaskBlock type='LOW' />
    </div>
  );
}

export default App;
