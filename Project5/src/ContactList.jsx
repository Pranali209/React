function ContactList({ contacts, dispatch }) {
    
    return (
        <>
            {contacts.map((person) => {
                return (
                    <>
                        <button onClick={
                            () => dispatch(
                                {
                                    type: 'Changed_Selection',
                                    id: person.id
                                }
                            )
                        }>{person.name}</button>
                    </>
                )
            })}
        </>
    );
}

export default ContactList;