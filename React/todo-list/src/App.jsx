import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="root">
      <div className="inputTextContainer">
        <input className="input" type="text" />
        <button className="addBtn">Add</button>
      </div>
      <div className="taskContainer">
        <div className="task">
          <p>I am task 1 </p>
          <button className="addBtn deleteBtn">Delete</button>
        </div>
         <div className="task">
          <p>I am task 1 </p>
          <button className="addBtn deleteBtn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default App;
