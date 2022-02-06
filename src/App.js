// Styles
import "./scss/includes.scss"
// Img
import DesktopDark from "./assets/img/bg-desktop-dark.jpg"
// Hooks
import { useState } from "react";
// Components
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: 'eerste dag scorro',
      done: false
    },
    {
      id: 1,
      text: 'boxen',
      done: false
    }
  ])

  function addTask(textTask) {
    let taskId = 0
    if (tasks.length > 0) {
      const lastTask = tasks[tasks.length - 1]
      taskId = lastTask.id + 1
    }
    setTasks([...tasks, { id: taskId, text: textTask, done: false }])
  }

  function checkTask(taskId) {
    setTasks(tasks.map((task) => task.id === taskId ? { ...task, done: !task.done } : task))
  }

  function deleteTask(taskId) {
    const tempTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(tempTasks)
  }

  return (
    <>
      <img src={DesktopDark} alt="background-img" />
      <div className="container">
        <Header />
        <AddTask onAdd={addTask} />
        {tasks.length > 0 ? <Tasks tasks={tasks} onCheck={checkTask} onDelete={deleteTask} /> : <div className="msg">No Tasks</div>}
      </div>
    </>
  );
}

export default App;
