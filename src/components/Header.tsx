"use client"
import { NavLinksEn, NavLinksPt } from "@/constants";
import { Lang } from "@/contexts/languageContext";
import { Mode } from "@/contexts/modeContext";
import Image from "next/image";
import { useContext, useState } from "react";

export const Header = () => {

    const modeCtx = useContext(Mode)
    const toggleMode = () => {
        modeCtx?.setMode(!modeCtx.mode)
    }
    const langCtx = useContext(Lang)
    const toggleLang= () => {
        langCtx?.setLanguage(!langCtx.language)
    }

    const [active, setActive] = useState(false);
    return (
        <> 
            <nav className={`flexBetween mx-auto max-w-full font-[Azonix] z-50
            ${!modeCtx?.mode ? "bg-white shadow-headerBlack" : "bg-black shadow-headerWhite"} 
            w-screen padding-container fixed py-6`}>
                <a href={"/"}>
                    <h1 className={`text-3xl ${!modeCtx?.mode ? "text-black" : "text-primaryBlue"}`}>Gustavo.Dev</h1>
                </a>
                <div className="flexStart gap-12">

                    <ul className="hidden h-full gap-8 lg:flex ">
                    {langCtx!.language && NavLinksPt.map((link)=>(
                            <a key={link.key} href={link.href} 
                            className={`text-md ${!modeCtx?.mode ? "text-primaryGray" : "text-primaryBlue"} flexCenter cursor-pointer  
                            transition-all ${!modeCtx?.mode ? "hover:text-primaryBlue " : "hover:text-white"}`}>
                                <li>
                                {link.label}
                                </li>
                            </a>
                        ))}
                    {!langCtx?.language && NavLinksEn.map((link)=>(
                            <a key={link.key} href={link.href} 
                            className={`text-md ${!modeCtx?.mode? "text-primaryGray" : "text-primaryBlue"} flexCenter cursor-pointer  
                            transition-all ${!modeCtx?.mode ? "hover:text-primaryBlue " : "hover:text-white"}`}>
                                <li>
                                {link.label}
                                </li>
                            </a>
                        ))}
                    </ul>

                    <div className="lg:hidden flex ">
                            <div className="" onClick={()=> setActive(true)}>
                                <Image alt="hamburguer menu" width={34} height={34} src={!modeCtx?.mode ? '/hamb.png' : '/blueHamb.png'}/>
                            </div>
                    </div>
                    <div className="lg:flexBetween hidden gap-3 ">
                        <div className="rounded-full p-[3px] hover:cursor-pointer" onClick={toggleMode}>
                                <Image alt="toggle light/dark mode" width={30} height={30} 
                                src={modeCtx?.mode ? '/clone.png' : '/vader.png'}/>
                        </div>
                        <div className=" rounded-full p-[3px] hover:cursor-pointer" onClick={toggleLang}>
                                <Image alt="toggle En/Pt language" width={34} height={34}
                                src={langCtx?.language ? '/bra.png' : '/eua.png'}/>
                        </div>
                    </div>
                </div>
            </nav>
            {active && 
                <nav className={`font-[Azonix] fixed w-screen h-screen z-50 ${!modeCtx?.mode ? "bg-white" : "bg-black"}`}>
                    <div className="relative w-full h-full flexCenter flex-col py-6 px-3">
                        <Image className="absolute right-6 top-6" alt="close hamburguer menu" width={34} height={34}
                        src={!modeCtx?.mode ? '/close.png' : '/blueClose.png'} onClick={()=> setActive(false)}/>

                        <ul className="w-full h-full flexCenter flex-col gap-20">
                        {langCtx?.language && NavLinksPt.map((link)=>(
                            <a key={link.key} href={link.href} 
                            className={`text-md flex ${!modeCtx?.mode ? "text-primaryGray" : "text-primaryBlue"} flexCenter cursor-pointer  
                            transition-all ${!modeCtx?.mode ? "hover:text-primaryBlue " : "hover:text-white"}`} 
                            onClick={()=> setActive(false)}>
                                <li>
                                {link.label}
                                </li>
                            </a>
                        ))}
                        {!langCtx?.language && NavLinksEn.map((link)=>(
                            <a key={link.key} href={link.href} 
                            className={`text-md flex ${!modeCtx?.mode ? "text-primaryGray" : "text-primaryBlue"} flexCenter cursor-pointer  
                            transition-all ${!modeCtx?.mode ? "hover:text-primaryBlue " : "hover:text-white"}`} onClick={()=> setActive(false)}>
                                <li>
                                {link.label}
                                </li>
                            </a>
                        ))}
                            <div className="flex gap-3 ">
                                <div className="rounded-full p-[3px] hover:cursor-pointer" onClick={toggleMode}>
                                        <Image alt="toggle light/dark mode" width={30} height={30} 
                                        src={modeCtx?.mode ? '/clone.png' : '/vader.png'}/>
                                </div>
                                <div className=" rounded-full p-[3px] hover:cursor-pointer" onClick={toggleLang}>
                                        <Image alt="toggle En/Pt language" width={34} height={34}
                                        src={langCtx?.language ? '/bra.png' : '/eua.png'}/>
                                </div>
                            </div>
                        </ul>
                    </div>
                </nav>
            }
        </>
    );
}