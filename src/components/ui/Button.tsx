import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: "primary" | "secondary" | "outline";
    target?: string;
    rel?: string;
}

const MotionLink = motion.create(Link);

export const Button = ({ children, className, href, variant = "primary", ...props }: ButtonProps) => {
    // Base styles (removed transition/transform classes as Motion handles them)
    const baseStyles = "relative inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium cursor-pointer overflow-hidden group";

    const variants = {
        primary: "bg-primary text-white border border-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25",
        secondary: "bg-secondary text-foreground border border-border hover:bg-secondary/80 hover:border-foreground/20",
        outline: "border-2 border-border text-foreground hover:bg-secondary/50 hover:border-primary/50 backdrop-blur-sm",
    };

    const content = (
        <>
            {/* Shine Effect Overlay */}
            <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 pointer-events-none" />

            {/* Button Text */}
            <span className="relative z-10">{children}</span>
        </>
    );

    const animationProps = {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        transition: { type: "spring", stiffness: 400, damping: 17 },
    };

    if (href) {
        return (
            <MotionLink
                href={href}
                className={cn(baseStyles, variants[variant], className)}
                {...(animationProps as any)}
                {...(props as any)}
            >
                {content}
            </MotionLink>
        );
    }

    return (
        <motion.button
            className={cn(baseStyles, variants[variant], className)}
            {...animationProps}
            {...(props as any)}
        >
            {content}
        </motion.button>
    );
};
