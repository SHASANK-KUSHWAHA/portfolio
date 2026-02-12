import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366f1",
          dark: "#4f46e5",
          light: "#818cf8",
        },
        secondary: {
          DEFAULT: "#ec4899",
          dark: "#db2777",
          light: "#f472b6",
        },
        background: {
          dark: "#0f172a",
          card: "#1e293b",
          light: "#f8fafc",
        },
        text: {
          light: "#f8fafc",
          muted: "#94a3b8",
          dark: "#1e293b",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "morph": "morph 8s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "morph": {
          "0%": { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" },
          "50%": { borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%" },
          "100%": { borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" },
        },
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "gradient-2": "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        "gradient-3": "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
