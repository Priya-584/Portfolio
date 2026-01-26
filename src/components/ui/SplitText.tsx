"use client";

import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    ease?: string;
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    threshold?: number;
    rootMargin?: string;
    textAlign?: 'left' | 'center' | 'right' | 'justify';
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
    onLetterAnimationComplete?: () => void;
}

const SplitText = ({
    text,
    className = '',
    delay = 50,
    duration = 1.25,
    ease = 'power3.out',
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = '-100px',
    textAlign = 'center',
    tag = 'p',
    onLetterAnimationComplete
}: SplitTextProps) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const animationCompletedRef = useRef(false);
    const onCompleteRef = useRef(onLetterAnimationComplete);
    const [fontsLoaded, setFontsLoaded] = useState(false);

    // Keep callback ref updated
    useEffect(() => {
        onCompleteRef.current = onLetterAnimationComplete;
    }, [onLetterAnimationComplete]);

    useEffect(() => {
        if (document.fonts.status === 'loaded') {
            setFontsLoaded(true);
        } else {
            document.fonts.ready.then(() => {
                setFontsLoaded(true);
            });
        }
    }, []);

    useGSAP(
        () => {
            if (!ref.current || !text || !fontsLoaded) return;
            // Prevent re-animation if already completed
            if (animationCompletedRef.current) return;

            const el = ref.current;
            const letters = el.querySelectorAll('.split-char');

            const startPct = (1 - threshold) * 100;
            const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
            const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
            const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';

            const sign = marginValue === 0
                ? ''
                : marginValue < 0
                    ? `-=${Math.abs(marginValue)}${marginUnit}`
                    : `+=${marginValue}${marginUnit}`;

            const start = `top ${startPct}%${sign}`;

            // First set opacity to 1 immediately before animation starts to prevent double-fade if CSS handles it
            gsap.set(el, { opacity: 1 });

            gsap.fromTo(
                letters,
                { ...from },
                {
                    ...to,
                    duration,
                    ease,
                    stagger: delay / 1000,
                    scrollTrigger: {
                        trigger: el,
                        start,
                        toggleActions: 'play reverse play reverse',
                        fastScrollEnd: true,
                    },
                    onComplete: () => {
                        animationCompletedRef.current = true;
                        onCompleteRef.current?.();
                    },
                    willChange: 'transform, opacity',
                    force3D: true
                }
            );

            return () => {
                ScrollTrigger.getAll().forEach(st => {
                    if (st.trigger === el) st.kill();
                });
            };
        },
        {
            dependencies: [
                text,
                delay,
                duration,
                ease,
                JSON.stringify(from),
                JSON.stringify(to),
                threshold,
                rootMargin,
                fontsLoaded
            ],
            scope: ref
        }
    );

    const renderContent = () => {
        return text.split(" ").map((word, i) => (
            <span key={i} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                {word.split("").map((char, j) => (
                    <span
                        key={j}
                        className="split-char inline-block"
                    >
                        {char}
                    </span>
                ))}
                {i < text.split(" ").length - 1 && (
                    <span className="split-char inline-block">&nbsp;</span>
                )}
            </span>
        ));
    }

    const Tag = tag as any;

    return (
        <Tag
            ref={ref}
            className={`split-parent ${className}`}
            style={{
                textAlign,
                // overflow: 'hidden', // removed to allow transforms
                display: 'block', // Changed to block for easier layout
                whiteSpace: 'normal',
                wordWrap: 'break-word',
                willChange: 'transform, opacity'
            }}
        >
            {renderContent()}
        </Tag>
    );
};

export default SplitText;
