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
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                    I am currently available for freelance projects and open to full-time opportunities.
                </p>

                <div className="flex justify-center gap-6">
                    {socialsData.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-secondary rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all hover:scale-110"
                            aria-label={social.name}
                            title={social.name === "Email" ? "borap584@gmail.com" : social.name}
                        >
                            <social.icon size={24} />
                        </a>
                    ))}
                </div>

                {/* <p className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} My Portfolio. Designed & Built by [Your Name].
                </p> */}
            </Container>
        </Section>
    );
};
