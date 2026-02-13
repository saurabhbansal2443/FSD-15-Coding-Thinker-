import React from "react";
import "./index.css";
import { useState } from "react";

const App = () => {
  let defaultTask = [];
  const taskFromLocalStorage = localStorage.getItem("todolist-react");
  if (taskFromLocalStorage) {
    defaultTask = JSON.parse(taskFromLocalStorage);
  }
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState(defaultTask);
  function handleChange(e) {
    setTask(e.target.value);
  }
  function handleClick() {
    setTaskArray([...taskArray, { id: Date.now(), task }]);
    localStorage.setItem(
      "todolist-react",
      JSON.stringify([...taskArray, { id: Date.now(), task }]),
    );
    setTask("");
  }
  function handleDelete(id) {
    const filteredTask = taskArray.filter((taskObj) => taskObj.id != id);
    localStorage.setItem("todolist-react", JSON.stringify(filteredTask));
    setTaskArray(filteredTask);
  }
  return (
    <div className="root">
      {console.log(taskArray)}
      <div className="inputTextContainer">
        <input
          value={task}
          onChange={handleChange}
          className="input"
          type="text"
        />
        <button onClick={handleClick} className="addBtn">
          Add
        </button>
      </div>
      <div className="taskContainer">
        {taskArray.map((taskObj) => {
          return (
            <div key={taskObj.id} className="task">
              <p>{taskObj.task} </p>
              <button
                onClick={() => {
                  handleDelete(taskObj.id);
                }}
                className="addBtn deleteBtn"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
