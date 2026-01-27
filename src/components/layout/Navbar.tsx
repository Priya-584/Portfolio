"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4 shadow-sm" : "bg-transparent py-6"}`}
        >
            <Container className="flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-foreground tracking-tighter">
                    PORTFOLIO.
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                        >
                            {link.name}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 ease-out group-hover:w-full" />
                        </Link>
                    ))}
                    <ThemeToggle />
                    <Button
                        href="/CV_UI-UX-Designer.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="primary"
                        className="text-sm font-medium px-6 py-2 h-auto"
                    >
                        Resume
                    </Button>
                </nav>

                <div className="flex md:hidden items-center gap-4 z-50">
                    <ThemeToggle />
                    {/* Mobile Nav Toggle */}
                    <button
                        className="text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </Container>


            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 top-0 left-0 bg-background bg-gradient-to-br from-background via-background to-primary/20 z-40 md:hidden flex flex-col justify-center items-center"
                    >
                        <motion.nav
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                            }}
                            className="flex flex-col items-center space-y-8"
                        >
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.name}
                                    variants={{
                                        open: { opacity: 1, y: 0 },
                                        closed: { opacity: 0, y: 20 }
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-3xl font-bold text-foreground hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                variants={{
                                    open: { opacity: 1, y: 0 },
                                    closed: { opacity: 0, y: 20 }
                                }}
                            >
                                <Button
                                    href="/CV_UI-UX-Designer.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="primary"
                                    className="px-8 py-3 text-lg"
                                >
                                    Resume
                                </Button>
                            </motion.div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
