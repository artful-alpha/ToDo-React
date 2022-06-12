import React from "react";
import "./App.css";
import TaskBlock from "./components/TaskBlock";

function App() {
  const Storage = JSON.parse(localStorage.getItem("tasks"));
  const [arrTasks, setTasks] = React.useState(Storage || []);
  console.log(arrTasks);
  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(arrTasks));
  }, [arrTasks]);
  const highTasks = arrTasks.filter((item) => item.priority === "high");
  const lowTasks = arrTasks.filter((item) => item.priority === "low");

  return (
    <div className='App'>
      <h1>ToDo in React v0.5</h1>
      <h2>High</h2>
      <TaskBlock
        key={"ssds"}
        list={highTasks}
        setList={(task) => setTasks([...arrTasks, task])}
        filter={(newArrTasks) => setTasks(newArrTasks)}
        type='high'
        all={arrTasks}
      />
      <TaskBlock
        key={"іі"}
        list={lowTasks}
        setList={(task) => setTasks([...arrTasks, task])}
        filter={(newArrTasks) => setTasks(newArrTasks)}
        type='low'
        all={arrTasks}
      />
    </div>
  );
}

export default App;
