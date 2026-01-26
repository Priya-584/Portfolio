import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
    children: ReactNode;
    className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={cn("mx-auto w-full max-w-[100rem] px-6 md:px-12 lg:px-16", className)}>
            {children}
        </div>
    );
};
