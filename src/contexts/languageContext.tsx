"use client"
import { ReactNode, createContext, useState } from "react";

type setLanguage = {
    language:boolean,
    setLanguage: (n:boolean) => void
};
type Props = {children: ReactNode}
export const Lang = createContext<null | setLanguage>(null);

export const LangProvider = ({children}: Props)=> {
    const [language, setLanguage] = useState(false);
    return(
        <Lang.Provider value={{ language, setLanguage}}>
            <>{children}</>
        </Lang.Provider>
    );
};