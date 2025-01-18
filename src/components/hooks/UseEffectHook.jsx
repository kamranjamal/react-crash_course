import React, { useEffect, useState } from 'react'

function UseEffectHook() {
const [count,setCount]=useState(0)
const [theme,setTheme]=useState('white')

useEffect(()=>{
    console.log("rendered")
},)
useEffect(()=>{
    console.log("empty dep array passed")
},[])
useEffect(()=>{
console.log("count changed")

},[count,theme])



  return (
    <div style={{backgroundColor:theme}}>
        <h2>Count is {count}</h2>
        <button onClick={()=>setCount(count+1)}>Inc</button>
        <button 
        className='bg-red-600 p-2 m-3 text-white rounded-md '
        onClick={()=>setTheme(theme=='white'?'black':'white')}
        >change Bg</button>

    </div>
  )
}

export default UseEffectHook