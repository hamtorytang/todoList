import { useState, createContext, useContext } from "react";

interface DarkModeProps {
    toggleMode: ()=>void;
    darkmode:boolean;
}

const DarkModeContext = createContext<DarkModeProps>({
    toggleMode:()=>null,
    darkmode:false,
});

export function DarkModeProvider({children}:{children: React.ReactNode}){
    const [darkmode, setDarkMode] = useState<boolean>(false);
    const toggleMode = ()=>{
        updateDarkMode(darkmode);
        setDarkMode(!darkmode);
    }
    return(
        <DarkModeContext.Provider value={{toggleMode, darkmode}}>
            {children}
        </DarkModeContext.Provider>
    )
}


function updateDarkMode(darkmode:boolean){
    if(darkmode){
        return document.documentElement.classList.add('dark');
    }
    return document.documentElement.classList.remove('dark');
}

export const useDarkMode = () => useContext(DarkModeContext);