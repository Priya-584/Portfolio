"use client";

import { useRef, useState, useEffect } from "react";
import { experienceData } from "@/constants/experience";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion, useInView } from "framer-motion";

const ExperienceCard = ({ job, index }: { job: typeof experienceData[0]; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isMobile, setIsMobile] = useState(true); // Default to mobile for safety (SSR/hydration)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const slideVariant = {
        hidden: isMobile
            ? { opacity: 0, y: 50, x: 0 }
            : { opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 0 },
        visible: { opacity: 1, x: 0, y: 0 }
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideVariant}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center gap-6 md:gap-0 justify-between md:justify-normal md:odd:flex-row-reverse group"
        >
            {/* Timeline Dot with Blinking Effect */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-secondary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-muted-foreground relative">
                <div className="w-3 h-3 bg-primary rounded-full relative z-10" />
                <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute inset-0 rounded-full bg-primary"
                    animate={{ scale: [1, 2, 1], opacity: [0.2, 0, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            <div className="flex-1 min-w-0 md:flex-none md:w-[calc(50%-2.5rem)] bg-secondary/50 p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row justify-between mb-2">
                    <h3 className="font-bold text-foreground text-lg truncate pr-2">{job.role}</h3>
                    <time className="text-xs text-muted-foreground font-mono self-start sm:self-center bg-secondary px-2 py-1 rounded border border-border shrink-0">{job.period}</time>
                </div>
                <div className="text-primary text-sm font-medium mb-3">{job.company}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    {job.description}
                </p>
            </div>
        </motion.div>
    );
};

export const Experience = () => {
    return (
        <Section id="experience" className="bg-background overflow-hidden relative">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Career Path</h2>
                    <p className="text-4xl font-bold text-foreground">Experience</p>
                </motion.div>

                <div className="space-y-10 md:space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
                    {experienceData.slice().reverse().map((job, index) => (
                        <ExperienceCard key={job.id} job={job} index={index} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};
