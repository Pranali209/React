import { useEffect, useState } from 'react'
import TodoForm from './Components/TodoForm'

import { todos } from './TodoContext'
import TodoList from './Components/TodoList'
let nextId = 1;
function App() {
 const[alltodos , setAlltodos] = useState([])
  const addTodo = (todo)=>{
    setAlltodos([
      ...alltodos,
      {
          id: nextId++,
          text: todo,
          completed:false
      }
  ]);
  }

   const updateTodo = (val,id) =>{
      setAlltodos(
        alltodos.map((item)=>
           item.id === id ? {...item ,text:val} :  item
        )
      )
   }
   const deleteTodo = (id )=>{
         const filterTodo = alltodos.filter((item)=> item.id !== id)
         setAlltodos(filterTodo)
   }
   const toggleCompleted  = (id)=>{
          setAlltodos(
            alltodos.map((item)=>
              item.id===id ? {...item , completed:!item.completed}: item
            ))
   }

   useEffect(()=>{
      const todos = JSON.parse(localStorage.getItem( "todos" )) 
      if(todos && todos.length >0){
        setAlltodos(todos);
      }
      
    } , []);

    useEffect(()=>{
      localStorage.setItem('todos', JSON.stringify(alltodos));
    },[alltodos])
  return (
    <>
      <todos.Provider value={{alltodos , addTodo , updateTodo,deleteTodo,toggleCompleted }}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                         <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                     {alltodos.map((todo)=>(
                          <TodoList todo = {todo}/>
                     ))} 
                      
                    </div>
                </div>
            </div>
            </todos.Provider>
    </>
  )
}

export default App
