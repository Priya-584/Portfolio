"use client";

import { skillsData } from "@/constants/skills";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import SplitText from "@/components/ui/SplitText";

export const Skills = () => {
    return (
        <Section id="skills" className="bg-background">
            <Container>
                <div className="mb-16">
                    <h2 className="text-sm font-semibold tracking-widest text-purple-500 uppercase mb-3">Expertise</h2>
                    <SplitText
                        text="Tools & Methods"
                        className="text-4xl font-bold text-foreground text-left opacity-0"
                        delay={40}
                        duration={0.8}
                        tag="h2"
                        textAlign="left"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {skillsData.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold text-foreground border-b border-border pb-4">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {group.items.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + skillIndex * 0.05 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-full text-sm font-medium hover:border-foreground/50 transition-colors cursor-default group"
                                    >
                                        <span
                                            className="text-lg transition-transform duration-300 group-hover:rotate-12"
                                            style={{ color: skill.color === "#000000" ? "var(--foreground)" : skill.color }}
                                        >
                                            <skill.icon />
                                        </span>
                                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};
