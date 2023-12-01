import React from 'react'
import {useValue} from './context/ContextProvider'
import Navbar from './component/Navbar/Navbar';
const App = () => {
  const {
    state: { login },
    dispatch,
  } = useValue();
 

  return (
   
    <Navbar/>
  )
}

export default App
