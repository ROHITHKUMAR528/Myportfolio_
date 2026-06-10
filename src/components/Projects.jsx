import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ArrowUpRight, ArrowDown } from 'lucide-react';
import marketZenImg from '../assets/market-zen.png';
import resumeCopilotImg from '../assets/ai-resume-copilot.png';

const projects = [
    {
        title: "Market Zen: AI-Powered Skincare E-Commerce",
        description: "A full-stack MERN skincare commerce platform with AI-assisted skin analysis, product search, and personalized routine recommendations.",
        details: [
            "Built 10+ core features including product catalog, cart, order management, and checkout.",
            "Integrated Google Gemini AI for skin image analysis, smart search, and personalized recommendations.",
            "Implemented secure JWT, Google OAuth 2.0, and OTP-based email verification with Resend API.",
            "Added Razorpay payments and deployed frontend/backend through Vercel and Render."
        ],
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini API", "Razorpay"],
        link: "https://github.com/ROHITHKUMAR528/MarketZen-AI-Powered-Ecommerce",
        liveLink: "https://market-zen-ai-powered-ecommerce.vercel.app/",
        date: "Dec 2025 - Mar 2026",
        image: marketZenImg,
        imagePosition: "center top"
    },
    {
        title: "AI Resume Copilot",
        description: "An AI-powered resume intelligence platform for ATS match scoring, semantic skill gap analysis, and automated resume optimization.",
        details: [
            "Architected resume analysis workflows for ATS match scoring and role-specific optimization.",
            "Built semantic matching with PostgreSQL pgvector and spaCy NLP for accurate skill comparison.",
            "Integrated OpenAI GPT-4o for learning roadmaps, resume bullets, and interview questions.",
            "Containerized backend services with Docker and deployed using Render Blueprints and Vercel."
        ],
        tags: ["React.js", "Vite", "FastAPI", "PostgreSQL", "Redis", "OpenAI API", "Docker"],
        link: "https://github.com/ROHITHKUMAR528/AI-Resume-Copilot",
        liveLink: "https://ai-resume-copilot-khaki.vercel.app/",
        date: "Jan 2026 - Mar 2026",
        image: resumeCopilotImg,
        imagePosition: "center top"
    }
];

const ProjectCard = ({ project }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative w-[85vw] md:w-[700px] lg:w-[750px] h-[50vh] md:h-[500px] flex-shrink-0 rounded-2xl overflow-hidden bg-white dark:bg-white/5 border border-brown/10 dark:border-white/10 shadow-md hover:shadow-xl backdrop-blur-sm group hover:border-brown dark:hover:border-primary-cyan transition-all duration-500"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Background Image */}
            <div className="absolute inset-0 h-[45%] md:h-[60%] overflow-hidden">
                <div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    style={{ objectPosition: project.imagePosition }}
                />
            </div>

            {/* Content Panel — expands up on hover */}
            <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-[#121212] border-t border-brown/10 dark:border-white/10 z-20 flex flex-col transition-all duration-500 ease-in-out"
                style={{
                    height: hovered ? '72%' : '45%',
                    padding: '20px 28px 18px',
                }}
            >
                {/* Header row: date + icons */}
                <div className="flex items-center justify-between mb-2 flex-shrink-0">
                    <span className="text-brown dark:text-primary-cyan font-mono text-sm tracking-wide font-semibold">
                        {project.date}
                    </span>
                    <div className="flex gap-4">
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link relative text-brown/70 dark:text-gray-100/70 hover:text-brown dark:hover:text-primary-cyan transition-colors"
                            >
                                <ArrowUpRight size={20} />
                                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-charcoal dark:bg-black rounded opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                    Live Link
                                </span>
                            </a>
                        )}
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link relative text-brown/70 dark:text-gray-100/70 hover:text-brown dark:hover:text-primary-cyan transition-colors"
                        >
                            <Github size={20} />
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-charcoal dark:bg-black rounded opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                                GitHub
                            </span>
                        </a>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal dark:text-gray-100 mb-2 leading-tight group-hover:text-brown dark:group-hover:text-primary-cyan transition-colors flex-shrink-0">
                    {project.title}
                </h2>

                {/* Description */}
                <p className="text-brown/80 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-3 flex-shrink-0">
                    {project.description}
                </p>

                {/* Key Features — revealed on hover */}
                <div
                    className="overflow-hidden transition-all duration-500 ease-in-out flex-shrink-0"
                    style={{
                        maxHeight: hovered ? '200px' : '0px',
                        opacity: hovered ? 1 : 0,
                        marginBottom: hovered ? '24px' : '0px',
                    }}
                >
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brown dark:text-primary-cyan mb-2">
                        ✦ Key Features
                    </p>
                    <ul className="space-y-1">
                        {project.details.map((feat, i) => (
                            <li key={i} className="flex items-start gap-2 group/feat">
                                {/* Accent dot — matches theme color */}
                                <span className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 bg-brown dark:bg-primary-cyan opacity-60 group-hover/feat:opacity-100 transition-opacity duration-200" />
                                <span className="text-xs text-brown/80 dark:text-gray-400 leading-snug group-hover/feat:text-brown dark:group-hover/feat:text-primary-cyan transition-colors duration-200">
                                    {feat}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tags — always visible at bottom */}
                <div className="flex flex-wrap gap-2 mt-auto flex-shrink-0">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 bg-black dark:bg-primary-cyan/5 text-white dark:text-primary-cyan rounded-full border-none dark:border dark:border-primary-cyan/20 transition-colors">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Detect screen width to adjust scroll range
    const [scrollRange, setScrollRange] = useState(["1%", "-60%"]);

    useEffect(() => {
        const updateRange = () => {
            // Mobile: Adjusted for 4 cards to prevent trailing gap
            if (window.innerWidth < 768) {
                setScrollRange(["1%", "-58%"]);
            } else {
                setScrollRange(["1%", "-42%"]);
            }
        };

        updateRange(); // Initial check
        window.addEventListener('resize', updateRange);
        return () => window.removeEventListener('resize', updateRange);
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], scrollRange);

    return (
        <section ref={targetRef} id="projects" className="relative h-[300vh] bg-white dark:bg-black transition-colors duration-500">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">

                {/* Large Background Title */}
                <div className="absolute top-1/2 left-10 transform -translate-y-1/2 z-0">
                    <h2 className="text-[12vw] font-bold text-brown/[0.05] dark:text-white/[0.03] select-none leading-none tracking-tighter transition-colors duration-300">
                        SELECTED <br /> WORKS
                    </h2>
                </div>

                {/* Horizontal Scroll Track */}
                <motion.div
                    style={{ x }}
                    className="flex gap-8 md:gap-12 pl-[5vw] pr-[50vw] items-center z-10"
                >
                    {/* Intro Card */}
                    <div className="w-[85vw] md:w-[400px] lg:w-[450px] flex-shrink-0 flex flex-col justify-center text-charcoal dark:text-white p-6 md:p-12 transition-colors duration-300">
                        <div className="w-12 h-1 bg-brown dark:bg-primary-cyan mb-6 transition-colors duration-300 shadow-[0_0_10px_rgba(0,240,255,0.3)]"></div>
                        <h3 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Recent <br />
                            <span className="text-brown/60 dark:text-gray-500 transition-colors duration-300">Projects</span>
                        </h3>
                        <p className="text-brown/80 dark:text-gray-400 text-lg mb-8 transition-colors duration-300">
                            Solving complex problems with elegant code.
                        </p>
                        <div className="flex items-center gap-2 text-sm font-mono animate-blink text-brown dark:text-primary-cyan transition-colors duration-300">
                            <span>SCROLL TO EXPLORE</span>
                            <ArrowDown className="w-4 h-4" />
                        </div>
                    </div>

                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
