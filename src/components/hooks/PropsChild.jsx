import React from 'react'
import PropsSecondChild from '../PropsSecondChild'

function PropsChild({user}) {
  return (
    <div>
        <h2>This is 1st child</h2>
        <PropsSecondChild user={user}/>
    </div>
  )
}

export default PropsChild