"use client"
import { useContext } from "react";
import { Mode } from "@/contexts/modeContext";

export const Footer = () => {
    const modeCtx = useContext(Mode);
    return (
        <footer className={`w-full pt-[3rem] pb-[1rem] ${!modeCtx?.mode ? "bg-white" : "bg-black"}`}>
            <div className="flexCenter">
                <h1 className={`${!modeCtx?.mode ? "text-primaryGray" : "text-primaryBlue/80"} text-sm font-[Azonix]`}>
                    Copyright © 2024 | Gustavo Luiz</h1>
            </div>
        </footer>
    );
}