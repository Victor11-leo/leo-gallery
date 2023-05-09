'use client'
import {useContext,useState} from 'react'

export const themes = {
    light:{
        fg:'',
        bg:''
    },
    dark:{
        fg:'',
        bg:''
    },
}

export const ThemeContext = React.createContext({
    theme:undefined,
    setTheme: async (theme) => null
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState(themes.light)

    return <ThemeContext.Provider value={{theme,setTheme}}> {children}</ThemeContext.Provider>
}