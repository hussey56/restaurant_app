import React from 'react'
import {useValue} from './context/ContextProvider'
const App = () => {
  const {
    state: { login },
    dispatch,
  } = useValue();
  const handleClose =()=>{
    dispatch({
      type: "OPEN_LOGIN",
    });
  }
  const handleOpen =()=>{
    dispatch({
      type: "ClOSE_LOGIN",
    });
  }

  return (
    <div>
    {login ? 'Login Open' : "Login Close"}

      <button onClick={login ? handleClose : handleOpen}>{login ? 'Close' :'Open'}</button>
    </div>
  )
}

export default App
