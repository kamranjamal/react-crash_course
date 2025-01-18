

import React, { createContext } from 'react'

// context
export const UserContextApi=createContext()

function UseContextHook({children}) {
    const user={
        name:"Musa",
        age:25
    }
  return (
    <UserContextApi.Provider value={{user}}>{children}</UserContextApi.Provider>
  )
}

export default UseContextHook