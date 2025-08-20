const { setConfig } = require("next/config");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        grotesque: ["Bricolage Grotesque", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
         dmk: {
          red: '#E31937', // Primary DMK red
          black: '#000000', // DMK black
          white: '#FFFFFF', // DMK white
          yellow: '#FFD700', // Star/emblem color
          light: {
            background: '#FFFFFF',
            text: '#111827',
            primary: '#E31937',
            secondary: '#1E40AF',
          },
          dark: {
            background: '#111827',
            text: '#F3F4F6',
            primary: '#F87171',
            secondary: '#93C5FD',
          }
        },
        primary: "#6f5bc6",
        tick: "#485aff",
        secondary: "#48a0fa",
        tertiary: "#04264e",
        secondaryDark: "#210d43",
        secondaryLight: "#f3eefb",
        primaryLight: "#ebf5fe",
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "hsl(240 5.9% 90%)",
        "regal-blue": "#243c5a",
        orange: colors.orange,
        gray: colors.gray,
        eye_brow: {
          DEFAULT: "#ea580c",
          light: "#3a9fd1",
          dark: "#0b5f8a",
        },
        deepPurple: "#1d0b42",
        "background-yellow": "#fff3e0",
        cardBg: "#ebf5fe",
        tickBlue: "#48a0fa",
        tickPurple: "#bea2ee",
      },
      boxShadow: {
        glow: "0 0 20px #d9d3f0",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  safelist: [
    "lg:block",
    "lg:col-span-3",
    "lg:col-span-6",
    "lg:grid-cols-12",
    "grid-cols-1",
    "col-span-12",
    "lg:grid",
    "lg:pt-20",
  ],
  variants: {
    extend: {},
  },
  plugins: [],
};
