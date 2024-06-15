import React, { useEffect, useState } from 'react';
import './ListTasks.css';

import Remove from '../Assets/remove.png'

const ListTasks = ({ tasks, setTasks }) => {

    const [todos, setTodos] = useState([])
    const [complete, setComplete] = useState([])

    useEffect(() => {
        const filteredTodos = tasks.filter((task) => !task.completed); // Filter tasks by "completed" property
        const filteredComplete = tasks.filter((task) => task.completed);
        setTodos(filteredTodos);
        setComplete(filteredComplete);
    }, [tasks])

    const statuses = ["todo", "complete"]

    const handleTaskCompletion = (id) => {
        // Update state based on checked/unchecked checkbox
        const updatedTasks = tasks.map((task) => {
          if (task.id === id) {
            return { ...task, completed: !task.completed }; // Toggle "completed" property
          }
          return task;
        });
        setTasks(updatedTasks);
    };

    return (
        <div className = "list">
            {statuses.map((status, index) => (
                <Section 
                    key={index} 
                    status= {status} 
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

const Section = ({status, tasks, setTasks, todos, complete, handleTaskCompletion,}) => {

    let text = "To-Do";
    let taskstoMap = todos;
    let backgroundColor = '#008989';

    if(status === "complete") {
        text = "Complete"
        taskstoMap = complete
        backgroundColor = '#C63260';
    }

    return (
        <div className="task-column">
            <Header text={text} backgroundColor={backgroundColor}count={taskstoMap.length} />
            <div className="list-section"> 
                {taskstoMap.length > 0 && (
                    <ul className="list-tasks"> {/* Use an unordered list for checkbox styling */}
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

const Header = ({text, backgroundColor, count}) => {
    return (
        <div className="list-header" style={{backgroundColor}}> 
            {text} <div className='list-count'>{count}</div>
        </div>
    );
};

const Task = ({task, tasks, setTasks, handleTaskCompletion}) => {

    const handleRemove = (id) => {
        console.log(id);

        const fTasks = tasks.filter(t => t.id !== id)
        localStorage.setItem("tasks", JSON.stringify(fTasks))

        setTasks(fTasks)
    }
    
    return (
        <>
        <button className="list-task">
            <input
                type="checkbox"
                checked={task.completed} // Set initial checked state based on "completed" property
                onChange={() => handleTaskCompletion(task.id)} // Update state on checkbox change
            /> 
            <p>{task.name}</p>
            <button classname="list-delete" 
                onClick={() => handleRemove(task.id)}
            >
                <img src={Remove} alt="delete"/>
            </button>
        </button>
        </>
    );
};