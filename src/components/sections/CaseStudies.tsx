"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/constants/caseStudies";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import SplitText from "@/components/ui/SplitText";
import CountUp from "@/components/ui/CountUp";
import { ArrowUpRight } from "lucide-react";

// Simplified Card Component that slides in
const AnimatedProjectCard = ({ study, index }: { study: typeof caseStudies[0]; index: number }) => {
    const isEven = index % 2 === 0;

    // Determine initial X direction based on index
    const initialDescX = isEven ? -100 : 100;
    const initialVisualX = isEven ? 100 : -100;

    return (
        <div className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-12 items-center mb-16 md:mb-20 last:mb-0 overflow-hidden md:overflow-visible py-5">
            {/* 
               We will animate the Text Block and Image Block coming from opposite sides
               Card Index Even: Text Left, Image Right (Standard)
               Card Index Odd: Image Left, Text Right (Zig-Zag)
             */}

            {/* Visual Side */}
            <motion.div
                initial={{ opacity: 0, x: initialVisualX }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`col-span-12 md:col-span-7 ${isEven ? "md:order-1" : "md:order-2"}`}
            >
                <div className="premium-border-container shadow-2xl shadow-primary/20 transition-all duration-500 hover:shadow-primary/10 group aspect-16/10">
                    <div className="premium-border-content p-1">
                        <div className="relative w-full h-full overflow-hidden rounded-2xl bg-secondary/5">
                            <div className="absolute inset-0 bg-linear-to-br from-background via-transparent to-transparent opacity-60 z-10" />

                            {/* Overlay Gradient */}
                            <div
                                className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle at center, ${study.colors[1]} 0%, transparent 70%)`
                                }}
                            />

                            {/* Image */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={study.image}
                                alt={study.title}
                                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
                initial={{ opacity: 0, x: initialDescX }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className={`col-span-12 md:col-span-5 relative z-20 ${isEven ? "md:order-2" : "md:order-1"}`}
            >
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-primary/50" />
                        <span className="text-primary font-medium tracking-widest uppercase text-xs">
                            {study.category}
                        </span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                        {study.title}
                    </h3>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                        {study.problem}
                    </p>

                    <div className="space-y-4 border-l-2 border-primary/20 pl-6 py-2">
                        <div>
                            <h4 className="text-foreground font-semibold mb-1">Outcome</h4>
                            <p className="text-sm text-muted-foreground">{study.outcome}</p>
                        </div>
                    </div>

                    <div className="pt-4">
                        <a
                            href={study.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 group/btn cursor-pointer w-fit"
                        >
                            <span className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:border-primary transition-all duration-300">
                                <ArrowUpRight className="w-5 h-5 text-foreground group-hover/btn:text-background transition-colors" />
                            </span>
                            <span className="font-semibold text-foreground group-hover/btn:text-primary transition-colors">
                                View Prototype
                            </span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export const CaseStudies = () => {
    return (
        <Section id="work" className="bg-background relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

            <Container>
                <div className="mb-20 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="col-span-1 md:col-span-2 flex flex-col gap-4"
                        >
                            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase">
                                Selected Work
                            </h2>
                            <div className="max-w-2xl">
                                <SplitText
                                    text="Recent Projects"
                                    className="text-5xl md:text-7xl font-bold text-foreground tracking-tight"
                                    delay={50}
                                    duration={0.6}
                                    tag="h1"
                                    textAlign="left"
                                />
                            </div>
                            <p className="text-muted-foreground text-xl max-w-xl mt-4">
                                A deep dive into my design process,Prototyping and real client websites/mobile-apps.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="col-span-1 flex flex-col gap-6"
                        >
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <span className="flex items-baseline gap-1 text-4xl font-bold text-foreground">
                                        <CountUp to={8} from={0} duration={2} separator="," />+
                                    </span>
                                    <span className="text-sm text-muted-foreground uppercase tracking-wider">SaaS Projects</span>
                                </div>
                                <div>
                                    <span className="flex items-baseline gap-1 text-4xl font-bold text-foreground">
                                        <CountUp to={5} from={0} duration={2} /> +
                                    </span>
                                    <span className="text-sm text-muted-foreground uppercase tracking-wider">Blockchain</span>
                                </div>
                                <div>
                                    <span className="flex items-baseline gap-1 text-4xl font-bold text-foreground">
                                        <CountUp to={12} from={0} duration={2} />+
                                    </span>
                                    <span className="text-sm text-muted-foreground uppercase tracking-wider">E-commerce</span>
                                </div>
                                <div>
                                    <span className="flex items-baseline gap-1 text-4xl font-bold text-foreground">
                                        <CountUp to={25} from={0} duration={2} /> +
                                    </span>
                                    <span className="text-sm text-muted-foreground uppercase tracking-wider">Others</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="flex flex-col">
                    {[...caseStudies].reverse().slice(0, 4).map((study, index) => (
                        <AnimatedProjectCard key={study.id} study={study} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center mt-20"
                >
                    <Button
                        href="/projects"
                        variant="primary"
                        className="px-10 py-5 h-auto text-lg"
                    >
                        See More Projects
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Button>
                </motion.div>
            </Container>
        </Section>
    );
};
