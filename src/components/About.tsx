"use client"
import { AboutTextEn, AboutTextPt } from "@/constants";
import { Lang } from "@/contexts/languageContext";
import { Mode } from "@/contexts/modeContext";
import Image from "next/image";
import { useContext} from "react";

export const About = () => {
    const langCtx = useContext(Lang);
    const modeCtx = useContext(Mode);



    return (
        <section id="about" className={`pt-[8rem]  w-full h-auto pb-[14rem] lg:pb-[18rem]
        ${!modeCtx?.mode ? "bg-white" : "bg-black"}`}>
            <div className="flexCenter flex-col lg:flex-row gap-8 ">
                <div className="overflow-hidden rounded-2xl">
                <Image alt="image of myself" src={"/image-profile.jpeg"} width={350} height={350}/>
                </div>
                <div className="flex text-center lg:text-start flex-col gap-5 font-sans p-8 max-w-[600px]">
                    <h4 className="text-primaryBlue text-lg font-bold font-[azonix]">{!langCtx?.language ? "ABOUT ME" : "SOBRE MIM"}</h4>
                    <div>
                        <h2 className={`text-2xl font-bold ${!modeCtx?.mode ? "text-black" : "text-primaryBlue"}`}>{!langCtx?.language ? AboutTextEn.title1 : AboutTextPt.title1}</h2>
                        <h2 className={`text-2xl font-bold ${!modeCtx?.mode ? "text-black" : "text-primaryBlue"}`}>{!langCtx?.language ? "From Belo Horizonte, Brazil 📍" : "De Belo Horizonte, Brasil📍"}</h2>
                    </div>
                    <p className={`text-lg text-center font-normal lg:text-start
                     ${!modeCtx?.mode ? "text-[#767676]" : "text-primaryBlue/80"}`}>
                        {!langCtx?.language ? AboutTextEn.paragraph1 : AboutTextPt.paragraph1}</p>
                    <p className={`text-lg text-center font-normal lg:text-start
                     ${!modeCtx?.mode ? "text-[#767676]" : "text-primaryBlue/80"}`}>
                        {!langCtx?.language ? AboutTextEn.paragraph2 : AboutTextPt.paragraph2}</p>

                </div>
            </div>
        </section>
    );
}