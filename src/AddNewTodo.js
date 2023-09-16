import { useState } from "react";

const AddNewTodo = (props) => {
  const [newTask, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newTask === "")return;

        props.addTodo(newTask);

        setTask("");
      }
    return(
        <form onSubmit={handleSubmit} className="todo-form">
        <div className="form-row">
          <label htmlFor="task">
            New Task
          </label>
          <input value={newTask} type="text" id="task" onChange={e => setTask(e.target.value)} />
        </div>
        <button className="btn">Add</button>
      </form>
    )
} 

export default AddNewTodo;