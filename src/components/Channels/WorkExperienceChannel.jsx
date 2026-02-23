import { useState, useRef } from "react";
import workIcon from "../assets/svgs/work-channel.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const WorkExperienceChannel = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const workIconRef = useRef();

    const handleMouseEnter = () => {
        const timeoutId = setTimeout(() => {
            setShowTooltip(true);
        }, 250);
        setHoverTimeout(timeoutId);
    };

    const handleMouseLeave = () => {
        clearTimeout(hoverTimeout);
        setShowTooltip(false);
    };

    useGSAP(() => {
        // Animación de brillo/resplandor
        gsap.to(workIconRef.current, {
            filter: "brightness(2) drop-shadow(0 0 10px rgba(245, 158, 11, 0.8))",
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
        });
        
        // Animación sutil de escala
        gsap.to(workIconRef.current, {
            scale: 1.05,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    });

    return (
        <div
            className="relative transparent-border hover:border-[#00c4ff] rounded-xl transition-border"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="bg-amber-200 flex items-center justify-center font-mono rounded-lg w-full h-full overflow-hidden channel-height">
                <div className="text-7xl">
                    <img
                        ref={workIconRef}
                        src={workIcon}
                        alt="Work Experience"
                        className={`object-cover md:w-[6vw] w-24`}
                    />
                </div>
            </div>

            {/* Tooltip */}
            {showTooltip && (
                <div className="font-rodin absolute z-10 left-1/2 transform -translate-x-1/2 mt-2 px-24 py-2 bg-white text-black rounded-full text-xl border-2 border-gray-300 shadow-xl whitespace-nowrap">
                    <p>Professional experience</p>
                </div>
            )}
        </div>
    );
};

export default WorkExperienceChannel;
