import {
  FaUserFriends,
  FaSearch,
  FaIdCard,
  FaMapMarkedAlt,
  FaBalanceScale,
  FaPalette,
  FaSitemap,
  FaPencilRuler,
  FaPlayCircle,
  FaLayerGroup,
  FaVideo,
  FaLaptopCode,
  FaRocket,
  FaPuzzlePiece,
  FaRobot,
  FaSeedling,
} from "react-icons/fa";
import {
  SiFigma,
  SiAdobexd,
  SiSketch,
  SiAdobeaftereffects,
  SiNotion,
  SiCanva,
  SiCanvas,
  SiFramer,
} from "react-icons/si";

export const skillsData = [
  {
    category: "Research",
    items: [
      { name: "User Interviews", icon: FaUserFriends, color: "#3b82f6" },
      { name: "Usability Testing", icon: FaSearch, color: "#10b981" },
      { name: "Personas", icon: FaIdCard, color: "#f59e0b" },
      { name: "Journey Mapping", icon: FaMapMarkedAlt, color: "#8b5cf6" },
      { name: "A/B Testing", icon: FaBalanceScale, color: "#ef4444" },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "UI Design", icon: FaPalette, color: "#ec4899" },
      { name: "UX Architecture", icon: FaSitemap, color: "#6366f1" },
      { name: "Wireframing", icon: FaPencilRuler, color: "#64748b" },
      { name: "Prototyping", icon: FaPlayCircle, color: "#14b8a6" },
      { name: "Design Systems", icon: FaLayerGroup, color: "#f43f5e" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      {
        name: "Canva",
        icon: SiCanva, // placeholder, replace with actual
        color: "#00C4CC",
      },
      {
        name: "Affinity",
        icon: SiAdobeaftereffects,
        color: "#4C3AFF",
      },
      {
        name: "UX Pilot",
        icon: FaRocket,
        color: "#1D3557",
      },
      {
        name: "Stitch",
        icon: FaPuzzlePiece,
        color: "#6C63FF",
      },
      {
        name: "Motiff AI",
        icon: FaRobot,
        color: "#4B4DED",
      },
      {
        name: "Canva AI",
        icon: SiCanvas, // placeholder (same as Canva or separate icon)
        color: "#00C4CC",
      },
      {
        name: "Framer",
        icon: SiFramer,
        color: "#0055FF",
      },
      {
        name: "Nano Banana",
        icon: FaSeedling,
        color: "#FFC107",
      },
      { name: "Notion", icon: SiNotion, color: "#000000" },
      { name: "Luma", icon: FaVideo, color: "#FF4D00" }, // Dynamic Orange/Red for Luma
    ],
  },
];
