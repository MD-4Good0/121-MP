import React, { useState, useEffect } from 'react';
import './ToDo.css';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import CreateTask from "./CreateTask";
import ListTasks from "./ListTasks";

function ToDo() {
  const [tasks, setTasks] = useState([]);

  console.log("tasks", tasks);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  return (
    <div className="ToDo">
      <h1 className="todo-title">📝 To-Do List ~</h1>
      <CreateTask tasks={tasks} setTasks={setTasks} />
      <ListTasks tasks={tasks} setTasks={setTasks} /> 
    </div>   
);
}

export default ToDo;
