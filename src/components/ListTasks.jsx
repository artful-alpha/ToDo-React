import ItemTask from "./ItemTask";

export default function ListTasks(props) {
  return (
    <div>
      {[...props.tasks].map((item) => {
        return <ItemTask key={item.taskName} task={item} />;
      })}
    </div>
  );
}
