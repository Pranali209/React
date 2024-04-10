import { createContext } from "react";

export const ThemeMode = createContext({
    themeMode : "light",
    lightMode : () =>{} ,
    darkMode : () =>{},

})