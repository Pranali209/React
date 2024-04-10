import { useReducer, useState } from "react";

function ContextHook3() {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
    const [newtask, setNewTask] = useState('')
    const[ clicked , setClicked] = useState(false)
    function handleAdd(text) {
        dispatch(
            {
                type: 'added',
                id: nextId++,
                text: text
            }
        )

    }
    function handleDelete(taskId) {
        dispatch(
            {
                type: 'deleted',
                id: taskId
            }
        )

    }
    function handleEdit(task) {
        dispatch(
            {
                type: 'edit',
                task: task
            }
        )

    }
    return (
        <>
            <input type="text" placeholder="Add a Task" value={newtask} onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={() => handleAdd(newtask)}>Add</button>
            {tasks.map((e) => {
                return (
                    <>
                        <h3 disabled = {clicked ? true : false}>{e.text}</h3>
                        <input type="text" value={e.text} onChange={(e) => setNewTask(e.target.value)}/>
                        <button onClick={()=>handleEdit(newtask)}>Edit</button>
                        <button onClick={() => handleDelete(e.id)}>Delete</button>
                    </>
                )
            }

            )}
        </>

    );
}
function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added':
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text
                }

            ]
        case 'edit':
            return (
                tasks.map((task) => {
                    if (task.id === action.id) {
                        return (action.task)
                    } else {
                        return task;
                    }
                })
            )
        case 'deleted':
            return (tasks.filter(task => task.id !== action.id))



        default:
            break;
    }
}
export default ContextHook3;
let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Visit Kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false },
    { id: 2, text: 'Lennon Wall pic', done: false },
];