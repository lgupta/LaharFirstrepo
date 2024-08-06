import React from 'react';

/*
* An individual task item.
*/

const ToDoItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default ToDoItem;
