import React, { useEffect } from "react";
import FormTaskCreate from "./FormTaskCreate";
import ItemTask from "./ItemTask";

export default function TaskBlock(props) {
  const [inputValue, setInputValue] = React.useState("");
  const [arrTasks, setTasks] = React.useState([]);

  const submitForm = (e) => {
    e.preventDefault();

    if (!inputValue) return;

    const task = { id: Date.now(), taskName: inputValue, status: false };
    setTasks([task, ...arrTasks]);
    setInputValue("");
  };

  const taskDelete = (task) => {
    const refreshArr = arrTasks.filter(
      (item) => item.taskName !== task.taskName
    );
    setTasks(refreshArr);
  };

  const taskDone = (task) => {
    const newArrTasks = arrTasks.map((item) => {
      if (task.taskName === item.taskName) {
        item.status = !item.status;
      }

      return item;
    });
    setTasks(newArrTasks);
  };

  const renderTasks = arrTasks.map((task) => (
    <ItemTask
      key={task.taskName}
      name={task.taskName}
      status={task.status}
      comleted={() => taskDone(task)}
      clickRemove={() => taskDelete(task)}
    />
  ));
  return (
    <div>
      <h2>{props.type} priority tasks</h2>
      <FormTaskCreate
        type={props.type}
        onSubmit={submitForm}
        input={inputValue}
        onChangeInput={(e) => setInputValue(e.target.value)}
      />
      <div>{renderTasks}</div>
    </div>
  );
}
