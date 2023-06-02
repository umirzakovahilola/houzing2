import React from 'react'
import { useReducer } from 'react'
import { createContext } from 'react'
import { reduser } from './reduser'

const Properties=createContext()

export const PropertiesContext = ({children}) => {
    const [state,dispatch]=useReducer(reduser,[])
  return (
    <Properties.Provider value={[state,dispatch]}>
        {children}
    </Properties.Provider>
  )
}

export default PropertiesContext
