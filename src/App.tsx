import './App.css';
import { Task } from '././utilities/constant.ts';

function App() {
    const tasks: Task[] = [
        {
            id: 1,
            title: 'Create React App',
            isCompleted: false,
            priority: 'p2',
        },
        {
            id: 2,
            title: 'Solve Assignment',
            isCompleted: true,
            priority: 'p1',
        },
        {
            id: 3,
            title: 'Write Unit Tests',
            isCompleted: false,
            priority: 'p3',
        },
    ];
    return (
        <>
            <h1>Todo App</h1>
            {tasks.map((task) => (
                <li key={task.id}>{task.title}</li>
            ))}
        </>
    );
}

export default App;
