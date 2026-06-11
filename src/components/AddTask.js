function AddTask(props) {
    eeturn (
        <div className="upper-container">
            <h2>To-Do List</h2>
            <div className="input-container">
                <input type="text" placeholder="What's on your agenda today?"/>
                <button onClick={() => props.dispatch({type: 'ADD'})}>Add Task</button>
            </div>
        </div>
    );
}

export default AddTask;