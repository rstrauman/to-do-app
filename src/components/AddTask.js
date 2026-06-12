import { useState, useEffect } from 'react';

function AddTask(props) {
    const [text, setText] = useState("");

    useEffect(() => {
        if (props.taskEdit) {
            setText(props.taskEdit.title);
        } else {
            setText("");
        }
    }, [props.taskEdit]);

    const addTask = () => {
        if (text.trim() === "") return;

        if (props.taskEdit) {
            props.dispatch({ 
                type: "EDIT", 
                payload: { id: props.taskEdit.id, newTitle: text } 
            });
            props.setTaskEdit(null); 
        } else {
                const newTask = {
                id: Date.now(),
                title: text,
                date: new Date().toLocaleString('en-us'),
                isComplete: false
            };
            props.dispatch({ type: "ADD", payload: newTask });
        }
        setText(""); 
    }

    return (
        <div className="upper-container">
            <h2>To-Do List</h2>
            <div className="input-container">
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="What's on your agenda today?"/>
                <button onClick={addTask}>{props.taskEdit ? "Update Task" : "Add Task"}</button>
                {props.taskToEdit && (
                    <button onClick={() => props.setTaskEdit(null)}>Cancel</button>
                )}
            </div>
        </div>
    );
}

export default AddTask;