import { useState } from "react";

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    if (!text) {
      alert('Add a task first')
      return
    }
    onAdd(text)
    setText('')
  }

  return (
      <form className="form-task" onSubmit={onSubmit}>
        <label htmlFor="label-add"></label>
        <input value={text} type="text" placeholder="Create a new task..." id="label-add" onChange={(e) => setText(e.target.value)} />
      </form>
  )
};

export default AddTask;
