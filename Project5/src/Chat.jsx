function Chat({SelectedContact}) {
    return (
        <>
          <textarea  cols="30" rows="10" placeholder ={'Chat with ' + SelectedContact.name}></textarea><br/>
          <button>send to {SelectedContact.email}</button>
        </>);
}

export default Chat;