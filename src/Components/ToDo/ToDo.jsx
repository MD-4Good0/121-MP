import React, { useState, useEffect } from 'react'; // Import React library and hooks
import './ToDo.css'; // Import styles for the ToDo component

import { DndProvider } from 'react-dnd'; // Import drag-and-drop provider (potential future use)
import { HTML5Backend } from 'react-dnd-html5-backend'; // Import HTML5 backend for drag-and-drop (potential future use)

import CreateTask from "./CreateTask"; // Import CreateTask component
import ListTasks from "./ListTasks"; // Import ListTasks component

function ToDo() {
  // State variable to hold the list of tasks
  const [tasks, setTasks] = useState([]);

  // Log tasks state for debugging purposes
  console.log("tasks", tasks);

  // Side effect to retrieve tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  return (
    <div className="ToDo">
      <h1 className="todo-title"> 📝 To-Do List ~</h1> {/* Title for the To-Do List */}
      <CreateTask tasks={tasks} setTasks={setTasks} /> {/* Pass tasks and setTasks to CreateTask component */}
      <ListTasks tasks={tasks} setTasks={setTasks} /> {/* Pass tasks and setTasks to ListTasks component */}
    </div>
  );
}

export default ToDo;
