"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, HTMLMotionProps } from "framer-motion";
import { useRef, useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    target?: string;
    rel?: string;
    isMagnetic?: boolean;
    isAnimated?: boolean;
}

const MotionLink = motion.create(Link);

export const Button = ({
    children,
    className,
    href,
    variant = "primary",
    isMagnetic = false,
    isAnimated = false,
    ...props
}: ButtonProps) => {
    const ref = useRef<any>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Magnetic logic
    const xOffset = useMotionValue(0);
    const yOffset = useMotionValue(0);

    const mouseX = useSpring(xOffset, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(yOffset, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isMagnetic) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 };
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Pull strength
        const pullX = (clientX - centerX) * 0.4;
        const pullY = (clientY - centerY) * 0.4;

        xOffset.set(pullX);
        yOffset.set(pullY);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        xOffset.set(0);
        yOffset.set(0);
        setIsHovered(false);
        if (props.onMouseLeave) {
            (props.onMouseLeave as any)(e);
        }
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        setIsHovered(true);
        if (props.onMouseEnter) {
            (props.onMouseEnter as any)(e);
        }
    };

    const baseStyles = "relative inline-flex items-center justify-center rounded-full px-10 py-4 text-lg font-black uppercase tracking-widest cursor-pointer overflow-hidden group transition-all duration-300";

    const variants = {
        primary: "moving-gradient text-white shadow-[0_20px_50px_rgba(var(--primary-rgb),0.3)]",
        secondary: "bg-secondary text-foreground border border-border hover:bg-secondary/80",
        outline: "border-2 border-border text-foreground hover:bg-secondary/50 backdrop-blur-sm",
        ghost: "bg-transparent text-foreground hover:bg-secondary/50",
    };

    const innerContent = (
        <>
            {/* Liquid Fill Effect */}
            {isAnimated && (
                <motion.div
                    initial={false}
                    animate={{
                        top: isHovered ? "-10%" : "100%",
                        left: isHovered ? "-10%" : "100%",
                    }}
                    className="absolute w-[120%] h-[120%] bg-white/20 blur-2xl rounded-full z-0 pointer-events-none transition-all duration-500 ease-out"
                />
            )}

            {/* Shine Flare */}
            {isAnimated && (
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 -left-full w-[50%] h-full bg-linear-to-r from-transparent via-white/40 to-transparent -skew-x-12 group-hover:left-[150%] transition-all duration-1000 ease-in-out" />
                </div>
            )}

            <span className="relative z-10 flex items-center gap-2">
                {children}
            </span>
        </>
    );

    const magneticStyle = { x: mouseX, y: mouseY };

    // Separate motion props from HTML props to avoid conflicts
    const { onMouseEnter, onMouseLeave, onMouseMove, ...restProps } = props;

    if (href) {
        return (
            <MotionLink
                ref={ref}
                href={href}
                className={cn(baseStyles, variants[variant], className)}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave as any}
                onMouseEnter={handleMouseEnter as any}
                style={magneticStyle}
                whileTap={isAnimated ? { scale: 0.95 } : undefined}
                {...(restProps as any)}
            >
                {innerContent}
            </MotionLink>
        );
    }

    return (
        <motion.button
            ref={ref}
            type={props.type || "button"}
            className={cn(baseStyles, variants[variant], className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave as any}
            onMouseEnter={handleMouseEnter as any}
            style={magneticStyle}
            whileTap={{ scale: 0.95 }}
            {...(restProps as any)}
        >
            {innerContent}
        </motion.button>
    );
};
