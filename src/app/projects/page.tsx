"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/constants/caseStudies";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import SplitText from "@/components/ui/SplitText";
import { ArrowUpRight, ExternalLink, Github, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const ProjectCard = ({ project, index }: { project: typeof caseStudies[0]; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
        >
            <div className="relative aspect-video overflow-hidden rounded-3xl bg-secondary/30 border border-border/50 group-hover:border-primary/30 transition-all duration-500 shadow-xl">
                {/* Image */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay - Darker for better text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-black/10 opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-linear-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.colors.map((color, i) => (
                            <div
                                key={i}
                                className="w-3 h-3 rounded-full border border-white/20"
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-md">
                        {project.title}
                    </h3>

                    <p className="text-white/90 text-sm line-clamp-2 overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-20 group-hover:mb-6 opacity-0 group-hover:opacity-100">
                        {project.problem}
                    </p>

                    <div className="flex items-center gap-4 transition-all duration-500 delay-100 max-h-0 group-hover:max-h-12 opacity-0 group-hover:opacity-100 overflow-hidden group-hover:overflow-visible">
                        <Button
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"

                            className="px-5 py-2.5 h-auto text-sm"
                        >
                            View Case Study
                            <ArrowUpRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Category Tag (Floating) */}
            <div className="absolute top-6 left-6 px-4 py-2 bg-black/70 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white z-20 shadow-lg">
                {project.category}
            </div>
        </motion.div>
    );
};

export default function ProjectsPage() {
    return (
        <main className="bg-background min-h-screen pt-20">
            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]" />
            </div>

            <Section id="all-projects" className="relative z-10">
                <Container>
                    <div className="max-w-5xl mx-auto mb-24 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center space-y-4"
                        >
                            <SplitText
                                text="Creative Projects"
                                className="text-5xl md:text-8xl font-black text-foreground tracking-tighter"
                                delay={40}
                                duration={1.2}
                                tag="h1"
                                textAlign="center"
                            />
                            <p className="text-muted-foreground text-xl md:text-2xl max-w-2xl pt-4 leading-relaxed mx-auto">
                                A curated collection of my work in UI/UX Design, developing digital solutions for global clients and startups.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {caseStudies.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>

                    {/* Compact CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-12 relative overflow-hidden p-10 md:p-16 rounded-[40px] bg-secondary/20 border border-border/50 backdrop-blur-2xl flex flex-col items-center text-center"
                    >
                        {/* Internal Background Glows */}
                        <div className="absolute top-0 right-[-10%] w-[50%] h-full bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center gap-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                                className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-1 shadow-inner"
                            >
                                <Layers size={24} />
                            </motion.div>

                            <div className="space-y-4 max-w-2xl">
                                <SplitText
                                    text="Want to see more?"
                                    className="text-3xl md:text-5xl font-bold text-foreground tracking-tighter leading-none"
                                    delay={40}
                                    duration={0.8}
                                    textAlign="center"
                                />
                                <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto leading-relaxed">
                                    Let&apos;s talk about your next project. I&apos;m always open to new opportunities and collaborations.
                                </p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="pt-2"
                            >
                                <Button
                                    href="/#contact"
                                    variant="primary"
                                    className="px-10 py-4 h-auto text-base md:text-lg shadow-xl shadow-primary/10 group"
                                >
                                    <span>Start a Project</span>
                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </Container>
            </Section>
        </main>
    );
}
