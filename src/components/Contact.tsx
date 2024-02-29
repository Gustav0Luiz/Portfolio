"use client"

import { ContactEn, ContactPt } from "@/constants";
import { Lang } from "@/contexts/languageContext";
import { Mode } from "@/contexts/modeContext";
import Image from "next/image";
import { useContext} from "react";

export const Contact = () => {

        const langCtx = useContext(Lang);
        const modeCtx = useContext(Mode);

    return (
<section id="contact" className={`h-auto w-full relative font-sans z-[0]  px-5 lg:pt-[5rem] pt-[8rem] pb-[6rem]
        ${!modeCtx?.mode ? "bg-white" : "bg-black"}`}>
            <div className="max-w-[1000px] mx-auto text-center lg:text-start gap-5 flex flex-col" >
                <h4 className="text-primaryBlue text-lg font-bold font-[azonix] w-full">
                    {!langCtx?.language ? ContactEn.title : ContactPt.title}</h4>
                <h1 className={`${!modeCtx?.mode ? "text-black" : "text-primaryBlue"} text-2xl font-bold font-sans w-full`}>
                    {!langCtx?.language ? ContactEn.paragraph : ContactPt.paragraph}
                </h1>
            </div>
            <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row lg:flexStart py-[5rem] lg:gap-6 gap-10">
                <div className="flexCenter gap-6 lg:px-1 ">
                    <Image className="" alt="map icon" src={!modeCtx?.mode ? "/map-black.png" : "/map-blue.png"} width={30} height={30}/>
                    <div className="flex-col flex  text-start gap-0">
                        <h2 className={`text-xl flex font-bold text-center ${!modeCtx?.mode ? "text-black" : "text-primaryBlue"}`}>
                            {!langCtx?.language ? ContactEn.location: ContactPt.location}</h2>
                        <a target="_blank" href={"https://www.google.com/maps/place/Belo+Horizonte,+MG/@-19.9025359,-44.0464509,12z/data=!3m1!4b1!4m6!3m5!1s0xa690cacacf2c33:0x5b35795e3ad23997!8m2!3d-19.919052!4d-43.9386685!16zL20vMGwzcTI?entry=ttu"} className={`text-center text-lg flex ${!modeCtx?.mode ? "text-[#767676]" : "text-primaryBlue/80"}
                        hover:text-primaryBlue`}>{!langCtx?.language ? ContactEn.city : ContactPt.city}</a>
                            
                    </div>
                </div>
                <div className="flexCenter gap-6 lg:px-6 ">
                    <Image className="self-center" alt="map icon" src={!modeCtx?.mode ? "/mail-black.png" : "/mail-blue.png"} width={25} height={25}/>
                    <div className="flex-col flex  text-start gap-0">
                        <h2 className={`text-xl flex font-bold ${!modeCtx?.mode ? "text-black" : "text-primaryBlue"}`}>
                            Email</h2>
                        <a href="mailto:gustavo9661@gmail.com" className={`text-lg flex ${!modeCtx?.mode ? "text-[#767676]" : "text-primaryBlue/80"} hover:text-primaryBlue`}>
                            {ContactPt.Email}</a>
                    </div>
                </div>
            </div>

        </section>
    );
}