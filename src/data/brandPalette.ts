export interface BrandColor {
  name: string;
  token: string;
  value: string;
  role: string;
  tone: "light" | "dark";
}

export const coreColors: readonly BrandColor[] = [
  {
    name: "Lime",
    token: "--bb-lime",
    value: "#A5FF00",
    role: "Action, progress, and successful states",
    tone: "light",
  },
  {
    name: "Olive",
    token: "--bb-olive",
    value: "#233207",
    role: "Primary brand anchor, headings, and dark surfaces",
    tone: "dark",
  },
  {
    name: "Orange",
    token: "--bb-orange",
    value: "#FE6B1B",
    role: "Bright emphasis and operational illustrations",
    tone: "light",
  },
  {
    name: "Teal",
    token: "--bb-teal",
    value: "#016B83",
    role: "Calm contrast, diagrams, and supporting interfaces",
    tone: "dark",
  },
  {
    name: "Coconut",
    token: "--bb-coconut",
    value: "#F7F7F4",
    role: "Main marketing backgrounds",
    tone: "light",
  },
];

export const accentColors: readonly BrandColor[] = [
  {
    name: "Aubergine",
    token: "--bb-aubergine",
    value: "#78286E",
    role: "Operations center icons and interface accents",
    tone: "dark",
  },
  {
    name: "Pink",
    token: "--bb-pink",
    value: "#FFAFA5",
    role: "Occasional warm illustration fills",
    tone: "light",
  },
  {
    name: "Orchid",
    token: "--bb-orchid",
    value: "#C8AFF0",
    role: "Occasional violet illustration fills",
    tone: "light",
  },
  {
    name: "Cloud",
    token: "--bb-cloud",
    value: "#B4C8E1",
    role: "Occasional cool illustration fills",
    tone: "light",
  },
];

export const neutralColors: readonly BrandColor[] = [
  {
    name: "Oat",
    token: "--bb-oat",
    value: "#EBE9E4",
    role: "Logo tiles, listings, supporting panels, and section backgrounds",
    tone: "light",
  },
  {
    name: "Graphite",
    token: "--bb-graphite",
    value: "#1E1919",
    role: "Body text and neutral emphasis",
    tone: "dark",
  },
];

export const greyColors: readonly BrandColor[] = [
  {
    name: "Grey 50",
    token: "--bb-gray-50",
    value: "#F7F6F5",
    role: "Neutral surfaces, text, and borders",
    tone: "light",
  },
  {
    name: "Grey 100",
    token: "--bb-gray-100",
    value: "#EBE9E6",
    role: "Neutral surfaces, text, and borders",
    tone: "light",
  },
  {
    name: "Grey 150",
    token: "--bb-gray-150",
    value: "#DFDCD8",
    role: "Secondary text on dark backgrounds and borders",
    tone: "light",
  },
  {
    name: "Grey 200",
    token: "--bb-gray-200",
    value: "#D3CEC9",
    role: "Neutral surfaces, text, and borders",
    tone: "light",
  },
  {
    name: "Grey 250",
    token: "--bb-gray-250",
    value: "#C7C1BB",
    role: "Neutral surfaces, text, and borders",
    tone: "light",
  },
  {
    name: "Grey 300",
    token: "--bb-gray-300",
    value: "#BBB5AE",
    role: "Neutral surfaces, text, and borders",
    tone: "light",
  },
  {
    name: "Grey 350",
    token: "--bb-gray-350",
    value: "#AFA8A0",
    role: "Neutral surfaces, text, and borders",
    tone: "light",
  },
  {
    name: "Grey 400",
    token: "--bb-gray-400",
    value: "#A49B93",
    role: "Neutral surfaces, text, and borders",
    tone: "light",
  },
  {
    name: "Grey 450",
    token: "--bb-gray-450",
    value: "#978F86",
    role: "Neutral surfaces, text, and borders",
    tone: "light",
  },
  {
    name: "Grey 500",
    token: "--bb-gray-500",
    value: "#8C8279",
    role: "Neutral surfaces, text, and borders",
    tone: "light",
  },
  {
    name: "Grey 550",
    token: "--bb-gray-550",
    value: "#7F776F",
    role: "Neutral surfaces, text, and borders",
    tone: "dark",
  },
  {
    name: "Grey 600",
    token: "--bb-gray-600",
    value: "#736C64",
    role: "Neutral surfaces, text, and borders",
    tone: "dark",
  },
  {
    name: "Grey 650",
    token: "--bb-gray-650",
    value: "#67615A",
    role: "Neutral surfaces, text, and borders",
    tone: "dark",
  },
  {
    name: "Grey 700",
    token: "--bb-gray-700",
    value: "#5B5650",
    role: "Neutral surfaces, text, and borders",
    tone: "dark",
  },
  {
    name: "Grey 750",
    token: "--bb-gray-750",
    value: "#4F4A46",
    role: "Neutral surfaces, text, and borders",
    tone: "dark",
  },
  {
    name: "Grey 800",
    token: "--bb-gray-800",
    value: "#44403D",
    role: "Neutral surfaces, text, and borders",
    tone: "dark",
  },
  {
    name: "Grey 850",
    token: "--bb-gray-850",
    value: "#393633",
    role: "Neutral surfaces, text, and borders",
    tone: "dark",
  },
  {
    name: "Grey 900",
    token: "--bb-gray-900",
    value: "#2D2B29",
    role: "Neutral surfaces, text, and borders",
    tone: "dark",
  },
  {
    name: "Grey 950",
    token: "--bb-gray-950",
    value: "#242321",
    role: "Neutral surfaces, text, and borders",
    tone: "dark",
  },
  {
    name: "Grey 1000",
    token: "--bb-gray-1000",
    value: "#1A1918",
    role: "Neutral surfaces, text, and borders",
    tone: "dark",
  },
];
