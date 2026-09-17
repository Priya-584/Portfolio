"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import SplitText from "@/components/ui/SplitText";
import { Instagram, TrendingUp, Users, Heart, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { getAssetPath } from "@/utils/path";

const AutoScrollGallery = ({ images, duration = 2000 }: { images: string[], duration?: number }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, duration);
        return () => clearInterval(interval);
    }, [images.length, duration]);

    return (
        <div className="w-full h-auto overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
                <motion.img
                    key={images[index]}
                    src={getAssetPath(images[index])}
                    alt={`Gallery image ${index + 1}`}
                    initial={{ opacity: 0, scale: 1.1, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9, x: -20 }}
                    transition={{ duration: 0.8, ease: "anticipate" }}
                    className="w-full h-auto object-contain block rounded-2xl"
                />
            </AnimatePresence>
        </div>
    );
};

export const SocialMedia = () => {
    return (
        <Section id="social" className="bg-background relative overflow-hidden py-24">
            {/* Ambient decoration */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start border-t border-border/50 pt-24">
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
                            I handle the present company social media accounts, creating engaging posts that drive interaction and growth. From strategy to creative execution, I ensure the brand voice is consistent and impactful across all platforms.
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

                    {/* Visuals - Split Layout: Video (Left) + Stacked Images (Right) */}
                    <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-4 items-center">

                        {/* Column 1: Video (Larger) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            animate={{
                                y: [15, 0, 15],
                            }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            transition={{
                                y: {
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                duration: 0.8,
                                delay: 0.1
                            }}
                            className="w-full h-full min-h-[400px] relative group cursor-pointer"
                        >
                            <div className="premium-border-container shadow-2xl shadow-primary/20 h-full">
                                <div className="premium-border-content p-1 h-full">
                                    <video
                                        src={getAssetPath("/images/Techpyro Diwali vdo.mp4")}
                                        className="w-full h-full object-contain rounded-2xl"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    />
                                </div>
                            </div>

                            {/* Decorative elements behind the video */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl -z-10 group-hover:bg-purple-500/40 transition-colors" />
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10 group-hover:bg-primary/40 transition-colors" />
                        </motion.div>

                        {/* Column 2: All Images (Single Frame) */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            animate={{
                                y: [0, -20, 0],
                            }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            transition={{
                                y: {
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                },
                                duration: 0.8,
                                delay: 0.2
                            }}
                            className="w-full relative group cursor-pointer"
                        >
                            <div className="premium-border-container shadow-2xl shadow-primary/20">
                                <div className="premium-border-content p-1">
                                    <AutoScrollGallery
                                        images={[
                                            "/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg", "/images/5.jpg",
                                            "/images/6.jpg", "/images/7.jpg", "/images/8.jpg", "/images/9.jpg", "/images/10.jpg",
                                            "/images/1.1.jpg", "/images/1.2.jpg", "/images/1.3.jpg", "/images/1.4.jpg", "/images/1.5.jpg"
                                        ]}
                                        duration={2000}
                                    />
                                </div>
                            </div>

                            {/* Floating Social Icons */}
                            <motion.div
                                animate={{ y: [0, -15, 0], opacity: [0.5, 0.9, 0.5], scale: [1, 1.1, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-10 md:-top-12 right-0 md:right-10 text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)] pointer-events-none"
                            >
                                <Heart className="w-6 h-6 md:w-8 md:h-8 fill-current" />
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4], rotate: [0, 360] }}
                                transition={{
                                    y: { duration: 4, repeat: Infinity, delay: 0.5 },
                                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                                }}
                                className="absolute -top-12 md:-top-14 left-4 md:left-20 text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] pointer-events-none"
                            >
                                <Instagram className="w-8 h-8 md:w-10 md:h-10" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -10, 0], opacity: [0.4, 0.8, 0.4], x: [0, 10, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
                                className="absolute -bottom-10 md:-bottom-12 right-4 md:right-20 text-[#0077b5] drop-shadow-[0_0_10px_rgba(0,119,181,0.5)] pointer-events-none"
                            >
                                <Linkedin className="w-8 h-8 md:w-10 md:h-10 fill-current" />
                            </motion.div>

                            {/* Middle Right - Growth Icon */}
                            <motion.div
                                animate={{ x: [0, 15, 0], opacity: [0.4, 0.9, 0.4], scale: [1, 1.2, 1] }}
                                transition={{ duration: 3.5, repeat: Infinity }}
                                className="absolute top-1/2 -right-2 md:-right-10 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.6)] pointer-events-none"
                            >
                                <TrendingUp className="w-9 h-9 md:w-12 md:h-12" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
