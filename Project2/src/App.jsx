import { useState } from 'react'
import { people } from './data';
import { useRef } from 'react'

import { createTodo, initialTodos } from './CreateTodo';

function Geturl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}


function App() {
  const [checked, setChecked] = useState(false)
  const [todos, settodos] = useState(initialTodos)
  const [text, setText] = useState('')
 

  return (
    <>
      <h1>Effects</h1>
      <label>Show the active Todos</label>
      <input type='checkbox' onChange={() => setChecked(!checked)} /> <br />
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => {settodos([...todos , createTodo(text)])  
      setText('')}}>Add</button>
      {checked ?
        (
          todos.map((todo) => {
            if (!todo.completed) {
               
              return <li>{todo.text}</li>
          
            }
          })
        ) :
        (
          todos.map((todo) => {

            if (todo.completed) {
              return <li><s>{todo.text}</s></li>
            }
            else {
              return <li>{todo.text}</li>
            }
            
          })
        )

      }
   
    </>
  )
}

export default App
