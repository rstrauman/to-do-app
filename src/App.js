import TaskContainer from './components/TaskContainer';
import AddTask from './components/AddTask';

import { useReducer } from "react";

const updateTask = (task, action) => {
    switch(action.type) {
        case "ADD":
            break;
        case "EDIT":
            break;
        case "DELETE":
            break;
        case "COMPLETE":
            break;
        default: 
            return;
    }
}

function App() {
    const [task, dispatch] = useReducer(addTask, 0);
 
    let tasks = [{
        id: 0,
        title: "",
        date: "2025-06-01",
        isComplete: false
    }];

    return (
        <div className="container">
            <AddTask updateTask={updateTask}/>
            <TaskContainer tasks={tasks}/>
        </div>
    );
}

export default App;
