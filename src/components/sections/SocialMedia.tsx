"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import SplitText from "@/components/ui/SplitText";
import { Instagram, TrendingUp, Users, Heart, X, Linkedin } from "lucide-react";
import LogoLoop from "@/components/ui/LogoLoop";

import { useState, useEffect } from "react";

const logoDesigns = [
    { src: "/images/logo_1.png", alt: "Logo Design 1" },
    { src: "/images/logo_2.jpeg", alt: "Logo Design 2" },
    { src: "/images/logo_3.jpeg", alt: "Logo Design 3" },
    { src: "/images/logo_4.png", alt: "Logo Design 4" },
    { src: "/images/logo_5.jpeg", alt: "Logo Design 5" },
];

// Masonry items removed as layout changed to 3 frames
// const masonryItems = [ ... ];

const posts = [
    // ... keep existing posts for reference if needed or remove 
    // ...
];

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
                    src={images[index]}
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
                                        src="/images/Techpyro Diwali vdo.mp4"
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

                            {/* Floating Social Icons - Top Spacing */}
                            <motion.div
                                animate={{ y: [0, -15, 0], opacity: [0.5, 0.9, 0.5], scale: [1, 1.1, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-10 md:-top-12 right-4 md:right-10 text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                            >
                                <Heart className="w-6 h-6 md:w-8 md:h-8 fill-current" />
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0], opacity: [0.4, 0.8, 0.4], rotate: [0, 360] }}
                                transition={{
                                    y: { duration: 4, repeat: Infinity, delay: 0.5 },
                                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                                }}
                                className="absolute -top-12 md:-top-14 left-10 md:left-20 text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                            >
                                <Instagram className="w-8 h-8 md:w-10 md:h-10" />
                            </motion.div>

                            {/* Floating Social Icons - Bottom Spacing */}
                            <motion.div
                                animate={{ y: [0, -10, 0], opacity: [0.5, 0.9, 0.5] }}
                                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                                className="absolute -bottom-14 md:-bottom-16 left-4 md:left-10 text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                            >
                                <Users className="w-7 h-7 md:w-9 md:h-9" />
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 15, 0], opacity: [0.4, 0.8, 0.4], x: [0, 10, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, delay: 1.5 }}
                                className="absolute -bottom-10 md:-bottom-12 right-10 md:right-20 text-[#0077b5] drop-shadow-[0_0_10px_rgba(0,119,181,0.5)]"
                            >
                                <Linkedin className="w-8 h-8 md:w-10 md:h-10 fill-current" />
                            </motion.div>

                            {/* Middle Right - Growth Icon */}
                            <motion.div
                                animate={{ x: [0, 15, 0], opacity: [0.4, 0.9, 0.4], scale: [1, 1.2, 1] }}
                                transition={{ duration: 3.5, repeat: Infinity }}
                                className="absolute top-1/2 -right-6 md:-right-10 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.6)]"
                            >
                                <TrendingUp className="w-9 h-9 md:w-12 md:h-12" />
                            </motion.div>

                            {/* Decorative elements behind the image */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10 group-hover:bg-primary/40 transition-colors" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl -z-10 group-hover:bg-purple-500/40 transition-colors" />
                        </motion.div>
                    </div>
                </div>

                {/* Logo Design Showcase */}
                <div className="flex flex-col items-center space-y-8 mt-10 sm:mt-20">
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
