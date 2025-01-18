import React, { useState } from 'react'

function Form() {
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    console.log(name,password)
  return (
    <div>
        <form className='flex flex-col p-4 bg-gray-200 shadow-2xl'> 
    <div className='flex flex-col gap-2'>
        <label htmlFor="name">Name</label>
        <input className='outline-none border' type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
    <div className='flex flex-col gap-2'>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button className='bg-red-600 p-2 m-2 rounded-md' type='submit'>Submit</button>
    </div>

        </form>
    </div>
  )
}

export default Form