import { createContext, useContext, useReducer} from "react"
import reducer from './reducer'

const initialState = {
login:true,
}
const Context = createContext(initialState);


export const useValue = ()=>{
return useContext(Context);
}

const ContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);
    
  return (
    <Context.Provider value={{state,dispatch}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider