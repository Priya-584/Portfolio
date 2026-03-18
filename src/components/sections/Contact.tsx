"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { socialsData } from "@/constants/socials";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import SplitText from "@/components/ui/SplitText";
import { Mail, MapPin, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState, useRef } from "react";
import toast from "react-hot-toast";

export const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formState.name.trim()) newErrors.name = "We need a name, bestie 🧢";
        if (!formState.email.trim()) {
            newErrors.email = "Drop your email, fam!";
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            newErrors.email = "That email isn't giving... try again?";
        }
        
        if (formState.phone.trim() && !/^\+?[\d\s-]{10,}$/.test(formState.phone)) {
            newErrors.phone = "That's not a real number, bestie! 📱";
        }

        if (!formState.message.trim()) newErrors.message = "Don't leave me on read! Say something 🗣️";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "d60c425e-c87f-428f-a578-eda8d37c53d0",
                    name: formState.name,
                    email: formState.email,
                    phone: formState.phone,
                    message: formState.message,
                    subject: `New Portfolio Inquiry from ${formState.name}`,
                    from_name: "Portfolio Contact Form",
                }),
            });

            const result = await response.json();
            if (result.success) {
                toast.success("Message sent successfully! ✨", {
                    icon: '🚀',
                });
                setFormState({ name: "", email: "", phone: "", message: "" });
                setErrors({});
            } else {
                toast.error("Something went wrong. Try again! 😅");
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Connection error. Try again later! 🌐");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Section id="contact" className="bg-background relative pt-15 pb-20 md:pb-32 overflow-hidden">
            {/* Gen-Z Moving Blobs */}
            <div className="absolute top-0 right-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Side: Professional Info */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-sm font-bold tracking-[0.3em] text-primary uppercase"
                            >
                                Get in Touch
                            </motion.h2>
                            
                            <motion.h3 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
                            >
                                Let's build something <span className="text-primary italic">extraordinary</span>.
                            </motion.h3>
                            
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-lg text-muted-foreground leading-relaxed max-w-xl pt-2"
                            >
                                Whether you have a specific project in mind or just want to explore possibilities, I'm always open to new connections and collaborations.
                            </motion.p>
                        </div>

                        {/* Contact Channels */}
                        <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                            <motion.div whileHover={{ x: 5 }} className="space-y-2">
                                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] opacity-80">Direct Line</span>
                                <div className="flex flex-col">
                                    <a href="mailto:borap584@gmail.com" className="text-xl font-bold hover:text-primary transition-colors pr-2">borap584@gmail.com</a>
                                    <span className="text-xs text-muted-foreground">Typically responds within 24h</span>
                                </div>
                            </motion.div>
                            <motion.div whileHover={{ x: 5 }} className="space-y-2">
                                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] opacity-80">Base</span>
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-foreground">Remote / Global</span>
                                    <span className="text-xs text-muted-foreground">India-based, Global reach</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Aesthetic Socials */}
                        <div className="pt-6 space-y-4">
                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Connect socially</p>
                            <div className="flex items-center gap-4">
                                {socialsData.map((social, i) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5, color: 'var(--primary)' }}
                                        className="h-10 w-10 rounded-full bg-secondary/30 flex items-center justify-center text-foreground/60 border border-border/50 hover:border-primary/50 transition-all"
                                    >
                                        <social.icon size={18} strokeWidth={2} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Professional Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative lg:sticky lg:top-32"
                    >
                        <div className="bg-secondary/30 backdrop-blur-xl border border-border/50 p-7 md:p-8 rounded-2xl shadow-xl relative overflow-hidden group max-w-xl mx-auto lg:mx-0">
                            {/* Subtle light effect on hover */}
                            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <form onSubmit={handleSubmit} className="space-y-10">
                                {/* Name Input */}
                                <motion.div
                                    animate={errors.name ? { x: [-5, 5, -5, 5, 0] } : {}}
                                    className="relative group"
                                >
                                    <input
                                        type="text"
                                        placeholder=" "
                                        className="genz-input w-full peer focus:ring-0 focus:outline-none"
                                        value={formState.name}
                                        onChange={(e) => {
                                            setFormState({ ...formState, name: e.target.value });
                                            if (errors.name) setErrors({ ...errors, name: "" });
                                        }}
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                    <label className="absolute left-0 top-3 text-lg md:text-xl font-medium text-muted-foreground/40 transition-all pointer-events-none peer-focus:-top-6 peer-focus:text-xs peer-focus:text-primary peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-bold uppercase tracking-widest">
                                        Your Name
                                    </label>
                                    {/* Base Line */}
                                    <div className="absolute bottom-0 left-0 w-full h-px bg-border/20" />
                                    {/* Active/Animated Line */}
                                    <motion.div
                                        className={`absolute bottom-0 left-0 h-0.5 ${errors.name ? 'moving-gradient' : 'bg-primary'}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: focusedField === 'name' || formState.name ? '100%' : 0 }}
                                    />
                                    <AnimatePresence>
                                        {errors.name && (
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="absolute -bottom-6 left-0 text-[10px] font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500"
                                            >
                                                {errors.name}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                {/* Email Input */}
                                <motion.div
                                    animate={errors.email ? { x: [-5, 5, -5, 5, 0] } : {}}
                                    className="relative group"
                                >
                                    <input
                                        type="email"
                                        placeholder=" "
                                        className="genz-input w-full peer focus:ring-0 focus:outline-none"
                                        value={formState.email}
                                        onChange={(e) => {
                                            setFormState({ ...formState, email: e.target.value });
                                            if (errors.email) setErrors({ ...errors, email: "" });
                                        }}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                    <label className="absolute left-0 top-3 text-lg md:text-xl font-medium text-muted-foreground/40 transition-all pointer-events-none peer-focus:-top-6 peer-focus:text-xs peer-focus:text-primary peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-bold uppercase tracking-widest">
                                        Email
                                    </label>
                                    {/* Base Line */}
                                    <div className="absolute bottom-0 left-0 w-full h-px bg-border/20" />
                                    {/* Active/Animated Line */}
                                    <motion.div
                                        className={`absolute bottom-0 left-0 h-0.5 ${errors.email ? 'moving-gradient' : 'bg-primary'}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: focusedField === 'email' || formState.email ? '100%' : 0 }}
                                    />
                                    <AnimatePresence>
                                        {errors.email && (
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="absolute -bottom-6 left-0 text-[10px] font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500"
                                            >
                                                {errors.email}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                {/* Phone Input */}
                                <motion.div
                                    animate={errors.phone ? { x: [-5, 5, -5, 5, 0] } : {}}
                                    className="relative group"
                                >
                                    <input
                                        type="tel"
                                        placeholder=" "
                                        className="genz-input w-full peer focus:ring-0 focus:outline-none"
                                        value={formState.phone}
                                        onChange={(e) => {
                                            setFormState({ ...formState, phone: e.target.value });
                                            if (errors.phone) setErrors({ ...errors, phone: "" });
                                        }}
                                        onFocus={() => setFocusedField('phone')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                    <label className="absolute left-0 top-3 text-lg md:text-xl font-medium text-muted-foreground/40 transition-all pointer-events-none peer-focus:-top-6 peer-focus:text-xs peer-focus:text-primary peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-bold uppercase tracking-widest">
                                        Phone (Optional)
                                    </label>
                                    {/* Base Line */}
                                    <div className="absolute bottom-0 left-0 w-full h-px bg-border/20" />
                                    {/* Active/Animated Line */}
                                    <motion.div
                                        className={`absolute bottom-0 left-0 h-0.5 ${errors.phone ? 'moving-gradient' : 'bg-primary'}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: focusedField === 'phone' || formState.phone ? '100%' : 0 }}
                                    />
                                    <AnimatePresence>
                                        {errors.phone && (
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="absolute -bottom-6 left-0 text-[10px] font-black uppercase tracking-widest bg-clip-text text-transparent bg-linear-to-r from-primary via-purple-500 to-pink-500"
                                            >
                                                {errors.phone}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                {/* Message Input */}
                                <motion.div
                                    animate={errors.message ? { x: [-5, 5, -5, 5, 0] } : {}}
                                    className="relative group"
                                >
                                    <textarea
                                        rows={1}
                                        placeholder=" "
                                        className="genz-input w-full peer resize-none focus:ring-0 focus:outline-none"
                                        value={formState.message}
                                        onChange={(e) => {
                                            setFormState({ ...formState, message: e.target.value });
                                            if (errors.message) setErrors({ ...errors, message: "" });
                                        }}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                    />
                                    <label className="absolute left-0 top-3 text-lg md:text-xl font-medium text-muted-foreground/40 transition-all pointer-events-none peer-focus:-top-6 peer-focus:text-xs peer-focus:text-primary peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-6 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-bold uppercase tracking-widest">
                                        Message
                                    </label>
                                    {/* Base Line */}
                                    <div className="absolute bottom-0 left-0 w-full h-px bg-border/20" />
                                    {/* Active/Animated Line */}
                                    <motion.div
                                        className={`absolute bottom-0 left-0 h-0.5 ${errors.message ? 'moving-gradient' : 'bg-primary'}`}
                                        initial={{ width: 0 }}
                                        animate={{ width: focusedField === 'message' || formState.message ? '100%' : 0 }}
                                    />
                                    <AnimatePresence>
                                        {errors.message && (
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="absolute -bottom-6 left-0 text-[10px] font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500"
                                            >
                                                {errors.message}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </motion.div>

                                {/* Futuristic Button */}
                                <div className="pt-4 ">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        isMagnetic={false}
                                        className="w-full h-16"
                                    >
                                        <AnimatePresence mode="wait">
                                            {isSubmitting ? (
                                                <motion.div
                                                    key="loading"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -20 }}
                                                    className="flex items-center gap-3"
                                                >
                                                    <span className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                                    <span>Sending...</span>
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="idle"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -20 }}
                                                    className="flex items-center gap-3"
                                                >
                                                    <span>Send Message</span>
                                                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </Button>
                                </div>
                            </form>

                            {/* Corner Accents */}
                            <div className="absolute top-8 right-8 text-primary/20">
                                <Send size={40} strokeWidth={1} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};
