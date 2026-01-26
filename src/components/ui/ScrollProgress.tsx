"use client";

import { motion, useSpring, useScroll } from "motion/react";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            id="scroll-indicator"
            style={{
                scaleX,
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                height: 4,
                originX: 0,
                backgroundColor: "var(--primary)",
                zIndex: 100,
            }}
        />
    );
}
