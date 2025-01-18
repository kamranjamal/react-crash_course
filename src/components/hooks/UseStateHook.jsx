import React, { useState } from 'react'

function UseStateHook() {
    const [count,setCount]=useState(20)
    const [theme,setTheme]=useState('white')

  
  return (
    <div style={{backgroundColor:theme}}>
        <h2>The count is {count}</h2>
        <button className='bg-red-600 p-2 m-3 text-white rounded-md ' onClick={()=>setCount(count+1)}>Increment</button>
        <button className='bg-red-600 p-2 m-3 text-white rounded-md ' onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setTheme(theme=='white'?'black':'white')}>Change Theme</button>
    </div>
  )
}

export default UseStateHook