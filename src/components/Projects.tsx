"use client"
import { Lang } from "@/contexts/languageContext";
import { Mode } from "@/contexts/modeContext";
import { useContext,} from "react";
import {  PortfolioEn, PortfolioPt } from "@/constants";

export const Projects = () => {

    const modeCtx = useContext(Mode)
    const langCtx = useContext(Lang)

    return (
        <section id="projects" className={`h-auto w-full relative font-sans z-[0]  px-5 lg:pt-[5rem] pt-[8rem]
        ${!modeCtx?.mode ? "bg-white" : "bg-black"} pb-[14rem] lg:pb-[18rem]`}>
            <div className="max-w-[1000px] mx-auto text-center lg:text-start gap-5 flex flex-col" >
                <h4 className="text-primaryBlue text-lg font-bold font-[azonix] w-full">{!langCtx?.language ? "Portfolio" : "PORTFÓLIO"}</h4>
                <h1 className={`${!modeCtx?.mode ? "text-black" : "text-primaryBlue"} text-2xl font-bold font-sans w-full`}>
                    {!langCtx?.language ? PortfolioEn.title : PortfolioPt.title}
                </h1>
            </div>
            <div className="max-w-[1050px] mx-autolg:flexCenter flex-col pt-[5rem] mx-auto">
                <div className=" lg:max-w-full max-w-[200px] mx-auto h-[300px] flexCenter flex-col lg:flex-row gap-5">
                    <div className=" border-2 border-black w-full h-full"> foto</div>
                    <div className=" border-2 border-black w-full h-full flexCenter flex-col gap-5">
                        <h1>title</h1>
                        <p>description</p>
                        <div className="flexCenter gap-5">
                            <div>Techs 1</div>
                            <div>techs 2</div>
                        </div>
                        <div className="flexCenter gap-5">
                            <div>Code</div>
                            <div>Demo</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}