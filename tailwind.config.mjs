// tailwind.config.mjs
export default {
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",

      white: "var(--bb-white)",
      black: "var(--bb-graphite)",

      lime: {
        DEFAULT: "var(--bb-lime)",
        ...Object.fromEntries(
          Array.from({ length: 16 }, (_, i) => [
            (i + 1) * 100,
            `var(--bb-lime-${(i + 1) * 100})`,
          ]),
        ),
      },
      olive: {
        DEFAULT: "var(--bb-olive)",
        ...Object.fromEntries(
          Array.from({ length: 16 }, (_, i) => [
            (i + 1) * 100,
            `var(--bb-olive-${(i + 1) * 100})`,
          ]),
        ),
      },
      coconut: "var(--bb-coconut)",
      sand: "var(--bb-sand)",
      graphite: "var(--bb-graphite)",
      ...Object.fromEntries(
        [
          "azalea",
          "pink",
          "crimson",
          "sunset",
          "rust",
          "tangerine",
          "gold",
          "vivid-vargas",
          "ocean",
          "zen",
          "navy",
          "cloud",
          "plum",
          "orchid",
        ].map((name) => [name, `var(--bb-${name})`]),
      ),
      gray: Object.fromEntries(
        Array.from({ length: 20 }, (_, i) => [
          (i + 1) * 50,
          `var(--bb-gray-${(i + 1) * 50})`,
        ]),
      ),

      grey: {
        50: "var(--bb-background-base)",
        100: "var(--bb-background-surface-subtle)",
        200: "var(--bb-gray-100)",
        300: "var(--bb-border-bold)",
        400: "var(--bb-gray-450)",
        500: "var(--bb-text-subtle)",
        600: "var(--bb-gray-750)",
        700: "var(--bb-gray-900)",
        800: "var(--bb-gray-900)",
        900: "var(--bb-text-base)",
        950: "var(--bb-black)",
      },

      stone: {
        50: "var(--bb-background-base)",
        100: "var(--bb-background-surface-subtle)",
        200: "var(--bb-gray-100)",
        300: "var(--bb-border-bold)",
        400: "var(--bb-gray-450)",
        500: "var(--bb-text-subtle)",
        600: "var(--bb-gray-750)",
        700: "var(--bb-gray-900)",
        800: "var(--bb-gray-900)",
        900: "var(--bb-text-base)",
        950: "var(--bb-black)",
      },

      blue: {
        100: "var(--bb-cloud-subtle)",
        200: "var(--bb-cloud)",
        300: "var(--bb-cloud)",
        400: "var(--bb-cloud)",
        500: "var(--bb-navy)",
        600: "var(--bb-navy)",
        700: "var(--bb-navy)",
        800: "var(--bb-navy)",
        900: "var(--bb-navy)",
      },

      sky: {
        100: "var(--bb-cloud-subtle)",
        200: "var(--bb-cloud)",
        300: "var(--bb-cloud)",
        400: "var(--bb-cloud)",
        500: "var(--bb-navy)",
        600: "var(--bb-navy)",
        700: "var(--bb-navy)",
        800: "var(--bb-navy)",
        900: "var(--bb-navy)",
      },

      orange: {
        100: "var(--bb-tangerine-subtle)",
        200: "var(--bb-tangerine)",
        300: "var(--bb-tangerine)",
        400: "var(--bb-tangerine)",
        500: "var(--bb-tangerine)",
        600: "var(--bb-rust)",
        700: "var(--bb-rust)",
        800: "var(--bb-rust)",
        900: "var(--bb-rust)",
      },

      green: {
        100: "var(--bb-lime-100)",
        200: "var(--bb-lime-200)",
        300: "var(--bb-lime)",
        400: "var(--bb-lime)",
        500: "var(--bb-lime)",
        600: "var(--bb-olive-900)",
        700: "var(--bb-olive-1100)",
        800: "var(--bb-olive)",
        900: "var(--bb-olive-1500)",
      },

      purple: {
        100: "var(--bb-orchid-subtle)",
        200: "var(--bb-orchid)",
        300: "var(--bb-orchid)",
        400: "var(--bb-orchid)",
        500: "var(--bb-plum)",
        600: "var(--bb-plum)",
        700: "var(--bb-plum)",
        800: "var(--bb-plum)",
        900: "var(--bb-plum)",
      },
      red: {
        100: "var(--bb-sunset-subtle)",
        200: "var(--bb-sunset-soft)",
        300: "var(--bb-sunset)",
        400: "var(--bb-sunset)",
        500: "var(--bb-sunset)",
        600: "var(--bb-crimson)",
        700: "var(--bb-crimson)",
        800: "var(--bb-crimson)",
        900: "var(--bb-crimson)",
      },
    },

    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2) / <alpha-value>)",

        border: "rgb(var(--border) / <alpha-value>)",
        "border-strong": "rgb(var(--border-strong) / <alpha-value>)",

        text: "rgb(var(--text) / <alpha-value>)",
        "text-muted": "rgb(var(--text-muted) / <alpha-value>)",
        "text-subtle": "rgb(var(--text-subtle) / <alpha-value>)",

        primary: "rgb(var(--primary) / <alpha-value>)",
        "primary-hover": "rgb(var(--primary-hover) / <alpha-value>)",
        "primary-active": "rgb(var(--primary-active) / <alpha-value>)",
        "on-primary": "rgb(var(--on-primary) / <alpha-value>)",

        brand: "rgb(var(--brand) / <alpha-value>)",
        "brand-hover": "rgb(var(--brand-hover) / <alpha-value>)",
        "on-brand": "rgb(var(--on-brand) / <alpha-value>)",

        accent: "rgb(var(--accent) / <alpha-value>)",
        success: "rgb(var(--success) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",
        danger: "rgb(var(--danger) / <alpha-value>)",

        ring: "rgb(var(--ring) / <alpha-value>)",
      },
    },
  },
};
