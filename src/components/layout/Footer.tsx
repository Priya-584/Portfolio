"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = [
    {
        title: "Navigation",
        links: [
            { name: "Home", href: "/" },
            { name: "About", href: "/#about" },
            { name: "Projects", href: "/projects" },
            { name: "Experience", href: "/#experience" },
            { name: "Contact", href: "/#contact" },
        ],
    },
    {
        title: "Social",
        links: [
            { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
            { name: "GitHub", href: "https://github.com", icon: Github },
            { name: "Twitter", href: "https://twitter.com", icon: Twitter },
            { name: "Email", href: "mailto:borap584@gmail.com", icon: Mail },
        ],
    },
];

export const Footer = () => {
    return (
        <footer className="bg-background relative pt-4 pb-10 overflow-hidden border-t border-border/10">
            {/* Artistic Background Blurs */}
            {/* <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" /> */}

            <Container>
                {/* Big Footer Header / CTA Area */}
                {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-8 border-b border-border/10 pb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground leading-none">
                            LET&apos;S <span className="text-primary italic">BUILD</span><br />
                            TOGETHER.
                        </h2>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/#contact"
                                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                            >
                                <span className="relative z-10">Get in Touch</span>
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <ArrowUpRight className="w-5 h-5 relative z-10" />
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* High-Visibility Highlight Separator */}
                {/* <div className="w-full h-[2px] bg-linear-to-r from-transparent via-primary/30 to-transparent mb-8 shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)] opacity-60" /> */}

                {/* Bottom Bar: Professional Branding, Links & Copyright */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-3 group">
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/50">PRIYA DESIGN</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Priya Portfolio. <span className="hidden sm:inline">Crafted with passion.</span>
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-x-12 gap-y-6">
                        {footerLinks.map((section) => (
                            <div key={section.title} className="flex flex-col gap-3">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/70">
                                    {section.title}
                                </h4>
                                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link 
                                                href={link.href}
                                                className="text-xs font-bold text-muted-foreground hover:text-foreground transition-all flex items-center gap-2 group/link whitespace-nowrap"
                                            >
                                                {link.name}
                                                {link.icon && <link.icon className="w-3 h-3 opacity-40 group-hover/link:opacity-100 group-hover/link:text-primary transition-all duration-300" />}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
};
