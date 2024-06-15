import React, { useState } from 'react'; // Import React library and useState hook
import './CreateTask.css'; // Import styles for the CreateTask component
import { v4 as uuidv4 } from 'uuid'; // Import function to generate unique IDs
import Filter from '../Assets/filter.png'; // Import filter icon image

const CreateTask = ({ tasks, setTasks }) => {

  // State variable to hold the new task details
  const [task, setTask] = useState({
    id: "", // Initially empty, will be generated on submit
    name: "",
    label: "", // Optional label extracted from task name
    status: "todo", // Default status for new tasks
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate task name length
    if (task.name.length < 3|| task.name.length > 100) {
      return; // Prevent further processing if there's an error
    }

    // Process task label (if present)
    const updatedTask = parseTaskLabel(task);

    // Update tasks state and local storage with the new task
    setTasks((prev) => {
      const newList = [...prev, updatedTask]; // Create a copy and add new task
      localStorage.setItem("tasks", JSON.stringify(newList)); // Update local storage
      return newList;
    });

    // Reset task state for a new entry
    setTask({
      id: "",
      name: "",
      label: "",
      status: "todo",
    });
  };

  // Function to parse and format optional task label
  const parseTaskLabel = (task) => {
    const labelMatch = task.name.match(/#(\w+)/); // Regex to match "#label" format

    if (labelMatch) {
      const label = labelMatch[1];
      const formattedLabel = `[${label.charAt(0).toUpperCase() + label.slice(1)}]`; // Format label with capitalization
      const name = task.name.replace(`#${label}`, '').trim(); // Remove label from task name

      return { ...task, name: `${formattedLabel} ${name}`, label }; // Update task with formatted label
    }

    return task; // Return original task if no label found
  };

  // Handle sorting tasks by label (optional functionality)
  const handleSortTasks = () => {
    setTasks((prev) => {
      const sortedTasks = [...prev].sort((a, b) => a.label.localeCompare(b.label)); // Sort tasks based on label
      localStorage.setItem("tasks", JSON.stringify(sortedTasks));
      return sortedTasks;
    });
  };

  return (
    <div className="todo-fix">
      <button1 onClick={handleSortTasks}>  {/* Button for sorting tasks (optional) */}
        <img src={Filter} alt="Filter" />
      </button1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="What's up with you today?"
          value={task.name}
          onChange={(e) => setTask({ ...task, id: uuidv4(), name: e.target.value })} // Update task name on input change
        />
        <button className="todo-create">Create</button>
      </form>
    </div>
  );
};

export default CreateTask;
