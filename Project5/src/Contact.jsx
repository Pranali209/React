function Contact({contact , SelectedContact , OnSelect}) {
    console.log(SelectedContact);
    return ( 
        <>
          {contact.map((person)=>{
            return(
                <>
                   <button onClick={()=> OnSelect(person)}>{person.name}</button>
                </>
            )
          })}
        </>
     );
}

export default Contact;
