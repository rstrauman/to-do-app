import Task from './Task';

function TaskContainer(props) {
    return (
        <div className="task-container">
            {props.tasks.map(task => (
                <Task key={task.id} task={task} dispatch={props.dispatch}/>
            ))}
        </div>
    );
}

export default TaskContainer;