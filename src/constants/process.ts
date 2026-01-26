import { Search, PenTool, Layers, CheckCircle, Monitor, Rocket } from "lucide-react";

export const processData = [
    {
    id: 1,
    title: "Research",
    description: "I start by understanding users, goals, and problems. This includes checking competitors and current behavior patterns. It helps set a clear direction before designing.",
    icon: Search,
},
{
    id: 2,
    title: "Define",
    description: "I organize insights into clear problems to solve. I decide what features matter and who will use them. This brings clarity to what we’re building and why.",
    icon: PenTool,
},
{
    id: 3,
    title: "Wireframe",
    description: "I create simple layouts to explore structure and user flow. It shows how users will move through the product. Feedback here prevents major rework later.",
    icon: Layers,
},
{
    id: 4,
    title: "Prototype",
    description: "I turn wireframes into interactive screens. Users can experience how the product will actually work. This reveals interaction issues early.",
    icon: Monitor,
},
{
    id: 5,
    title: "Test",
    description: "I test the design with users or stakeholders. Their feedback shows usability gaps and improvements. This ensures the design is practical and user-friendly.",
     icon: CheckCircle,
},
{
    id: 6,
    title: "Release",
    description: "I finalize and hand over designs with proper documentation. Developers get assets, flows, and clarity for implementation. After release, I observe performance for improvements.",
    icon: Rocket,
},
];
