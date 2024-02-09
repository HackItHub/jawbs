module.exports = {
  content: ["./src/client/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      green: "#3CC157",
      blue: "#2AA7FF",
      black: "#1B1B1B",
      yellow: "#FCBC0F",
      orange: "#F85F36",
      white: "#FFFFFF",
      red: "#E42217",
      "text-placeholder": "#9BA3AF",
      "transparent-background": "#F8F8F8",
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
