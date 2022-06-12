import React from "react";
import FormTaskCreate from "./FormTaskCreate";
import ItemTask from "./ItemTask";

const high = "high";
const low = "low";
export default function TaskBlock(props) {
  const Storage = JSON.parse(
    props.type === high ? localStorage.getItem(high) : localStorage.getItem(low)
  );
  const [inputValue, setInputValue] = React.useState("");
  const [arrTasks, setTasks] = React.useState(Storage || []);

  React.useEffect(() => {
    const isHigh = props.type === high;

    if (isHigh) {
      localStorage.setItem(high, JSON.stringify(arrTasks));
    } else {
      localStorage.setItem(low, JSON.stringify(arrTasks));
    }
  }, [arrTasks]);

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
