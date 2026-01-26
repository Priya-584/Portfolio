"use client";

import { motion } from "framer-motion";
import { heroData } from "@/constants/hero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import SplitText from "@/components/ui/SplitText";
import ShinyText from "@/components/ui/ShinyText";

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden bg-background">
            {/* Dynamic Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <Container className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-1 space-y-6 md:space-y-8">
                    <SplitText
                        text={heroData.title}
                        className="text-5xl md:text-7xl font-bold tracking-wide text-foreground leading-[1] text-left opacity-0"
                        delay={30}
                        duration={1}
                        tag="h1"
                        textAlign="left"
                        threshold={0.1}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-muted-foreground max-w-lg leading-relaxed"
                    >
                        <ShinyText
                            text={heroData.subtitle}
                            disabled={false}
                            speed={3}
                            className="inline"
                            color="var(--muted-foreground)"
                            shineColor="var(--foreground)"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap gap-3 md:gap-4"
                    >
                        <Button href="#work">{heroData.ctaPrimary}</Button>
                        <Button href={heroData.ctaSecondary} variant="outline" target="_blank" rel="noopener noreferrer">Download Resume</Button>
                    </motion.div>
                </div>

                {/* Abstract or Hero Image Representation */}
                <motion.div
                    className="flex-1 relative aspect-square max-w-md w-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-secondary to-background border border-border p-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                        {/* You would place the profile or a hero graphic here. For now using a stylistic placeholder defined in CSS or structure */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={heroData.profileImage}
                            alt={heroData.title}
                            className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};
