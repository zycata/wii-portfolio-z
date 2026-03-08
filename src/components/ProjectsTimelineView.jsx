import ViewFooter from "./ViewFooter";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const WorkExperienceView = () => {
    const timelineRef = useRef();
    const lineRef = useRef();
    const experienceRefs = useRef([]);
    const [hoveredItem, setHoveredItem] = useState(null);
    const page_title_name = "Featured Projects";
    const projectExperience = [
        {
            id: 1,
            year: "2025 Mar - Aug",
            name: "BTD6 Machine",
            technologies: "C++, C#, makefile",
            description: [
                "Created a genetic algorithm using C++ to create an program that could play the desktop computer game bloons tower defense 6",
                "Created a C\# mod using DLL injection to interface with the BTD6 game engine, providing real-time gameplay data to the C++ AI for learning and optimization",
                "Optimized a decision-making algorithm, reducing the number of generations needed to beat the game by 50\% through refined genetic selection.",

            ],
            color: "bg-green-600",
        },
        {
            id: 2,
            year: "2025 Dec - 2026 Jan",
            name: "C Ascii Generator",
            technologies: "C, makefile",
            description: [
                "Created an image to ascii art generator using C",
                "Uses image convolution with a sobel edge kernel to generate sharper edges on outputted ascii art",
                "Added a diverse amount of argument options that include: sobel thresholds, character ratios, brightness, and disk writes"

            ],
            color: "bg-yellow-600",
        },
        {
            id: 3,
            year: "2026 Jan - Mar",
            name: "Ubc Workday Converter",
            technologies: "Flask, Python, React, Docker, Javascript",
            description: [
                "Created a website that converts UBC workday excel course schedules into usable and practical icalendar (.ics) files",
                "Used Python Flask as a backend with a react JSX frontend",
                "Deployed the website using Google Cloud Service's Cloud run to the public",
            ],
            color: "bg-blue-600",
        },
    ];

    useGSAP(() => {
        // Inicializar elementos como invisibles
        gsap.set(experienceRefs.current, { opacity: 0, y: 50, scale: 0.8 });
        gsap.set(lineRef.current, { scaleX: 0, opacity: 0 });

        // Primero aparece la línea de tiempo
        gsap.to(lineRef.current, {
            scaleX: 1,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                // Luego aparecen las experiencias una por una
                experienceRefs.current.forEach((ref, index) => {
                    if (ref) {
                        gsap.to(ref, {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.6,
                            delay: index * 0.3, // Cada experiencia aparece 0.3s después de la anterior
                            ease: "back.out(1.7)",
                        });
                    }
                });
            },
        });
    });

    return (
        <div className="flex flex-col min-h-screen w-full bg-amber-200">
            {/* Título */}
            <div className="text-center py-8">
                <h1 className="font-serif font-bold text-4xl md:text-6xl text-amber-900">
                    {/*"is this riyal or fakeh??"*/}
                    {page_title_name}
                </h1>
            </div>

            {/* Línea de tiempo horizontal 
            also probably change this to scroll sections of a project */}
            <div className="flex-grow px-4 pb-44 md:pb-0">
                <div className="w-full max-w-7xl mx-auto">
                    <div ref={timelineRef} className="relative">
                        {/* Línea horizontal principal */}
                        <div
                            ref={lineRef}
                            className="hidden md:block absolute left-8 right-8 h-2 bg-amber-600 rounded-full shadow-lg z-0 top-16"
                        ></div>

                        {/* Contenedor de experiencias */}
                        <div className="flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0 md:space-x-4 relative">
                            {projectExperience.map((exp, index) => (
                                <div
                                    key={exp.id}
                                    ref={(el) =>
                                        (experienceRefs.current[index] = el)
                                    }
                                    className="relative flex flex-col items-center group w-full max-w-4xl"
                                    onMouseEnter={() => setHoveredItem(exp.id)}
                                    onMouseLeave={() => setHoveredItem(null)}
                                >
                                    {/* Fecha arriba */}
                                    <div className="mb-4 text-center">
                                        <p className="text-sm md:text-base font-bold text-amber-900 bg-white px-3 py-1 rounded-full shadow-md border-2 border-amber-600">
                                            {exp.year}
                                        </p>
                                    </div>

                                    {/* Círculo SOBRE la línea */}
                                    <div
                                        className={`hidden md:flex w-8 h-8 md:w-10 md:h-10 rounded-full ${exp.color} items-center justify-center text-white font-bold text-lg md:text-xl border-4 border-white shadow-lg transform transition-all duration-300 group-hover:scale-125 group-hover:shadow-2xl relative z-20 mb-6`}
                                    ></div>

                                    {/* Información de la experiencia debajo */}
                                    <div
                                        className={`p-4 bg-white rounded-lg shadow-lg w-full max-w-sm transition-all duration-300 transform ${
                                            hoveredItem === exp.id
                                                ? "scale-105 shadow-2xl border-2 border-amber-400"
                                                : "border-2 border-transparent"
                                        }`}
                                    >
                                        <div className="text-center">
                                            <h3 className="font-bold text-lg text-amber-900 mb-1">
                                                {exp.name}
                                            </h3>
                                            <h4 className="font-semibold text-md text-blue-700 mb-3">
                                                {exp.technologies}
                                            </h4>
                                            {exp.description.map(
                                                (desc, idx) => (
                                                    <li className="text-sm text-gray-700 leading-relaxed">
                                                        {desc}
                                                    </li>
                                                ),
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-auto">
                <ViewFooter />
            </div>
        </div>
    );
};

export default WorkExperienceView;
