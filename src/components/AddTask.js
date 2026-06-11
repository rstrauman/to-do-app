import { useState } from 'react';

function AddTask(props) {
    const [text, setText] = useState("");

    const addTask = () => {
        if (text.trim() === null) return;

        const newTask = {
            id: Date.now(),
            title: text,
            date: new Date().toISOString().split('T')[0],
            isComplete: false
        };

        props.dispatch({ type: "ADD", payload: newTask });
        setText(""); 
    }

    return (
        <div className="upper-container">
            <h2>To-Do List</h2>
            <div className="input-container">
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="What's on your agenda today?"/>
                <button onClick={addTask}>Add Task</button>
            </div>
        </div>
    );
}

export default AddTask;