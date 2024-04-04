import './App.css';
import { tasks } from './utilities/constants';

function App() {
    return (
        <>
            <h1>Todo App</h1>
            <label htmlFor="task-input">Add task: </label>
            <button>Add task</button>
            {tasks.map((task) => (
                <li key={task.id}>{task.title}</li>
            ))}
        </>
    );
}

export default App;
