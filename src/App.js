import TaskContainer from './components/TaskContainer';
import AddTask from './components/AddTask';

import { useReducer } from "react";

const addTask = (task, action) => {

}

function App() {
    const [task, dispatch] = useReducer(addTask, 0);
 
    let tasks = [{
        id: 0,
        title: "",
        date: "2025-06-01"
        isComplete: false
    }];

    return (
        <div className="container">
            <AddTask/>
            <TaskContainer tasks={tasks}/>
        </div>
    );
}

export default App;
