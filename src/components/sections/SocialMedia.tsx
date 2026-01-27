"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import SplitText from "@/components/ui/SplitText";
import { Instagram, TrendingUp, Users, Heart, X } from "lucide-react";
import LogoLoop from "@/components/ui/LogoLoop";
import Masonry from "@/components/ui/Masonry";
import { useState } from "react";

const logoDesigns = [
    { src: "/images/logo_1.png", alt: "Logo Design 1" },
    { src: "/images/logo_2.jpeg", alt: "Logo Design 2" },
    { src: "/images/logo_3.jpeg", alt: "Logo Design 3" },
    { src: "/images/logo_4.png", alt: "Logo Design 4" },
    { src: "/images/logo_5.jpeg", alt: "Logo Design 5" },
];

const masonryItems = [
    { id: "1", img: "/images/priya_1.jpeg", height: 400 },
    { id: "2", img: "/images/priya_2.jpeg", height: 300 },
    { id: "3", img: "/images/priya_6.png", height: 500 },
    { id: "4", img: "/images/priya_7.png", height: 350 },
    { id: "5", img: "/images/project1.jpg", height: 450 },
    { id: "6", img: "/images/project2.jpg", height: 300 },
    { id: "7", img: "/images/priya_3.jpeg", height: 400 },
    { id: "8", img: "/images/priya_4.jpeg", height: 550 },
    { id: "9", img: "/images/project3.jpg", height: 350 },
    { id: "10", img: "/images/priya_5.jpeg", height: 300 },
    { id: "11", img: "/images/NIFT.png", height: 400 },
    { id: "12", img: "/images/dingDong.png", height: 350 },
];

const posts = [
    // ... keep existing posts for reference if needed or remove 
    // ...
];

export const SocialMedia = () => {
    const [selectedLogo, setSelectedLogo] = useState<string | null>(null);

    return (
        <Section className="bg-background relative overflow-hidden py-24">
            {/* ... keep decoration ... */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Text Content */}
                    <div className="space-y-8 lg:sticky lg:top-24">
                        <div className="flex flex-col gap-2">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="text-primary font-bold tracking-widest uppercase text-sm"
                            >
                                Social Media Management
                            </motion.h2>
                            <SplitText
                                text="Building Digital Communities"
                                className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
                                delay={50}
                                duration={0.6}
                                tag="h2"
                                textAlign="left"
                            />
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-muted-foreground leading-relaxed"
                        >
                            I handle the present company social media accounts, creating engaging posts that drive interaction and growth. From logo design to full-scale social strategies, I ensure the brand voice is consistent and impactful.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            <div className="p-4 rounded-xl bg-secondary/5 border border-border/50">
                                <TrendingUp className="w-8 h-8 text-primary mb-2" />
                                <div className="text-2xl font-bold text-foreground">150%</div>
                                <div className="text-sm text-muted-foreground">Engagement Growth</div>
                            </div>
                            <div className="p-4 rounded-xl bg-secondary/5 border border-border/50">
                                <Users className="w-8 h-8 text-primary mb-2" />
                                <div className="text-2xl font-bold text-foreground">10k+</div>
                                <div className="text-sm text-muted-foreground">Community Members</div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-primary font-medium"
                        >
                            <p>Delivering consistent growth through data-driven strategies.</p>
                        </motion.div>
                    </div>

                    {/* Visuals - Masonry Style */}
                    <div className="relative w-full min-h-[400px] lg:min-h-[800px] my-4 lg:my-0">
                        <Masonry
                            items={masonryItems}
                            ease="power3.out"
                            duration={0.6}
                            stagger={0.05}
                            animateFrom="bottom"
                            scaleOnHover={true}
                            hoverScale={0.98}
                            blurToFocus={true}
                            colorShiftOnHover={false}
                        />
                    </div>
                </div>

                {/* Logo Design Showcase */}
                <div className="flex flex-col items-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Here are some of my logo designs
                        </h3>
                    </motion.div>

                    <div className="w-full relative py-8">
                        <LogoLoop
                            logos={logoDesigns}
                            speed={50}
                            direction="left"
                            logoHeight={80}
                            gap={60}
                            pauseOnHover={true}
                            scaleOnHover={true}
                            fadeOut={true}
                            fadeOutColor="hsl(var(--background))"
                            renderItem={(item) => (
                                <div
                                    className="cursor-pointer transition-transform hover:scale-110"
                                    onClick={() => item.src && setSelectedLogo(item.src)}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={item.src}
                                        alt={item.alt || "Logo"}
                                        className="h-20 w-auto object-contain pointer-events-none" // prevent drag but allow click on parent
                                    />
                                </div>
                            )}
                        />
                    </div>
                </div>
            </Container>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedLogo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedLogo(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-auto max-h-[90vh] flex items-center justify-center p-0"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedLogo(null)}
                                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-foreground/5 hover:bg-foreground/10 text-foreground rounded-full p-2 backdrop-blur-sm border border-border transition-all z-50 shadow-sm"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={selectedLogo}
                                alt="Selected Logo"
                                className="w-auto h-auto max-w-full max-h-[85vh] object-contain drop-shadow-2xl rounded-lg bg-background/50 backdrop-blur-sm border border-border/50"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Section>
    );
};
