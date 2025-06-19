import { createContext } from "react";

const TodoContext=createContext();
export const TodoProvoder=()=>{
  
    return(
<TodoContext.Provider>
    {children}
</TodoContext.Provider>
    )
}