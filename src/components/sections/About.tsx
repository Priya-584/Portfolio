"use client";

import { aboutData } from "@/constants/about";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import CountUp from "@/components/ui/CountUp";
import SplitText from "@/components/ui/SplitText";

export const About = () => {
    return (
        <Section id="about" className="bg-background text-foreground">
            <Container>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-sm font-semibold tracking-widest text-purple-500 uppercase">
                            {aboutData.title}
                        </h2>
                        <SplitText
                            text={aboutData.story}
                            className="text-3xl md:text-4xl font-bold leading-tight text-left opacity-0"
                            delay={20}
                            duration={0.8}
                            tag="h3"
                            textAlign="left"
                            threshold={0.2}
                        />
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            {aboutData.philosophy}
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 pt-8">
                            {aboutData.stats.map((stat, index) => {
                                const number = parseInt(stat.value);
                                const suffix = stat.value.replace(number.toString(), "");
                                return (
                                    <div key={index} className="space-y-1">
                                        <p className="text-3xl font-bold text-foreground flex items-baseline">
                                            <CountUp
                                                from={0}
                                                to={number}
                                                separator=","
                                                direction="up"
                                                duration={1}
                                                className="count-up-text"
                                            />
                                            <span>{suffix}</span>
                                        </p>
                                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative w-full h-[60vh] bg-secondary rounded-xl overflow-hidden border border-border">
                            {/* Use Next.js Image Component in production, but for now simple img for compatibility with generic setup */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={aboutData.image}
                                alt="Profile"
                                className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
