function Task(props) {
    return (
        <div className="task-card">
            <div className="left-task">
                <h3>{props.tasks.task}</h3>
                <p className="date"></p>
            </div>
            <div className="right-task">
                <div>Complete</div>
                <div>Edit</div>
                <div>Delete</div>
            </div>
        </div>
    );
}

export default Task;