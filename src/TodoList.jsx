import React from "react";
import { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState([
    "Eat breakfast",
    "take a shower",
    "walk the dog",
  ]);
  const [newTask, setNewTask] = useState(" ");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
    console.log(event.target.value);
  };

  const addTask = () => {};

  const deleteTask = (index) => {};

  const moveTaskUp = (index) => {};

  const moveTaskDown = (index) => {};
  return (
    <div className="to-do-list">
      <h1>To-do-list</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />

        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {task.map((task, index) => (
          <li key={index}>
            <span className="text"> {task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button
              className="move-button-up"
              onClick={() => moveTaskUp(index)}
            >
              Up
            </button>
            <button
              className="move-button-down"
              onClick={() => moveTaskUp(index)}
            >
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
