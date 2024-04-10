import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'

function App() {
  const[todotext , settext] = useState('')
  const[edittodo , setEdit] = useState(false)
  const [ selectedid , setSelectedid] = useState('');
  return (
    <>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                         <TodoForm todotext = {todotext}
                          Onchangetext = {((event)=>settext(event))}
                          edittodo = {edittodo}
                          OnchangeEdit = {((e)=> setEdit(e))}
                          selectedid = {selectedid} />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                     <TodoList todotext = {todotext}  
                     Onchangetext = {((event)=>settext(event))}
                     edittodo = {edittodo}
                     OnchangeEdit = {((e)=> setEdit(e))}
                     OnchangeId = {(id) => setSelectedid(id)}/>
                    
                    </div>
                </div>
            </div>
    </>
  )
}

export default App
