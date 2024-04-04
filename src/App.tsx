import { useState } from 'react';
import './App.css';
import { tasklist } from './utilities/constants';

function App() {
    const [taskNameAdd, setTaskNameAdd] = useState('');
    const [tasks, setTasks] = useState(tasklist);

    const addtaskHandler = () => {
        setTasks([
            ...tasks,
            {
                id: new Date().getTime(),
                title: taskNameAdd,
                isCompleted: false,
            },
        ]);
    };

    return (
        <>
            <h1>Todo App</h1>
            <label htmlFor="task-input">Add task</label>
            <input
                id="task-input"
                type="text"
                value={taskNameAdd}
                onChange={(e) => setTaskNameAdd(e.target.value)}
            />
            <button id="addTaskBtn" onClick={addtaskHandler}>
                Add new task
            </button>
            {tasks.map((task) => (
                <li id="todo-container" key={task.id}>
                    {task.title}
                </li>
            ))}
        </>
    );
}

export default App;
