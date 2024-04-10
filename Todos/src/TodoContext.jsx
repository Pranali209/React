import { createContext } from "react";

export const todos = createContext({
    alltodos : [] ,
    addTodo : (todo) => {}, 
    updateTodo : (id , text) =>{},
    deleteTodo:(id)=>{},
    toggleCompleted :(id)=>{}
}
   
    )