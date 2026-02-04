import EmptyChannel from "./Channels/EmptyChannel";
import DiscChannel from "./Channels/DiscChannel";
import BannerChannel from "./Channels/BannerChannel";
import githubSvg from "../assets/svgs/github.svg";
import linkedinSvg from "../assets/svgs/linkedin.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CodeChannel from "./Channels/CodeChannel";
import TechnologiesChannel from "./Channels/TechnologiesChannel";
import starSvg from "../assets/svgs/star.svg";
import MmFooter from "./MmFooter";
import MmFooterMobile from "./MmFooterMobile";
import { useMediaQuery } from "react-responsive";
import WorkExperienceChannel from "./WorkExperienceChannel";

export default function MainMenu() {
    const [fadeIn, setFadeIn] = useState(false);
    const isMdOrLarger = useMediaQuery({ minWidth: 768 });

    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <div
            className={`mm-striped-bg bg-gray-100 min-h-screen flex flex-col ${
                fadeIn ? "fade-in" : ""
            }`}
        >
            <div className="flex-grow md:h-[100vh] md:overflow-auto md:pb-0 pb-20">
                <div className="md:flex flex-wrap xl:px-32 md:pt-4 p-3 pt-14 justify-center md:pb-24">
                    <Link to={"/about-me"} className="md:w-1/4 md:p-[0.4vh]">
                        <DiscChannel />
                    </Link>
                    <Link
                        to={"/work-experience"}
                        className="md:w-1/4 md:p-[0.4vh]"
                    >
                        <WorkExperienceChannel />
                    </Link>
                    <Link
                        to={"/technologies-view"}
                        className="md:w-1/4 md:p-[0.4vh]"
                    >
                        <TechnologiesChannel />
                    </Link>
                    <Link
                        to={"https://www.linkedin.com/in/tobiasechenique/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:w-1/4 md:p-[0.4vh]"
                    >
                        <BannerChannel
                            image={linkedinSvg}
                            legend={"LinkedIn Profile"}
                            classes={"animate-pulse"}
                        />
                    </Link>
                    <Link
                        to={"https://github.com/tobieche110"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:w-1/4 md:p-[0.4vh]"
                    >
                        <BannerChannel
                            image={githubSvg}
                            legend={"Github Profile"}
                            classes={"animate-bounce"}
                        />
                    </Link>
                    <Link
                        to={
                            "https://github.com/tobieche110/algoritmo-paneles-acusticos"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:w-1/4 md:p-[0.4vh]"
                    >
                        <BannerChannel
                            image={starSvg}
                            legend={"Featured Project"}
                            classes={"animate-spin-slower"}
                        />
                    </Link>
                    <Link
                        to={"https://github.com/tobieche110/wii-portfolio"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="md:w-1/4 md:p-[0.4vh]"
                    >
                        <CodeChannel />
                    </Link>
                    {isMdOrLarger && (
                        <>
                            <div className="md:w-1/4 md:p-[0.4vh]">
                                <EmptyChannel />
                            </div>
                            <div className="md:w-1/4 md:p-[0.4vh]">
                                <EmptyChannel />
                            </div>
                            <div className="md:w-1/4 md:p-[0.4vh]">
                                <EmptyChannel />
                            </div>
                            <div className="md:w-1/4 md:p-[0.4vh]">
                                <EmptyChannel />
                            </div>
                            <div className="md:w-1/4 md:p-[0.4vh]">
                                <EmptyChannel />
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className="mt-auto">
                {isMdOrLarger ? <MmFooter /> : <MmFooterMobile />}
            </div>
        </div>
    );
}
