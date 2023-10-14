import {createContext } from "react";


export const AppContext= createContext();

export const AppContextProvider=({children})=>{

return <AppContext.Provider value='Pittesh'>
    {children}
</AppContext.Provider>

}
