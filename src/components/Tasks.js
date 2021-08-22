import Task from "./Task"

const Tasks = ({tasks, onDelete}) => {//rac
    return (
        <ul>{
                tasks.map((t)=> (<Task key={t.id} task={t} onDelete={onDelete}/>)            
        )}</ul>

    )
}

export default Tasks
