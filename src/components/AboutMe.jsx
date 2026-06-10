import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { Mail } from 'lucide-react';

const AboutMe = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-cream dark:bg-dark-bg transition-colors duration-300 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-24 items-center">

                {/* Animation Section - Slides in from Left */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ amount: 0.3 }}
                    className="flex justify-center md:justify-end relative"
                >
                    <div className="relative w-full max-w-md">
                        {/* Decorative background glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-brown/20 to-transparent dark:from-primary-cyan/10 dark:to-transparent rounded-full blur-3xl -z-10"></div>

                        {/* 
                            NOTE: lottie-react requires the JSON object. 
                            I'll use a public Lottie URL and fetch it.
                         */}
                        <CodingAnimation />
                    </div>
                </motion.div>

                {/* Text Content - Slides in from Right */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ amount: 0.3 }}
                    className="text-left"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-6 relative inline-block">
                        About <span className="text-brown dark:text-primary-cyan">Me</span>
                        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-brown dark:bg-primary-cyan rounded-full"></span>
                    </h2>

                    <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p>
                            I&apos;m <span className="font-semibold text-brown dark:text-primary-cyan">Godduvelagala Rohith Kumar</span>, a Computer Science Engineering student at Madanapalle Institute of Technology &amp; Science. I focus on building practical full-stack applications that combine clean interfaces, secure backend systems, and AI-powered user experiences.
                        </p>
                        <p>
                            My work includes an AI-powered skincare e-commerce platform and an AI resume intelligence platform with semantic matching, resume optimization, and cloud deployment. I bring problem-solving, analytical thinking, team collaboration, management, and continuous learning into every project I build.
                        </p>
                    </div>

                    <div className="mt-8">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-brown dark:bg-primary-cyan text-white dark:text-black font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all cursor-pointer"
                        >
                            <Mail size={20} />
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

// Sub-component to handle fetching to keep spacing clean
const CodingAnimation = () => {
    const [animationData, setAnimationData] = React.useState(null);

    React.useEffect(() => {
        fetch('https://assets9.lottiefiles.com/packages/lf20_3ntisyac.json')
            .then(res => res.json())
            .then(data => setAnimationData(data))
            .catch(err => console.error("Lottie Load Error:", err));
    }, []);

    if (!animationData) return <div className="h-64 flex items-center justify-center text-brown dark:text-primary-cyan">Loading Animation...</div>;

    return <Lottie animationData={animationData} loop={true} />;
};

export default AboutMe;
