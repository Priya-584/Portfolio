"use client";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export const ScrollDownIndicator = () => {
    const { scrollY } = useScroll();
    const [isVisible, setIsVisible] = useState(true);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsReady(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 10) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    });

    return (
        <AnimatePresence>
            {isVisible && isReady && (
                <motion.div
                    key="scroll-indicator"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }} // Smooth entry after 5s
                    className="absolute -bottom-15 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/70 mb-1 font-medium animate-pulse">
                        Start Scroll
                    </span>
                    <div className="flex flex-col items-center -space-y-4">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    opacity: [0.2, 0.8, 0.2],
                                    y: [0, 8, 0]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.3,
                                    ease: "easeInOut"
                                }}
                            >
                                <ChevronDown className="w-6 h-6 text-foreground/80 dark:text-primary" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
