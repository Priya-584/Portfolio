"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { processData } from "@/constants/process";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import SplitTextComponent from "@/components/ui/SplitText";

const TimelineItem = ({ step, index }: { step: typeof processData[0]; index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`relative flex items-center justify-between md:justify-center w-full mb-8 md:mb-12 last:mb-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
            {/* Center Dot on Line */}
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{
                    scale: 1,
                }}
                animate={{
                    boxShadow: [
                        "0 0 0 4px hsl(var(--background))",
                        "0 0 0 4px hsl(var(--background)), 0 0 0 8px hsl(var(--primary))",
                        "0 0 0 4px hsl(var(--background))"
                    ]
                }}
                viewport={{ margin: "-50px" }}
                transition={{
                    scale: { duration: 0.5 },
                    boxShadow: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full z-10"
            />

            {/* Content Side */}
            <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isEven ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"}`}>
                <motion.div
                    whileInView={{
                        borderColor: ["rgba(var(--primary), 0.1)", "rgba(var(--primary), 0.5)", "rgba(var(--primary), 0.1)"],
                        boxShadow: [
                            "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                            "0 10px 30px -5px rgba(var(--primary), 0.15)",
                            "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                        ]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={`p-6 rounded-2xl bg-secondary/5 border border-primary/20 transition-all duration-300 group relative overflow-hidden`}
                >
                    {/* Decorative Number Background: Fixed to right on mobile, alternating on desktop */}
                    <span className={`absolute -top-1 right-4 ${isEven ? "md:left-4 md:right-auto" : "md:right-4"} text-8xl font-bold text-foreground/5 pointer-events-none select-none`}>
                        0{index + 1}
                    </span>

                    <div className={`flex flex-col gap-4 ${isEven ? "md:items-end" : "md:items-start"}`}>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-2">
                            <step.icon size={24} />
                        </div>

                        <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                        <SplitTextComponent
                            text={step.description}
                            className="text-muted-foreground leading-relaxed text-start"
                            delay={10}
                            duration={0.2}
                            tag="p"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Empty Side for Layout Balance (Desktop only) */}
            <div className="hidden md:block w-5/12" />
        </motion.div>
    );
};

export const Process = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <Section id="process" className="bg-background relative">
            <Container>
                <div className="text-center mb-16 max-w-3xl mx-auto space-y-6">
                    <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
                        Workflow
                    </h2>
                    <SplitTextComponent
                        text="My Creative Process"
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight"
                        delay={50}
                        duration={0.6}
                        tag="h2"
                        textAlign="center"
                    />
                    <p className="text-xl text-muted-foreground">
                        A structured approach to solving complex problems.
                    </p>
                </div>

                <div ref={containerRef} className="relative max-w-5xl mx-auto">
                    {/* Central Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-border/30 h-full">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-primary via-purple-500 to-primary/50 origin-top"
                        />
                    </div>

                    <div className="flex flex-col relative z-10 py-10">
                        {processData.map((step, index) => (
                            <TimelineItem key={step.id} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
};
