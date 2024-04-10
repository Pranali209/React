import { useState } from 'react'


import {  useDispatch, useSelector } from 'react-redux'
import { addValue , deleteValue , addbyAmount } from './Slice'

function App() {
 const count = useSelector(state =>state.counter.value)
 const dispatch = useDispatch()
  return (
    <>
     
          <div>
            <h1>Redux Counter Application </h1>
             <h2>{count}</h2>
            <button onClick={ () => dispatch(addValue())}>Increment
              +
            </button>
            <button onClick={ () =>  dispatch(deleteValue())}> Decrement
              -
            </button>
          </div>
    
    </>
  )
}

export default App
