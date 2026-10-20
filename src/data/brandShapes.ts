export interface ShapeLayer {
  d: string;
  tone?: "foreground" | "background";
  outline?: boolean;
}

interface BrandShapeDefinition {
  title: string;
  description: string;
  collection: "current" | "original" | "study";
  layers: ShapeLayer[];
}

export const brandShapes = {
  "joined-blocks": {
    title: "Joined blocks",
    description: "Two blocks connected by a central bridge.",
    collection: "current",
    layers: [{ d: "M0 0h12v12h8V8h12v24H20V20h-8v4H0Z" }],
  },
  "arrow-tiles": {
    title: "Arrow tiles",
    description: "Four diagonal tiles moving in the same direction.",
    collection: "current",
    layers: [
      {
        d: "M0 8 8 0h8v8l-8 8H0Z M16 8 24 0h8v8l-8 8h-8Z M0 24 8 16h8v8l-8 8H0Z M16 24 24 16h8v8l-8 8h-8Z",
      },
    ],
  },
  "paired-switchers": {
    title: "Paired switchers",
    description: "Opposing rounded forms with alternating circular cutouts.",
    collection: "current",
    layers: [
      {
        d: "M8 0a8 8 0 0 1 8 8v16a8 8 0 0 1-16 0V8a8 8 0 0 1 8-8Z M24 0a8 8 0 0 1 8 8v16a8 8 0 0 1-16 0V8a8 8 0 0 1 8-8Z",
      },
      {
        d: "M8 2.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 1 0 0-11Z M24 18.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 1 0 0-11Z",
        tone: "background",
      },
    ],
  },
  circle: {
    title: "Circle",
    description: "A single centered circle with a clear surrounding margin.",
    collection: "current",
    layers: [{ d: "M16 4a12 12 0 1 0 0 24a12 12 0 1 0 0-24Z" }],
  },
  "step-bars": {
    title: "Step bars",
    description: "The original Automate mark with three stepped bars.",
    collection: "original",
    layers: [{ d: "M12 6h20v6H12Z M0 12h12v8H0Z M12 20h20v6H12Z" }],
  },
  "circle-square": {
    title: "Circle and square",
    description: "The original Interact mark with two meeting forms.",
    collection: "original",
    layers: [
      { d: "M10 0a10 10 0 1 0 0 20a10 10 0 1 0 0-20Z M16 16h16v16H16Z" },
    ],
  },
  "nested-squares": {
    title: "Nested squares",
    description: "The original Govern mark with a square frame and center.",
    collection: "original",
    layers: [
      { d: "M4 4h24v24H4Z" },
      { d: "M10 10h12v12H10Z", tone: "background" },
      { d: "M14 14h4v4h-4Z" },
    ],
  },
  "corner-circle": {
    title: "Corner circle",
    description: "A square and overlapping circle with an inverted quarter.",
    collection: "study",
    layers: [
      { d: "M6 0h26v26H6Z M6 20a6 6 0 1 0 0 12a6 6 0 1 0 0-12Z" },
      { d: "M6 20a6 6 0 0 1 6 6H6Z", tone: "background" },
    ],
  },
  "offset-squares": {
    title: "Offset squares",
    description: "Overlapping square frames on a diagonal.",
    collection: "study",
    layers: [
      { d: "M6 6h14v14H6Z" },
      { d: "M12 12h8v8h-8Z", tone: "background" },
      { d: "M12 12h20v20H12Z" },
    ],
  },
  "stepped-corners": {
    title: "Stepped corners",
    description: "Three nested right-angle bands.",
    collection: "study",
    layers: [
      {
        d: "M2 2h3v25h25v3H2Z M10 2h3v17h17v3H10Z M18 2h3v9h9v3H18Z M26 2h4v4h-4Z",
      },
    ],
  },
  "split-circle": {
    title: "Split circle",
    description: "A circular outline divided into two halves.",
    collection: "study",
    layers: [
      { d: "M16 2a14 14 0 1 0 0 28a14 14 0 1 0 0-28Z M2 16h28", outline: true },
    ],
  },
  "diagonal-arrow": {
    title: "Diagonal arrow",
    description: "A rising diagonal meeting a square corner.",
    collection: "study",
    layers: [{ d: "M4 28 28 4 M4 4h24v24", outline: true }],
  },
  "dot-triangle": {
    title: "Dot triangle",
    description: "A triangular arrangement of fifteen square dots.",
    collection: "study",
    layers: [
      {
        d: "M3 3h3v3H3Z M9 3h3v3H9Z M15 3h3v3h-3Z M21 3h3v3h-3Z M27 3h3v3h-3Z M9 9h3v3H9Z M15 9h3v3h-3Z M21 9h3v3h-3Z M27 9h3v3h-3Z M15 15h3v3h-3Z M21 15h3v3h-3Z M27 15h3v3h-3Z M21 21h3v3h-3Z M27 21h3v3h-3Z M27 27h3v3h-3Z",
      },
    ],
  },
  "horizontal-bars": {
    title: "Horizontal bars",
    description: "Six evenly spaced horizontal bands.",
    collection: "study",
    layers: [
      {
        d: "M0 2h32v3H0Z M0 7h32v3H0Z M0 12h32v3H0Z M0 17h32v3H0Z M0 22h32v3H0Z M0 27h32v3H0Z",
      },
    ],
  },
  "diagonal-stripes": {
    title: "Diagonal stripes",
    description: "Two diagonal triangles above fine horizontal bands.",
    collection: "study",
    layers: [
      { d: "M0 16 16 0v16Z M16 16 32 0v16Z" },
      {
        d: "M0 16h32v0.8H0Z M0 17.6h32v0.8H0Z M0 19.2h32v0.8H0Z M0 20.8h32v0.8H0Z M0 22.4h32v0.8H0Z M0 24h32v0.8H0Z M0 25.6h32v0.8H0Z M0 27.2h32v0.8H0Z M0 28.8h32v0.8H0Z M0 30.4h32v0.8H0Z",
      },
    ],
  },
  "nested-corners": {
    title: "Nested corners",
    description:
      "Five repeating right-angle bands with a square at the center.",
    collection: "study",
    layers: [
      {
        d: "M3 0h2.7v26.7H32v2.7H3Z M8.3 0H11v21.3h21V24H8.3Z M13.6 0h2.7v16H32v2.7H13.6Z M18.9 0h2.7v10.7H32v2.7H18.9Z M24.2 0h2.7v5.3H32V8h-7.8Z M29.5 0H32v2.7h-2.5Z",
      },
    ],
  },
  "split-panel": {
    title: "Split panel",
    description: "A square divided into two contrasting vertical halves.",
    collection: "study",
    layers: [{ d: "M16 0h16v32H16Z" }],
  },
  "forward-chevrons": {
    title: "Forward chevrons",
    description: "Three broad chevrons carrying movement across the square.",
    collection: "study",
    layers: [
      {
        d: "M0 0h6l16 16L6 32H0l16-16Z M14 0h6l12 12v8L20 32h-6l16-16Z M28 0h4v4Z M28 32h4v-4Z",
      },
    ],
  },
  "overlapping-orbits": {
    title: "Overlapping orbits",
    description: "Two stacked circles with a shared lens cut out between them.",
    collection: "study",
    layers: [
      {
        d: "M7 11a9 9 0 1 0 18 0a9 9 0 1 0 -18 0ZM7 21a9 9 0 1 0 18 0a9 9 0 1 0 -18 0Z",
      },
      {
        d: "M8.517 16A9 9 0 0 1 23.483 16A9 9 0 0 1 8.517 16Z",
        tone: "background",
      },
    ],
  },
  "converging-rays": {
    title: "Converging rays",
    description: "Fine triangular rays converge on one operational point.",
    collection: "study",
    layers: [
      {
        d: "M0 2L30 16L0 2.7Z M0 3.7L30 16L0 4.4Z M0 5.4L30 16L0 6.1Z M0 7.1L30 16L0 7.8Z M0 8.8L30 16L0 9.5Z M0 10.5L30 16L0 11.2Z M0 12.2L30 16L0 12.9Z M0 13.9L30 16L0 14.6Z M0 15.6L30 16L0 16.3Z M0 17.3L30 16L0 18Z M0 19L30 16L0 19.7Z M0 20.7L30 16L0 21.4Z M0 22.4L30 16L0 23.1Z M0 24.1L30 16L0 24.8Z M0 25.8L30 16L0 26.5Z M0 27.5L30 16L0 28.2Z M0 29.2L30 16L0 29.9Z",
      },
    ],
  },
  "striped-orbit": {
    title: "Striped orbit",
    description: "Horizontal bands form a circular ring around a clear center.",
    collection: "study",
    layers: [
      {
        d: "M10.804 3L21.196 3L23.455 4.15L8.545 4.15Z M7.214 5.1L24.786 5.1L26.047 6.25L5.953 6.25Z M5.111 7.2L26.889 7.2L27.725 8.35L4.275 8.35Z M3.707 9.3L28.293 9.3L28.853 10.45L3.147 10.45Z M2.777 11.4L29.223 11.4L29.568 12.55L2.432 12.55Z M2.225 13.5L29.775 13.5L29.935 14.65L2.065 14.65Z M2.006 15.6L29.994 15.6L29.98 16.75L2.02 16.75Z M2.104 17.7L29.896 17.7L29.707 18.85L2.293 18.85Z M2.526 19.8L29.474 19.8L29.096 20.95L2.904 20.95Z M3.304 21.9L28.696 21.9L28.095 23.05L3.905 23.05Z M4.511 24L27.489 24L26.596 25.15L5.404 25.15Z M6.305 26.1L25.695 26.1L24.333 27.25L7.667 27.25Z M9.133 28.2L22.867 28.2L21.196 29L10.804 29Z",
      },
      {
        d: "M8.5 16a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0 -15 0Z",
        tone: "background",
      },
    ],
  },
  "four-point-spark": {
    title: "Four-point spark",
    description: "Four slender arms meet around a small central opening.",
    collection: "study",
    layers: [
      {
        d: "M15.5 2h1v8Q16.5 15.5 22 15.5h8v1h-8Q16.5 16.5 16.5 22v8h-1v-8Q15.5 16.5 10 16.5H2v-1h8Q15.5 15.5 15.5 10Z",
      },
      {
        d: "M14.75 16a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0 -2.5 0Z",
        tone: "background",
      },
    ],
  },
  "cellular-field": {
    title: "Cellular field",
    description:
      "An organic mesh of rounded cells for larger decorative surfaces.",
    collection: "study",
    layers: [
      { d: "M0 0h32v32H0Z" },
      {
        d: "M0.9 3.1C0.5 1 5.1 0.6 5.1 3.1C5.4 5.2 0.9 5.6 0.9 3.1Z M6.95 3.647C6.55 1.107 11.65 0.707 11.65 3.647C11.95 6.187 6.95 6.587 6.95 3.647Z M13 3.691C12.6 1.371 18.2 0.971 18.2 3.691C18.5 6.011 13 6.411 13 3.691Z M19.8 3.192C19.4 1.092 24 0.692 24 3.192C24.3 5.292 19.8 5.692 19.8 3.192Z M25.85 2.608C25.45 0.068 30.55 -0.332 30.55 2.608C30.85 5.148 25.85 5.548 25.85 2.608Z M1.5 9.542C1.1 7.222 6.2 6.822 6.2 9.542C6.5 11.862 1.5 12.262 1.5 9.542Z M7.55 8.958C7.15 6.858 12.75 6.458 12.75 8.958C13.05 11.058 7.55 11.458 7.55 8.958Z M14.35 8.827C13.95 6.287 18.55 5.887 18.55 8.827C18.85 11.367 14.35 11.767 14.35 8.827Z M20.4 9.268C20 6.948 25.1 6.548 25.1 9.268C25.4 11.588 20.4 11.988 20.4 9.268Z M26.45 9.877C26.05 7.777 31.65 7.377 31.65 9.877C31.95 11.977 26.45 12.377 26.45 9.877Z M0.4 15.618C-0 13.078 5.6 12.678 5.6 15.618C5.9 18.158 0.4 18.558 0.4 15.618Z M7.2 16.227C6.8 13.907 11.4 13.507 11.4 16.227C11.7 18.547 7.2 18.947 7.2 16.227Z M13.25 16.443C12.85 14.343 17.95 13.943 17.95 16.443C18.25 18.543 13.25 18.943 13.25 16.443Z M19.3 16.068C18.9 13.528 24.5 13.128 24.5 16.068C24.8 18.608 19.3 19.008 19.3 16.068Z M26.1 15.446C25.7 13.126 30.3 12.726 30.3 15.446C30.6 17.766 26.1 18.166 26.1 15.446Z M1.75 22.418C1.35 20.318 5.95 19.918 5.95 22.418C6.25 24.518 1.75 24.918 1.75 22.418Z M7.8 21.796C7.4 19.256 12.5 18.856 12.5 21.796C12.8 24.336 7.8 24.736 7.8 21.796Z M13.85 21.5C13.45 19.18 19.05 18.78 19.05 21.5C19.35 23.82 13.85 24.22 13.85 21.5Z M20.65 21.801C20.25 19.701 24.85 19.301 24.85 21.801C25.15 23.901 20.65 24.301 20.65 21.801Z M26.7 22.423C26.3 19.883 31.4 19.483 31.4 22.423C31.7 24.963 26.7 25.363 26.7 22.423Z M0.65 28.151C0.25 25.831 5.35 25.431 5.35 28.151C5.65 30.471 0.65 30.871 0.65 28.151Z M6.7 28.773C6.3 26.673 11.9 26.273 11.9 28.773C12.2 30.873 6.7 31.273 6.7 28.773Z M13.5 29.144C13.1 26.604 17.7 26.204 17.7 29.144C18 31.684 13.5 32.084 13.5 29.144Z M19.55 28.923C19.15 26.603 24.25 26.203 24.25 28.923C24.55 31.243 19.55 31.643 19.55 28.923Z M25.6 28.313C25.2 26.213 30.8 25.813 30.8 28.313C31.1 30.413 25.6 30.813 25.6 28.313Z",
        tone: "background",
      },
    ],
  },
  "community-foundation": {
    title: "Community foundation",
    description: "A single centered square within the background square.",
    collection: "current",
    layers: [
      {
        d: "M8 8h16v16H8Z",
      },
    ],
  },
  "enterprise-framework": {
    title: "Enterprise framework",
    description: "Three touching pillars rise in height from left to right.",
    collection: "current",
    layers: [{ d: "M4 20h8v8H4Z M12 12h8v16h-8Z M20 4h8v24h-8Z" }],
  },
  "cloud-current": {
    title: "Cloud current",
    description: "A small circle overlaps a larger circle to form a cloud.",
    collection: "current",
    layers: [
      {
        d: "M19 5a10 10 0 1 0 0 20a10 10 0 1 0 0-20Z M10 11a7 7 0 1 0 0 14a7 7 0 1 0 0-14Z",
      },
    ],
  },
} as const satisfies Record<string, BrandShapeDefinition>;

export type BrandShapeId = keyof typeof brandShapes;

export const platformGroupShapes = {
  Connect: "joined-blocks",
  Automate: "arrow-tiles",
  Interact: "paired-switchers",
  Govern: "circle",
} as const satisfies Record<string, BrandShapeId>;

export const navigationGroupShapes = {
  ...platformGroupShapes,
  Products: "arrow-tiles",
  Capabilities: "joined-blocks",
  "Evaluate and deploy": "circle",
  "Use cases": "offset-squares",
  Industries: "corner-circle",
  Build: "step-bars",
  Marketplace: "nested-squares",
  Explore: "diagonal-arrow",
  Company: "circle-square",
} as const satisfies Record<string, BrandShapeId>;

export const originalPlatformGroupShapes = {
  Connect: "joined-blocks",
  Automate: "step-bars",
  Interact: "circle-square",
  Govern: "nested-squares",
} as const satisfies Record<string, BrandShapeId>;

export type PlatformGroup = keyof typeof platformGroupShapes;
