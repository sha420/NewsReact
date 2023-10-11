import React from "react";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <h3 onClick={() => onToggle(task.id)}>{task.text}</h3>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
