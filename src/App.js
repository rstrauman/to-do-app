import TaskContainer from './components/TaskContainer';
import AddTask from './components/AddTask';
import { useReducer, useEffect } from "react";

const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "DELETE":
            return state.filter(task => task.id !== action.payload);
        case "COMPLETE":
            return state.map(task => task.id === action.payload ? { ...task, isComplete: !task.isComplete } : task);
        case "EDIT":
            return state.map(task => task.id === action.payload.id ? { ...task, title: action.payload.newTitle, date: "2026-06-11" } : task);
        default:
            return state;
    }
}

function App() {
    const [tasks, dispatch] = useReducer(taskReducer, [], () => {
        const savedTasks = localStorage.getItem("tasks");
        
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
 
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className="container">
            <AddTask dispatch={dispatch}/>
            <TaskContainer tasks={tasks} disptatch={dispatch}/>
        </div>
    );
}

export default App;
