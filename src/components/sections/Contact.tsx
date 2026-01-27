"use client";

import { socialsData } from "@/constants/socials";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

import SplitText from "@/components/ui/SplitText";

export const Contact = () => {
    return (
        <Section id="contact" className="bg-background ">
            <Container className="text-center">
                <div className="mb-8 flex justify-center">
                    <SplitText
                        text="Let's work together."
                        className="text-5xl md:text-7xl font-bold text-foreground tracking-tight"
                        delay={50}
                        duration={0.6}
                        tag="h2"
                        textAlign="center"
                    />
                </div>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 md:mb-16">
                    I am currently available for freelance projects and open to full-time opportunities.
                </p>

                <div className="flex justify-center gap-4 md:gap-6">
                    {socialsData.map((social) => {
                        const getColorClass = (name: string) => {
                            switch (name) {
                                case "LinkedIn":
                                    return "text-[#0077b5] hover:bg-[#0077b5]/10 hover:shadow-[#0077b5]/20 border-[#0077b5]/20";
                                case "Email":
                                    return "text-[#EA4335] hover:bg-[#EA4335]/10 hover:shadow-[#EA4335]/20 border-[#EA4335]/20";
                                default:
                                    return "text-foreground hover:bg-primary/10 hover:shadow-primary/20 border-border/50";
                            }
                        };
                        const colorClass = getColorClass(social.name);

                        return (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-4 rounded-full border transition-all duration-300 hover:scale-110 shadow-lg ${colorClass} bg-background group`}
                                aria-label={social.name}
                                title={social.name === "Email" ? "borap584@gmail.com" : social.name}
                            >
                                <social.icon size={28} className="transition-transform group-hover:rotate-12" />
                            </a>
                        );
                    })}
                </div>

                {/* <p className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} My Portfolio. Designed & Built by [Your Name].
                </p> */}
            </Container>
        </Section>
    );
};
