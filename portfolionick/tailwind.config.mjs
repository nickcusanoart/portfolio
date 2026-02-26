/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Primary Brand */
        primary: {
          DEFAULT: "#bd0000",
          dark: "#8b0000",
          light: "#e60000",
        },
        /* Backgrounds */
        bg: {
          dark: "#000000",
          card: "#1a1a1a",
          light: "#ffffff",
        },
        /* Neutral */
        neutral: {
          gray: "#808080",
          light: "#cccccc",
        },
        /* Glass Effects */
        glass: {
          dark: "rgba(26, 26, 26, 0.375)",
          red: "rgba(189, 0, 0, 0.1)",
        },
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
      },
      borderRadius: {
        sharp: "0px",
        subtle: "4px",
        normal: "8px",
        soft: "12px",
        rounded: "24px",
      },
      boxShadow: {
        /* Glow Effects */
        "glow-subtle": "0 0 20px rgba(189, 0, 0, 0.3)",
        "glow-bright": "0 0 30px rgba(189, 0, 0, 0.6)",
        "glow-intense": "0 0 40px rgba(189, 0, 0, 0.8)",
        /* Glass Depth */
        "glass": "0 8px 32px rgba(0, 0, 0, 0.3)",
        /* Neon Edge */
        "neon": "0 0 15px rgba(189, 0, 0, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.1)",
      },
      backdropBlur: {
        glass: "10px",
      },
      fontFamily: {
        heading: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        body: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        accent: "'Avenir', 'Trebuchet MS', sans-serif",
      },
      fontSize: {
        h1: ["3rem", { lineHeight: "1.2", fontWeight: "700" }],
        h2: ["2.25rem", { lineHeight: "1.2", fontWeight: "700" }],
        h3: ["1.75rem", { lineHeight: "1.2", fontWeight: "600" }],
        h4: ["1.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.6" }],
        tiny: ["0.75rem", { lineHeight: "1.5", fontWeight: "500" }],
      },
      transitionDuration: {
        "200": "200ms",
        "300": "300ms",
        "150": "150ms",
      },
      transitionTimingFunction: {
        ease: "ease",
        "ease-out": "ease-out",
        "ease-in": "ease-in",
      },
      backgroundImage: {
        /* Gradient Overlays */
        "gradient-dark": "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.3))",
        "gradient-accent": "linear-gradient(135deg, rgba(189,0,0,0.1), transparent)",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(189, 0, 0, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(189, 0, 0, 0.6)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        glow: "glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [
    function({ addComponentsByName, matchUtilities, theme }) {
      /* Glass Container Component */
      addComponentsByName("glass", {
        backgroundColor: "rgba(26, 26, 26, 0.375)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      });

      /* Primary Button */
      addComponentsByName("btn-primary", {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#bd0000",
        color: "#ffffff",
        padding: "16px 32px",
        borderRadius: "8px",
        fontWeight: "600",
        textDecoration: "none",
        border: "none",
        cursor: "pointer",
        transition: "all 200ms ease",
        boxShadow: "0 0 20px rgba(189, 0, 0, 0.3)",

        "&:hover": {
          boxShadow: "0 0 30px rgba(189, 0, 0, 0.6)",
          transform: "scale(1.02)",
        },

        "&:focus-visible": {
          outline: "2px solid #bd0000",
          outlineOffset: "2px",
        },
      });

      /* Secondary Button */
      addComponentsByName("btn-secondary", {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        color: "#ffffff",
        padding: "12px 24px",
        borderRadius: "8px",
        border: "2px solid #bd0000",
        fontWeight: "600",
        textDecoration: "none",
        cursor: "pointer",
        transition: "all 200ms ease",

        "&:hover": {
          backgroundColor: "rgba(189, 0, 0, 0.1)",
          boxShadow: "0 0 20px rgba(189, 0, 0, 0.3)",
        },

        "&:focus-visible": {
          outline: "2px solid #bd0000",
          outlineOffset: "2px",
        },
      });

      /* Project Card */
      addComponentsByName("card-project", {
        backgroundColor: "#1a1a1a",
        border: "1px solid rgba(189, 0, 0, 0.2)",
        borderRadius: "8px",
        overflow: "hidden",
        transition: "all 200ms ease",

        "&:hover": {
          borderColor: "#bd0000",
          boxShadow: "0 0 30px rgba(189, 0, 0, 0.6)",
          transform: "scale(1.02)",
        },
      });
    },
  ],
};
