"use client";

import { Toaster, toast, ToastBar } from "react-hot-toast";
import { motion } from "framer-motion";

export const ToasterProvider = () => {
    return (
        <Toaster
            position="top-right"
            containerStyle={{
                top: 80,
                right: 20,
                zIndex: 99999,
            }}
            toastOptions={{
                duration: 4000,
                style: {
                    background: 'var(--secondary)',
                    color: 'var(--foreground)',
                    border: '1px solid var(--border)',
                    padding: '8px 12px 8px 16px',
                    borderRadius: '12px', /* Normal rounding so progress bar fits well */
                    fontSize: '14px',
                    fontWeight: 500,
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)',
                    overflow: 'hidden', // Required for progress bar at the bottom
                },
                success: {
                    iconTheme: {
                        primary: '#10b981',
                        secondary: 'var(--secondary)',
                    },
                },
            }}
        >
            {(t) => (
                <ToastBar toast={t} style={{ ...t.style, padding: 0, overflow: 'hidden', position: 'relative' }}>
                    {({ icon, message }) => (
                        <>
                            <div className="flex items-center gap-2 pl-4 pr-2 py-2 w-full">
                                {icon}
                                <div className="flex-1 pr-2">{message}</div>
                                
                                {/* Clickable Cross Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toast.dismiss(t.id);
                                    }}
                                    className="w-6 h-6 shrink-0 flex items-center justify-center rounded-full hover:bg-foreground/10 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5"/>
                                    </svg>
                                </button>
                            </div>

                            {/* Animated Time-out Bar (Acting as bottom border) */}
                            <motion.div
                                initial={{ width: "100%" }}
                                animate={{ width: "0%" }}
                                transition={{ duration: (t.duration || 4000) / 1000, ease: "linear" }}
                                className={`absolute bottom-0 left-0 h-[3px] opacity-100 ${
                                    t.type === 'success' ? 'bg-[#10b981]' : 'bg-primary'
                                }`}
                            />
                        </>
                    )}
                </ToastBar>
            )}
        </Toaster>
    );
};
