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
      pink: "var(--bb-pink)",
      orchid: "var(--bb-orchid)",
      aubergine: "var(--bb-aubergine)",
      cloud: "var(--bb-cloud)",
      teal: {
        DEFAULT: "var(--bb-teal)",
        soft: "var(--bb-teal-soft)",
        subtle: "var(--bb-teal-subtle)",
        tint: "var(--bb-teal-tint)",
      },
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
        DEFAULT: "var(--bb-teal)",
        100: "var(--bb-teal-subtle)",
        200: "var(--bb-teal-tint)",
        300: "var(--bb-teal-tint)",
        400: "var(--bb-teal-tint)",
        500: "var(--bb-teal)",
        600: "var(--bb-teal)",
        700: "var(--bb-teal)",
        800: "var(--bb-teal)",
        900: "var(--bb-teal)",
      },

      sky: {
        100: "var(--bb-teal-subtle)",
        200: "var(--bb-teal-tint)",
        300: "var(--bb-teal-tint)",
        400: "var(--bb-teal-tint)",
        500: "var(--bb-teal)",
        600: "var(--bb-teal)",
        700: "var(--bb-teal)",
        800: "var(--bb-teal)",
        900: "var(--bb-teal)",
      },

      orange: {
        DEFAULT: "var(--bb-orange)",
        100: "var(--bb-orange-subtle)",
        200: "var(--bb-orange)",
        300: "var(--bb-orange)",
        400: "var(--bb-orange)",
        500: "var(--bb-orange)",
        600: "var(--bb-orange-strong)",
        700: "var(--bb-orange-strong)",
        800: "var(--bb-orange-strong)",
        900: "var(--bb-orange-strong)",
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
        100: "var(--bb-teal-subtle)",
        200: "var(--bb-teal-tint)",
        300: "var(--bb-teal-tint)",
        400: "var(--bb-teal-tint)",
        500: "var(--bb-teal)",
        600: "var(--bb-teal)",
        700: "var(--bb-teal)",
        800: "var(--bb-teal)",
        900: "var(--bb-teal)",
      },
      red: {
        100: "var(--bb-danger-soft)",
        200: "var(--bb-danger-soft)",
        300: "var(--bb-danger)",
        400: "var(--bb-danger)",
        500: "var(--bb-danger)",
        600: "var(--bb-danger)",
        700: "var(--bb-danger)",
        800: "var(--bb-danger)",
        900: "var(--bb-danger)",
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
