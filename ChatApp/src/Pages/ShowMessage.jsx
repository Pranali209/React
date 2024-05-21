import React, { useState } from 'react'
import auth from '../Appwrite/Auth'
import Config from  '../Appwrite/Config'
import { useEffect } from 'react'
function ShowMessage() {
    const [messages, setMessages] = useState([]);
    const [messageBody, setmessageBody] = useState('')
    useEffect(() => {
        async function fetchData() {
            const res = await auth.GetMessage();
           
           
            if (res) {
                setMessages(res.documents);
            }
           auth.Subscribing()
        }

        fetchData();

    }, []);

    async function handleSubmit(e) {
        e.preventDefault()
        let payload = {
            Body: messageBody
        }

        const res = await auth.CreateMessage(payload)
        setMessages(prevstate => [res, ...messages])
        setmessageBody('')
    }

    async function deleteMessage(message) {

        const res = await auth.DeleteMessage(message.$id)
        setMessages(messages.filter(txt => txt.$id !== message.$id))

    }
    return (
        <>

            <div className='p-3'>
                {messages.length > 0 ? (
                    messages.map((message,) => (

                        <div className='relative'>

                            <small className='text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600' >{new Date(message.$createdAt).toLocaleString()}</small>
                            <p key={message.id}
                                className=" bg-violet-100 text-xl border-4
                               border-fuchsia-600 p-3 placeholder-purple-400 
                               focus:text-violet-950 focus:border-purple-700 
                               focus:outline-none focus:ring-2 focus:ring-purple-500 m-3 w-max rounded-xl">
                                {message.Body}
                            </p>
                            <button  onClick={() => deleteMessage(message)}
                                className="flex justify-center items-center gap-2 absolute  right-1 top-8
                                 w-16 h-10 cursor-pointer rounded-md shadow-2xl
                                  text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48]
                                   to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                            >
                                <svg viewBox="0 0 15 15" className="w-5 fill-white">
                                    <svg
                                        className="w-6 h-6"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                        ></path>
                                    </svg>
                                    Button
                                </svg>
                            </button>

                        </div>




                    ))
                )
                    : (
                        <p>Loading messages...</p>
                    )}
                <form onSubmit={(e) => handleSubmit(e)} className='p-3'>
                    <div className="input-group">
                        <textarea placeholder="Enter message" value={messageBody} maxLength={1000}
                            className="min-h-12 max-w-60 px-4 text-white text-lg border border-purple-600 rounded-l bg-transparent focus:border-blue-500 focus:outline-none"
                            onChange={(e) => setmessageBody(e.target.value)} />
                        <input value="Send" type="submit"
                            className=" min-h-12 px-4 border-none rounded-r bg-purple-600 text-white text-lg cursor-pointer transition-colors duration-300 ease-in-out hover:bg-purple-700" />
                    </div>


                </form>
            </div>

        </>


    );
}

export default ShowMessage