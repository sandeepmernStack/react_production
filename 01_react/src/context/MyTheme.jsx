import { createContext, useContext, useState } from "react";

const MyTheme = createContext({})

export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState("dark")

    return(
    <MyTheme.Provider value={{theme, setTheme}}>
        {children}
    </MyTheme.Provider>
    )
}


export const useTheme =()=> useContext(MyTheme);