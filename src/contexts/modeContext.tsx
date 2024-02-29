"use client"
import { ReactNode, createContext, useState } from "react";

type setMode = {
    mode:boolean,
    setMode: (n:boolean) => void
};
type Props = {children: ReactNode}
export const Mode = createContext<null | setMode>(null);

export const ModeProvider = ({children}: Props)=> {
    const [mode, setMode] = useState(false);
    return(
        <Mode.Provider value={{ mode, setMode}}>
            <>{children}</>
        </Mode.Provider>
    );
};