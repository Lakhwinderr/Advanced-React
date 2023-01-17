
import React, {useContext, useState} from "react";

const ThemeContext = React.createContext(undefined);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light") 
    const state = {
        theme, 
        toggleTheme: () => {setTheme(theme === "light" ? "dark":"light")
        console.log("toggletheme is clicked")
    }
       
    }

    return <ThemeContext.Provider value={state}>
        {children}
    </ThemeContext.Provider>
   
}

export const useTheme = () => useContext(ThemeContext);
