import { useReducer } from "react";
import ContactList from "./ContactList";
import ChatList from "./ChatList"
const contacts = [
    {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
    {id: 1, name: 'Alice', email: 'alice@mail.com'},
    {id: 2, name: 'Bob', email: 'bob@mail.com'},
  ];

const intialState = 
    {
        selectedId : 0,
        message : 'hello'
    }


function Reducer() {
   
    const[state , dispatch] = useReducer(ReducerFuction ,intialState)
    console.log(state);
    const contact = contacts.find((c) => c.id === state.selectedId);
    console.log({contact});
    return (  
        <>
        <h2>Lifting State</h2>
        <ContactList  contacts = {contacts} dispatch={dispatch} /><br/>
        <ChatList SelectedContact = {contact} message={state.message} dispatch={dispatch} />
        </>
    );
}

function ReducerFuction(state,action) {
    switch (action.type) {
        case 'Changed_Selection':
             return(
                {
                    ...state,
                    
                        selectedId : action.id,
                        message :''  

                }
                        
                
             )
             case 'Edit_Message':
                return(
                   {
                    ...state,
                       
                    message :action.message
                   }
                     
                       
                     
                   
                )
    
        default: {
            throw Error('Unknown action: ' + action.type);
          }
    }
}
export default Reducer;