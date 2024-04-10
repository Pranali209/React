function Chat({SelectedContact , message ,dispatch}) {
    console.log({SelectedContact});
    return (
        <>
          <textarea  cols="30" rows="10" placeholder ={'Chat with ' + SelectedContact.name} value={message}
          onChange={(e)=>
            dispatch({
                  type:'Edit_Message',
                  message:e.target.value
          })}></textarea><br/>
          <button>send to {SelectedContact.email}</button>
        </>);
}

export default Chat;