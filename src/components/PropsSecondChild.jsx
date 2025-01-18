import React from 'react'

function PropsSecondChild({user}) {
    
  return (
    <div>
        <h2>PropsSecondChild</h2>
        <h3>{user.name}</h3>


    </div>
  )
}

export default PropsSecondChild