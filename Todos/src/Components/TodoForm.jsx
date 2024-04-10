import React, { useContext, useState } from 'react'
import { todos } from '../TodoContext';
let nextId = 3;
function TodoForm() {
    const [newTodo, setNewTodo] = useState('')
    const { alltodos, addTodo } = useContext(todos)

    function handleClick(e) {
        e.preventDefault()
        addTodo(newTodo)
        setNewTodo('')
        console.log(alltodos)
    }
    
    return (
        <form className="flex">
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
                onClick={(e) => handleClick(e)}>
                Add
            </button>
        </form>
    );
}
export default TodoForm
