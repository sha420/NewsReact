/*import React, { useState } from "react";
import "./App.css";
import Task from "./Task";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Go for a run", completed: true },
  ]);
  const addTask = (text) => {
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className="add-task">
        <input
          type="text"
          placeholder="Add a task"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value) {
              addTask(e.target.value);
              e.target.value = "";
            }
          }}
        />
      </div>
      <div className="tasks">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        ))}
      </div>
    </div>
  );
}
export default App;*/
import React from 'react';
import Ram from './Ram';

function App() {
  return (
    <div>
      <Ram />
    </div>
  );
}

export default App;

