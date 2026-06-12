import TaskContainer from './components/TaskContainer';
import AddTask from './components/AddTask';
import { useReducer, useEffect, useState } from "react";

const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "DELETE":
            return state.filter(task => task.id !== action.payload);
        case "COMPLETE":
            return state.map(task => task.id === action.payload ? { ...task, isComplete: !task.isComplete } : task);
        case "EDIT":
            return state.map(task => task.id === action.payload.id ? { ...task, title: action.payload.newTitle, date: new Date().toLocaleString('en-US') } : task);
        default:
            return state;
    }
}

function App() {
    const [tasks, dispatch] = useReducer(taskReducer, [], () => {
        const savedTasks = localStorage.getItem("tasks");
        
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [taskEdit, setTaskEdit] = useState(null);
 
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className="container">
            <AddTask dispatch={dispatch} taskEdit={taskEdit} setTaskEdit={setTaskEdit}/>
            <TaskContainer tasks={tasks} dispatch={dispatch} setTaskEdit={setTaskEdit}/>
        </div>
    );
}

export default App;
