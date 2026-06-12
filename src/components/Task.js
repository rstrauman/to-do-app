function Task(props) {
    return (
        <div className={props.task.isComplete ?  "completed-task" : "task-card"}>
            <div className="left-task">
                <h3>{props.task.title}</h3>
                <p className="date">{props.task.date}</p>
            </div>
            <div className="right-task">
                <div onClick={() => {props.dispatch({ type: "COMPLETE", payload: props.task.id });}}>Complete</div>
                <div onClick={() => props.setTaskEdit(props.task)}>Edit</div>
                <div onClick={() => {props.dispatch({ type: "DELETE", payload: props.task.id });}}>Delete</div>
            </div>
        </div>
    );
}

export default Task;