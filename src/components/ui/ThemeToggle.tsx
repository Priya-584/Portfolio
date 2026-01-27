"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-8 h-8 bg-muted rounded-full" />; // Prevent layout shift
    }

    const isDark = theme === "dark";

    return (
        <motion.button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative flex items-center justify-center w-8 h-8 rounded-full border shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 overflow-hidden"
            initial={false}
            animate={{
                backgroundColor: isDark ? "#0f172a" : "#ffffff", // Slate-950 vs White
                borderColor: isDark ? "#334155" : "#e2e8f0",     // Slate-700 vs Slate-200
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            aria-label="Toggle theme"
        >
            {/* Sun Icon - Exits down when dark */}
            <motion.div
                className="absolute text-amber-500"
                animate={{
                    y: isDark ? 32 : 0,
                    opacity: isDark ? 0 : 1,
                    rotate: isDark ? 90 : 0
                }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
                <Sun className="w-4 h-4 fill-current" />
            </motion.div>

            {/* Moon Icon - Enters from top when dark */}
            <motion.div
                className="absolute text-blue-400"
                initial={{ y: -32, opacity: 0, rotate: -90 }}
                animate={{
                    y: isDark ? 0 : -32,
                    opacity: isDark ? 1 : 0,
                    rotate: isDark ? 0 : -90
                }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
                <Moon className="w-4 h-4 fill-current" />
            </motion.div>
        </motion.button>
    );
}
