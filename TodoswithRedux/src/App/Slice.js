import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}
   
   

export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo:(state , action)=>{
            
         const todo ={
            id: nanoid(),
            text :action.payload
         }
          state.todos.push(todo)
        },
        removetodo:(state ,action)=>{

        state.todos =  state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updatetodo :(state , action)=>{
            console.log(action , "action")
           const newtodo =   state.todos.map((todo)=>{
            if(todo.id == action.payload.selectedid){
                todo.text = action.payload.todotext
            }
           }
              
           )
           console.log(newtodo , "updated todo")
        }
    }

})

export const {addTodo , removetodo ,updatetodo} = TodoSlice.actions
export default TodoSlice.reducer