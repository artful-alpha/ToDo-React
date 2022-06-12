import React from "react";
import FormTaskCreate from "./FormTaskCreate";
import ItemTask from "./ItemTask";

export default function TaskBlock(props) {
  const [inputValue, setInputValue] = React.useState("");
  console.log(props.list);
  const submitForm = (e) => {
    e.preventDefault();

    if (!inputValue) return;

    const task = {
      id: Date.now(),
      taskName: inputValue,
      status: false,
      priority: props.type,
    };
    props.setList(task);
    setInputValue("");
  };
  // item.priority !== task.priority;
  // item.taskName !== task.taskName;
  const taskDelete = (task) => {
    const refreshArr = props.all.filter((item) => {
      if (item.taskName === task.taskName) {
        if (item.priority === task.priority) {
          return false;
        }
        return true;
      }
      return true;
    });

    props.filter(refreshArr);
  };

  const taskDone = (task) => {
    const newArrTasks = props.all.map((item) => {
      if (item.taskName === task.taskName) {
        if (item.priority === task.priority) {
          item.status = !item.status;
          return item;
        }
        return item;
      }
      return item;
    });
    props.filter(newArrTasks);
  };

  return (
    <div>
      <h2>{props.type} priority tasks</h2>

      <FormTaskCreate
        key={"dsda"}
        type={props.type}
        onSubmit={submitForm}
        input={inputValue}
        onChangeInput={(e) => setInputValue(e.target.value)}
      />
      <div>
        {props.list.map((task, index) => (
          <ItemTask
            key={index}
            name={task.taskName}
            comleted={() => taskDone(task)}
            status={task.status}
            clickRemove={() => taskDelete(task)}
          />
        ))}
      </div>
    </div>
  );
}
