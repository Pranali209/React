import { useState } from "react";

export  default function DisplayInfo(params) {
    const[person , setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
    })
 function handlechange(e) {
    console.log("name" , e.name, "value" ,e.target.value);
     
    setPerson({
        ...person,
        [e.target.name]: e.target.value
    });
 }
    return(
    <>
      <input type="text"  name="firstName" value={person.firstName}  onChange={handlechange}/><br/>
      <input type="text"  name="lastName" value={person.lastName} onChange={handlechange}/><br/>
      <input type="text"   name="email" value={person.email} onChange={handlechange}/><br/>
      {person.firstName +" "+  person.lastName + " " + person.email}
    </>)
}