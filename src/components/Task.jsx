import { ReactComponent as Check } from "../assets/icons/icon-check.svg";
import { ReactComponent as Cross } from "../assets/icons/icon-cross.svg";

const Task = ({task, onCheck, onDelete}) => {
  return (
    <div className={`task-row ${task.done ? "task-check" : ''}`}>
      <label className={task.done ? "task-check" : ''} onClick={() => onCheck(task.id)}>
        {task.done && <Check />}
      </label>
      <span>{task.text}</span>
      <Cross className="task-cross" onClick={() => onDelete(task.id)} />
    </div>
  )
};

export default Task;
