import Task from "./Task";

const Tasks = ({tasks, onCheck, onDelete}) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onCheck={onCheck} onDelete={onDelete} />
      ))}
    </div>
  )
};

export default Tasks;
