import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { GraduationCap, School, Award, BookOpen, Briefcase } from 'lucide-react';
import SpotlightCard from './SpotlightCard';
import oracleAI from '../assets/oracle-ai-foundations.jpg';
import deloitteDataAnalytics from '../assets/deloitte-data-analytics.jpg';
import awsCloud from '../assets/aws-cloud-practitioner.jpg';
import claude101 from '../assets/claude-101.jpg';
import advancedJava from '../assets/advanced-data-structures-java.jpg';
import mernStack from '../assets/mern-stack-development.jpg';
import quantumFundamentals from '../assets/quantum-fundamentals.png';

const EducationIcon = ({ progress, index, total, theme, icon }) => {
    // Calculate the point at which this specific icon should be "active"
    // Each item represents a segment of the scroll line
    const centerPoint = (index) / (total - 1);
    
    // We want the glow to trigger when the scroll line is nearby
    const start = centerPoint - 0.15;
    const end = centerPoint + 0.15;
    
    const active = useTransform(progress, [Math.max(0, start), centerPoint, Math.min(1, end)], [0, 1, 1]);
    const glow = useSpring(active, { stiffness: 100, damping: 30 });

    const borderColor = useTransform(glow, [0, 1], 
        theme === 'dark' ? ["rgba(0,0,0,0)", "rgba(0,240,255,0.6)"] : ["rgba(0,0,0,0)", "rgba(180,140,90,0.6)"]
    );
    const color = useTransform(glow, [0, 1], 
        theme === 'dark' ? ["rgba(255,255,255,0.05)", "rgba(0,240,255,1)"] : ["rgba(0,0,0,0.1)", "rgba(180,140,90,1)"]
    );
    const backgroundColor = useTransform(glow, [0, 1], 
        theme === 'dark' ? ["rgba(0,0,0,0)", "rgba(15,15,15,0.8)"] : ["rgba(0,0,0,0)", "rgba(255,255,255,0.8)"]
    );
    const scale = useTransform(glow, [0, 1], [0.8, 1.2]);
    const boxShadow = useTransform(glow, [0, 1], 
        theme === 'dark' 
            ? ["0 0 0px rgba(0,240,255,0)", "0 0 30px rgba(0,240,255,0.4)"] 
            : ["0 0 0px rgba(180,140,90,0)", "0 0 20px rgba(180,140,90,0.3)"]
    );

    return (
        <motion.div 
            style={{ 
                borderColor,
                color,
                backgroundColor,
                scale,
                boxShadow
            }}
            className="p-2.5 rounded-xl border-2 transition-none"
        >
            {icon}
        </motion.div>
    );
};

const Experience = ({ theme }) => {
    const educationRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: educationRef,
        offset: ["start center", "end center"]
    });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const education = [
        {
            period: "2023 - 2027",
            title: "BTech in Computer Science and Engineering",
            institution: "Madanapalle Institute of Technology & Science",
            score: "Ongoing: 7.85 CGPA",
            icon: <GraduationCap className="w-6 h-6" />
        },
        {
            period: "2021 - 2022",
            title: "Intermediate (IPE)",
            institution: "Sri Siddartha Junior College",
            score: "Percentage: 85.3%",
            icon: <School className="w-6 h-6" />
        },
        {
            period: "2020 - 2021",
            title: "Matriculation",
            institution: "Govt Boys High School",
            score: "Percentage: 97%",
            icon: <BookOpen className="w-6 h-6" />
        }
    ];

    const certifications = [
        {
            date: "Oct 2025",
            title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
            provider: "Oracle University",
            image: oracleAI,
            link: "https://drive.google.com/file/d/148fRlbNPob-D6iDRa5mmRZE9TLO7ULDt/view?usp=sharing"
        },
        {
            date: "Jun 2026",
            title: "Data Analytics Job Simulation",
            provider: "Deloitte (via Forage)",
            image: deloitteDataAnalytics,
            link: "https://drive.google.com/file/d/1xjhLh6HW8em_DC-U9lO50se-AHfDIFj5/view?usp=sharing"
        },
        {
            date: "Jun 2026",
            title: "AWS Cloud Practitioner Essentials",
            provider: "AWS Training & Certification",
            image: awsCloud,
            link: "https://drive.google.com/file/d/1YfwNCcNQysvPpSQ1_Jtp0302sLg95z9m/view?usp=sharing"
        },
        {
            date: "2026",
            title: "Claude 101",
            provider: "Anthropic",
            image: claude101,
            link: "https://drive.google.com/file/d/1IrHgimMSjgqqYoIvZ8SrdgNU-j_zJdxU/view?usp=sharing"
        },
        {
            date: "Jan - Feb 2026",
            title: "Advanced Data Structures using Java",
            provider: "Department of Computer Science & Engineering, MITS",
            image: advancedJava,
            link: "https://drive.google.com/file/d/1CToiHxYlVaYyum9T54ghcMFDlNAhLHqB/view?usp=sharing"
        },
        {
            date: "Feb - Mar 2026",
            title: "MERN Stack Development",
            provider: "Department of Computer Science & Engineering, MITS",
            image: mernStack,
            link: "https://drive.google.com/file/d/1dv8vU0EHLmt-yGBGo2Uh9PyMk5diW-lg/view?usp=sharing"
        },
        {
            date: "Feb 2026",
            title: "Quantum Fundamentals",
            provider: "Amaravati Quantum Valley, Qubitech & WISER",
            image: quantumFundamentals,
            link: "https://drive.google.com/file/d/1B-P-TDJOhVsvu0PEHxvvEaw6GCxVhpKY/view?usp=sharing"
        }
    ];

    return (
        <section id="experience" className="py-24 bg-[#f5f2eb] dark:bg-[#0f0f0f] transition-colors duration-300">
            <div className="container px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-4">Journey & Learning</h2>
                    <p className="text-brown/70 dark:text-gray-400 max-w-2xl mx-auto">A roadmap of my academic foundations and professional certifications.</p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    {/* Experience/Training Section */}
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-brown/10 dark:bg-primary-cyan/10 rounded-xl text-brown dark:text-primary-cyan">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-charcoal dark:text-white">Training & Experience</h3>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <SpotlightCard
                                spotlightColor={theme === 'light' ? "rgba(180, 140, 90, 0.2)" : "rgba(0, 255, 136, 0.1)"}
                                className="p-8 rounded-2xl bg-white/50 dark:bg-white/5 border border-brown/10 dark:border-white/10"
                            >
                                <span className="text-sm font-bold text-brown dark:text-primary-cyan uppercase tracking-widest">Aug 2024 - Sep 2024</span>
                                <h4 className="text-2xl font-bold text-charcoal dark:text-white mt-2">Game Design Using Unity 3D</h4>
                                <div className="flex items-center gap-4">
                                    <p className="text-lg font-medium text-brown/80 dark:text-gray-300">APSSDC & Madanapalle Institute of Technology & Science</p>
                                </div>
                                <ul className="mt-6 grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-400">
                                    <li className="flex gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brown/50 dark:bg-primary-cyan/50 mt-2 flex-shrink-0" />
                                        Learned game development fundamentals using Unity 3D and C# scripting.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brown/50 dark:bg-primary-cyan/50 mt-2 flex-shrink-0" />
                                        Designed basic 2D/3D environments with character movement and object interactions.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brown/50 dark:bg-primary-cyan/50 mt-2 flex-shrink-0" />
                                        Implemented assets, animations, physics components, and UI elements.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brown/50 dark:bg-primary-cyan/50 mt-2 flex-shrink-0" />
                                        Gained hands-on experience with scene management, debugging, and game testing.
                                    </li>
                                </ul>
                            </SpotlightCard>
                        </motion.div>
                    </div>

                    <div className="space-y-24">
                        {/* Education Section */}
                        <div className="w-full mt-24" ref={educationRef}>
                            <div className="flex items-center gap-4 mb-16">
                                <div className="p-3 bg-brown/10 dark:bg-primary-cyan/10 rounded-xl text-brown dark:text-primary-cyan">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-charcoal dark:text-white">Education Timeline</h3>
                            </div>

                            <div className="relative">
                                {/* Vertical Scroll Track */}
                                <div className="absolute left-12 top-8 bottom-8 w-[2px] bg-brown/10 dark:bg-primary-cyan/10 rounded-full hidden sm:block" />
                                
                                {/* Glowing Progress Line - Strictly Scroll Linked */}
                                <motion.div 
                                    className={`absolute left-12 top-8 bottom-8 w-[2px] rounded-full origin-top hidden sm:block z-0 ${theme === 'dark' ? 'bg-primary-cyan shadow-[0_0_15px_rgba(0,240,255,0.5)]' : 'bg-brown shadow-[0_0_15px_rgba(180,140,90,0.5)]'}`}
                                    style={{ scaleY }}
                                />

                                <div className="space-y-16">
                                    {education.map((item, idx) => (
                                        <div key={idx} className="relative pl-0 sm:pl-28 group">
                                            {/* Icon positioned ON the line - precisely centered and scroll-aware */}
                                            <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden sm:flex w-12 h-12 items-center justify-center">
                                                <EducationIcon 
                                                    progress={scrollYProgress} 
                                                    index={idx} 
                                                    total={education.length} 
                                                    theme={theme} 
                                                    icon={item.icon} 
                                                />
                                            </div>

                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                <SpotlightCard
                                                    spotlightColor={theme === 'light' ? "rgba(180, 140, 90, 0.1)" : "rgba(0, 240, 255, 0.1)"}
                                                    className="p-8 rounded-[2rem] bg-white/40 dark:bg-white/5 border border-brown/10 dark:border-white/10 hover:border-brown/30 dark:hover:border-primary-cyan/30 transition-all shadow-sm"
                                                >
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                                        <div>
                                                            <span className="text-xs font-bold text-brown/60 dark:text-primary-cyan/60 uppercase tracking-[0.2em]">{item.period}</span>
                                                            <h4 className="text-2xl font-bold text-charcoal dark:text-white mt-1 group-hover:text-brown dark:group-hover:text-primary-cyan transition-colors">{item.title}</h4>
                                                            <p className="text-gray-600 dark:text-gray-400 font-medium mt-1">{item.institution}</p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <span className="px-5 py-2 bg-brown/10 dark:bg-primary-cyan/10 text-brown dark:text-primary-cyan rounded-full text-xs font-bold ring-1 ring-inset ring-brown/20 dark:ring-primary-cyan/20 group-hover:bg-brown dark:group-hover:bg-primary-cyan group-hover:text-white dark:group-hover:text-black transition-all">
                                                                {item.score}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </SpotlightCard>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Certifications Section */}
                        <div className="w-full">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-brown/10 dark:bg-primary-cyan/10 rounded-xl text-brown dark:text-primary-cyan">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-charcoal dark:text-white">Certifications</h3>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {certifications.map((cert, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        whileHover={{ y: -5 }}
                                        className="group relative h-72 rounded-[2rem] bg-white dark:bg-white/5 border border-brown/40 dark:border-white/10 hover:border-brown dark:hover:border-primary-cyan transition-all p-10 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl"
                                    >
                                        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                                            <motion.div
                                                className="absolute -right-12 top-1/2 -translate-y-1/2 w-[80%] h-[70%] opacity-0 group-hover:opacity-40 group-hover:-rotate-6 translate-x-24 group-hover:translate-x-0 transition-all duration-1000 blur-[1px] group-hover:blur-0"
                                                style={{
                                                    backgroundImage: `url(${cert.image})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'top',
                                                    backgroundRepeat: 'no-repeat',
                                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                                                }}
                                            />
                                        </div>

                                        <div className="relative z-20 max-w-[75%] transition-transform duration-500 group-hover:translate-x-2">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-2 h-2 rounded-full bg-brown dark:bg-primary-cyan animate-pulse shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
                                                <span className="text-xs font-bold text-brown/60 dark:text-primary-cyan/60 uppercase tracking-[0.2em]">{cert.date}</span>
                                            </div>
                                            <h4 className="text-2xl font-bold text-charcoal dark:text-white leading-tight group-hover:text-brown dark:group-hover:text-primary-cyan transition-all duration-300 break-words [text-shadow:_0_1px_20px_rgb(0_0_0_/_10%)] group-hover:[text-shadow:_0_1px_30px_rgb(0_0_0_/_40%)]">
                                                {cert.title}
                                            </h4>
                                            <p className="text-sm font-medium text-gray-700 dark:text-gray-400 mt-4 backdrop-blur-[2px] inline-block py-1 rounded-lg">{cert.provider}</p>
                                        </div>

                                        <div className="relative z-30 flex justify-between items-end">
                                            <div className="p-4 rounded-2xl bg-brown/10 dark:bg-primary-cyan/10 text-brown dark:text-primary-cyan group-hover:bg-brown dark:group-hover:bg-primary-cyan group-hover:text-white dark:group-hover:text-black transition-all shadow-lg border border-brown/20 dark:border-primary-cyan/20">
                                                <Award className="w-6 h-6" />
                                            </div>
                                            <motion.a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{
                                                    scale: 1.05,
                                                    backgroundColor: theme === 'dark' ? '#000000' : 'rgba(180, 140, 90, 0.1)'
                                                }}
                                                className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-brown dark:border-primary-cyan text-brown dark:text-primary-cyan opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 shadow-[0_0_20px_rgba(0,240,255,0.1)] font-bold text-[11px] bg-transparent cursor-pointer no-underline"
                                            >
                                                Verify Credential
                                            </motion.a>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
