import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    return (
        <>
          <div className='text-center  p-4 m-5 bg-slate-500 text-white'>Followers are {data.public_repos}</div>
          <img src={data.avatar_url}/>

        </>
    )
}

export default Github
  export async function  GithubFollowers() {
     const response = await fetch('https://api.github.com/users/Pranali209')
     return response.json(); // returns promise
  
 }