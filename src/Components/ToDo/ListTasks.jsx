import React, { useEffect, useState } from 'react'; // Import React library and hooks
import './ListTasks.css'; // Import styles for the ListTasks component

import Remove from '../Assets/remove.png'; // Import remove icon image

const ListTasks = ({ tasks, setTasks }) => {
  // State variables to manage filtered task lists 
  const [todos, setTodos] = useState([]); // Uncompleted tasks
  const [complete, setComplete] = useState([]); // Completed tasks

  // Update filtered lists when tasks prop changes
  useEffect(() => {
    const filteredTodos = tasks.filter((task) => !task.completed);
    const filteredComplete = tasks.filter((task) => task.completed);
    setTodos(filteredTodos);
    setComplete(filteredComplete);
  }, [tasks]);

  const statuses = ["todo", "complete"]; // List of task statuses

  // Handle checkbox change to update task completion status
  const handleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }; // Toggle "completed" property
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="list">
      {/* Render sections for "To-Do" and "Completed" tasks */}
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todos={todos}
          complete={complete}
          handleTaskCompletion={handleTaskCompletion}
        />
      ))}
    </div>
  );
};

export default ListTasks;

const Section = ({ status, tasks, setTasks, todos, complete, handleTaskCompletion }) => {
  let text = "To-Do"; // Default section text
  let taskstoMap = todos; // Default tasks to map (based on status)
  let backgroundColor = '#008989'; // Default background color

  // Set section properties based on status
  if (status === "complete") {
    text = "Complete";
    taskstoMap = complete;
    backgroundColor = '#C63260';
  }

  return (
    <div className="task-column">
      <Header text={text} backgroundColor={backgroundColor} count={taskstoMap.length} />
      <div className="list-section">
        {taskstoMap.length > 0 && ( // Only render task list if there are tasks
          <ul className="list-tasks"> {/* Use unordered list for checkbox styling */}
            {taskstoMap.map((task) => (
              <Task
                key={task.id}
                task={task}
                tasks={tasks}
                setTasks={setTasks}
                handleTaskCompletion={handleTaskCompletion}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const Header = ({ text, backgroundColor, count }) => {
  return (
    <div className="list-header" style={{ backgroundColor }}>
      {text} <div className="list-count">{count}</div>
    </div>
  );
};

const Task = ({ task, tasks, setTasks, handleTaskCompletion }) => {
  const handleRemove = (id) => {
    const fTasks = tasks.filter((t) => t.id !== id); // Filter out task to be removed
    localStorage.setItem("tasks", JSON.stringify(fTasks)); // Update local storage
    setTasks(fTasks); // Update component state
  };

  return (
    <>
      <button className="list-task"> {/* Button container for checkbox and task name */}
        <input
          type="checkbox"
          checked={task.completed} // Set checkbox state based on "completed" property
          onChange={() => handleTaskCompletion(task.id)} // Update state on checkbox change
        />
        <p>{task.name}</p>
        <button className="list-delete" onClick={() => handleRemove(task.id)}>
          <img src={Remove} alt="delete" /> {/* Delete button with icon */}
        </button>
      </button>
    </>
  );
};
