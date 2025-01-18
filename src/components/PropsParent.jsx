import React from 'react'
import PropsChild from './hooks/PropsChild'

function PropsParent() {
    const user={
        name:"Musa",
        age:25
    }
  return (
    <div>
        <h2>THis is parnet</h2>
        <PropsChild user={user}/>
    </div>
  )
}

export default PropsParent