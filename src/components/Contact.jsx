import React, { useState } from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const CONTACT_EMAIL = "rohit06717@gmail.com";
const EMAILJS_SERVICE_ID = "service_k8mxscs";
const EMAILJS_TEMPLATE_ID = "template_bnln5d2";
const EMAILJS_PUBLIC_KEY = "gyhjfbDnJf73dGBXH";

// Simplified inline background component to replace StarsCanvas if desired, or just use CSS
const CyberGrid = () => (
    <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e10_1px,transparent_1px),linear-gradient(to_bottom,#22c55e10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
    </div>
);

const Contact = ({ theme }) => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const getSubmitErrorMessage = (error) => {
        const message = error?.text || error?.message || "Unknown error";
        return `Message could not be sent. EmailJS error: ${message}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        let alertMessage = "";

        try {
            const visitorName = form.name.trim();
            const visitorEmail = form.email.trim();
            const visitorMessage = form.message.trim();
            const subject = `Portfolio message from ${visitorName || "Visitor"}`;
            const sentAt = new Intl.DateTimeFormat("en-IN", {
                dateStyle: "medium",
                timeStyle: "short",
            }).format(new Date());

            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    to_name: "Rohith",
                    to_email: CONTACT_EMAIL,
                    recipient_email: CONTACT_EMAIL,
                    email: CONTACT_EMAIL,
                    subject,
                    from_name: visitorName,
                    from_email: visitorEmail,
                    reply_to: visitorEmail,
                    visitor_email: visitorEmail,
                    sender_email: visitorEmail,
                    message: visitorMessage,
                    sent_at: sentAt,
                    site_name: "Portfolio Site",
                },
                {
                    publicKey: EMAILJS_PUBLIC_KEY,
                }
            );

            alertMessage = "Thank you. Your message was sent successfully.";
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS contact form failed:", error);
            alertMessage = getSubmitErrorMessage(error);
        } finally {
            setLoading(false);
            window.setTimeout(() => alert(alertMessage), 0);
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden bg-[#f5f2eb] dark:bg-black flex items-center justify-center min-h-screen transition-colors duration-300">
            {theme === 'dark' && <CyberGrid />}

            {/* Optional: Blurry Glow Orbs - Theme Aware */}
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-brown/20 dark:bg-primary-cyan/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-brown/10 dark:bg-primary-cyan/10 rounded-full blur-[100px]" />

            <TiltCard className="w-full max-w-4xl p-1 md:p-2 rounded-3xl bg-gradient-to-br from-brown/30 via-transparent to-brown/10 dark:from-primary-cyan/50 dark:via-transparent dark:to-primary-cyan/10">
                <div className="bg-cream/90 dark:bg-black/90 backdrop-blur-xl rounded-[22px] p-8 md:p-12 border border-brown/20 dark:border-primary-cyan/20 shadow-[0_0_30px_rgba(74,59,50,0.1)] dark:shadow-[0_0_30px_rgba(34,197,94,0.15)] h-full transition-colors">

                    {/* Header Content with Depth */}
                    <div className="text-center mb-12" style={{ transform: "translateZ(30px)" }}>
                        <p className="text-brown dark:text-primary-cyan font-mono tracking-widest text-sm mb-2">&lt;CONTACT /&gt;</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-charcoal dark:text-white mb-4">Get In Touch</h2>
                        <div className="w-20 h-1 bg-brown dark:bg-primary-cyan mx-auto rounded-full shadow-lg" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-12">

                        {/* Contact Info (Floating) */}
                        <div className="flex-1 space-y-8" style={{ transform: "translateZ(20px)" }}>
                            <a href="https://wa.me/916300679794" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-gray-600 dark:text-gray-300 transition-colors cursor-pointer">
                                <div className="w-12 h-12 rounded-lg bg-brown/10 dark:bg-primary-cyan/10 flex items-center justify-center text-brown dark:text-primary-cyan group-hover:scale-110 group-hover:shadow-lg transition-all">
                                    <Phone size={20} />
                                </div>
                                <span className="font-medium tracking-wide">+91 6300679794</span>
                            </a>
                            <a href={`mailto:${CONTACT_EMAIL}`} className="group flex items-center gap-4 text-gray-600 dark:text-gray-300 transition-colors cursor-pointer">
                                <div className="w-12 h-12 rounded-lg bg-brown/10 dark:bg-primary-cyan/10 flex items-center justify-center text-brown dark:text-primary-cyan group-hover:scale-110 group-hover:shadow-lg transition-all">
                                    <Mail size={20} />
                                </div>
                                <span className="font-medium tracking-wide">{CONTACT_EMAIL}</span>
                            </a>
                            <a href="https://www.google.com/maps/search/?api=1&query=Madanapalle%2C%20Andhra%20Pradesh%20515326" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-gray-600 dark:text-gray-300 transition-colors cursor-pointer">
                                <div className="w-12 h-12 rounded-lg bg-brown/10 dark:bg-primary-cyan/10 flex items-center justify-center text-brown dark:text-primary-cyan group-hover:scale-110 group-hover:shadow-lg transition-all">
                                    <MapPin size={20} />
                                </div>
                                <span className="font-medium tracking-wide">Madanapalle, Andhra Pradesh 515326</span>
                            </a>
                        </div>

                        {/* Form (Floating Higher) */}
                        <form onSubmit={handleSubmit} className="flex-[1.5] space-y-6" style={{ transform: "translateZ(50px)" }}>
                            <div className="relative group">
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white dark:bg-white/5 border border-brown/20 dark:border-white/10 rounded-lg px-6 py-4 text-charcoal dark:text-white outline-none focus:border-brown dark:focus:border-primary-cyan focus:bg-white dark:focus:bg-white/10 transition-all font-medium peer"
                                    placeholder=" "
                                />
                                <label className="absolute left-6 top-4 text-gray-500 pointer-events-none transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-brown dark:peer-focus:text-primary-cyan peer-focus:bg-cream dark:peer-focus:bg-black peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-brown dark:peer-[:not(:placeholder-shown)]:text-primary-cyan peer-[:not(:placeholder-shown)]:bg-cream dark:peer-[:not(:placeholder-shown)]:bg-black peer-[:not(:placeholder-shown)]:px-2">Your Name</label>
                            </div>

                            <div className="relative group">
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white dark:bg-white/5 border border-brown/20 dark:border-white/10 rounded-lg px-6 py-4 text-charcoal dark:text-white outline-none focus:border-brown dark:focus:border-primary-cyan focus:bg-white dark:focus:bg-white/10 transition-all font-medium peer"
                                    placeholder=" "
                                />
                                <label className="absolute left-6 top-4 text-gray-500 pointer-events-none transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-brown dark:peer-focus:text-primary-cyan peer-focus:bg-cream dark:peer-focus:bg-black peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-brown dark:peer-[:not(:placeholder-shown)]:text-primary-cyan peer-[:not(:placeholder-shown)]:bg-cream dark:peer-[:not(:placeholder-shown)]:bg-black peer-[:not(:placeholder-shown)]:px-2">Your Email</label>
                            </div>

                            <div className="relative group">
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white dark:bg-white/5 border border-brown/20 dark:border-white/10 rounded-lg px-6 py-4 text-charcoal dark:text-white outline-none focus:border-brown dark:focus:border-primary-cyan focus:bg-white dark:focus:bg-white/10 transition-all font-medium peer resize-none"
                                    placeholder=" "
                                ></textarea>
                                <label className="absolute left-6 top-4 text-gray-500 pointer-events-none transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-brown dark:peer-focus:text-primary-cyan peer-focus:bg-cream dark:peer-focus:bg-black peer-focus:px-2 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-brown dark:peer-[:not(:placeholder-shown)]:text-primary-cyan peer-[:not(:placeholder-shown)]:bg-cream dark:peer-[:not(:placeholder-shown)]:bg-black peer-[:not(:placeholder-shown)]:px-2">Your Message</label>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={loading}
                                aria-busy={loading}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-full bg-brown dark:bg-primary-cyan text-white dark:text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-light-brown dark:hover:bg-cyan-400 hover:shadow-lg transition-all ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                            >
                                {loading ? "Sending..." : "Send Message"} <Send size={20} />
                            </motion.button>
                        </form>
                    </div>
                </div>
            </TiltCard>
        </section>
    );
};

export default Contact;
