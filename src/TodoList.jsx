import React from "react";
import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    // "Eat breakfast",
    // "take a shower",
    // "walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
    console.log(event.target.value);
  };

  const addTask = () => {
      if(newTask.trim() !== "" ) {
   setTasks(t => [...t, newTask]);
   setNewTask(" ");
  }
  
  };


  const deleteTask = (index) => {


        const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !==index);
    setTasks(updatedTasks);
  }
  ;

  const moveTaskUp = (index) => {
    if (index > 0) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index-1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
  };
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
        {tasks.map((task, index) => (
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
              onClick={() => moveTaskDown(index)}
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
