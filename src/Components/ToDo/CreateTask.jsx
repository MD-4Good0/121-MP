import React, { useState } from 'react';
import './CreateTask.css';
import { v4 as uuidv4 } from 'uuid';
import Filter from '../Assets/filter.png';

const CreateTask = ({ tasks, setTasks }) => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [task, setTask] = useState({
        id: "",
        name: "",
        label: "",
        status: "todo",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.name.length < 3) {
            setErrorMessage('Task name must be at least 3 characters long');
            console.error(errorMessage);
            return; // Prevent form submission if there's an error
        }

        if (task.name.length > 100) {
            setErrorMessage('Task name must not be more than 100 characters');
            console.error(errorMessage);
            return; 
        }

        const updatedTask = parseTaskLabel(task);

        setTasks((prev) => {
            const list = [...prev, updatedTask];
            localStorage.setItem("tasks", JSON.stringify(list));
            return list;
        });

        setTask({
            id: "",
            name: "",
            label: "",
            status: "todo",
        });
    };

    const parseTaskLabel = (task) => {
        const labelMatch = task.name.match(/#(\w+)/);
        if (labelMatch) {
            const label = labelMatch[1];
            const formattedLabel = `[${label.charAt(0).toUpperCase() + label.slice(1)}]`;
            const name = task.name.replace(`#${label}`, '').trim();
            return { ...task, name: `${formattedLabel} ${name}`, label };
        }
        return task;
    };

    const handleSortTasks = () => {
        setTasks((prev) => {
            const sortedTasks = [...prev].sort((a, b) => a.label.localeCompare(b.label));
            localStorage.setItem("tasks", JSON.stringify(sortedTasks));
            return sortedTasks;
        });
    };

    return (
        <div className="todo-fix">
            <button1 onClick={handleSortTasks}>
                <img src={Filter} alt="Filter"/>
            </button1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className="todo-input" 
                    placeholder="What's up with you today?"
                    value={task.name}
                    onChange={(e) => setTask({ ...task, id: uuidv4(), name: e.target.value })}
                />
                <button className="todo-create">Create</button>
            </form>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
    );
};

export default CreateTask;
