"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > window.innerHeight * 2) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="fixed bottom-8 right-8 z-50 pointer-events-auto"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="relative flex items-center justify-center">
                        {/* Outer Glass Ring Pulse */}
                        <motion.div
                            animate={{
                                scale: [1, 1.15, 1],
                                opacity: [0.3, 0.1, 0.3],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute inset-0 -m-3 rounded-full bg-primary/20 blur-md pointer-events-none"
                        />

                        {/* Main Button */}
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative flex items-center justify-center p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(var(--primary),0.3)] transition-shadow duration-300"
                        >
                            {/* Rich Gradient Background */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-100 group-hover:opacity-90 transition-opacity duration-300" />

                            {/* Glass overlay for shine */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white/30 opacity-50" />

                            {/* Border Ring */}
                            <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors" />

                            {/* Animated Arrow */}
                            <motion.div
                                animate={isHovered ? { y: -3 } : { y: 0 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="relative z-10 text-white drop-shadow-sm"
                            >
                                <ArrowUp className="w-6 h-6 stroke-[2.5px]" />
                            </motion.div>
                        </motion.button>

                        {/* Floating Tooltip/Label (Optional, minimal visibility) */}
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? -10 : -5 }}
                            className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-background/80 backdrop-blur-md border border-border text-xs font-medium text-foreground whitespace-nowrap shadow-sm pointer-events-none"
                        >
                            Back to Top
                        </motion.span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
