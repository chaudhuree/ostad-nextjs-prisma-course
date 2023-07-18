import React, { useState } from "react";

const ToDoList = () => {
  // State to store the list of tasks
  const [tasks, setTasks] = useState([]);

  // State to store the input value for adding tasks
  const [taskInput, setTaskInput] = useState("");

  // Function to handle changes in the input field
  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  // Function to add a new task to the list
  const addTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() !== "") {
      setTasks([...tasks, { description: taskInput, isComplete: false }]);
      setTaskInput("");
    }
  };

  // Function to toggle the completion status of a task
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks(updatedTasks);
  };

  // Function to remove a task from the list
  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo__container">
      <h1 className="todo__heading">ToDo List</h1>
      <div>
        <form onSubmit={addTask}>
          <div className="input__container">
            <div className="form">
              <input
                value={taskInput}
                className="input"
                placeholder="todos.."
                type="text"
                onChange={handleInputChange}
              />
              <span className="input-border"></span>
            </div>
            <button className="button" onClick={addTask}>
              <span className="text">Add Todo</span>
              <svg
                className="arrow"
                viewBox="0 0 448 512"
                height="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
      <ul className="todo__items">
        {tasks.map((task, index) => (
          <li className="todo__item" key={index}>
            <label className="todo__item-label">
              <label className="cl-checkbox">
                <input
                  checked={task.isComplete}
                  onChange={() => toggleComplete(index)}
                  type="checkbox"
                />
                <span></span>
              </label>

              <span
                style={{
                  textDecoration: task.isComplete ? "line-through" : "none",
                  marginLeft: "5px",
                }}
              >
                <span className="todo__text">{task.description}</span>
              </span>
            </label>
            <button className="btn" onClick={() => removeTask(index)}>
              <svg
                viewBox="0 0 15 17.5"
                height="14"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
              >
                <path
                  transform="translate(-2.5 -1.25)"
                  d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z"
                  id="Fill"
                ></path>
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
