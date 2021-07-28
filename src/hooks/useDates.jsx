import React from "react";

const Dates = React.createContext()

export function DatesProvider({children}){
  const [user, setUser] = React.useState('')
  
  return (
    <Dates.Provider value={{setUser,user}}>
      {children}
    </Dates.Provider>
  )
}

export function useDates(){
  const context = React.useContext(Dates)
  return context
}