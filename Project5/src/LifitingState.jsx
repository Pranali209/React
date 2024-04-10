import { useState } from "react";
import Chat from "./Chat";
import Contact from "./Contact";
function LifitingState() {
    const[to , setTo ] = useState(contacts[0])
    return (  
        <>
        <h2>Lifting State</h2>
        <Contact contact={contacts} SelectedContact = {to} OnSelect={(contact)=> setTo(contact)} /><br/>
        <Chat SelectedContact = {to} key={to.email} />
        </>
    );
}
const contacts = [
    { name: 'Taylor', email: 'taylor@mail.com' },
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' }
  ];
export default LifitingState;