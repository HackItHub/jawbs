module.exports = {
  content: ["./src/client/**/*.{js,jsx,ts,tsx}", "index.html"],
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
      gray: "#C0C0C0",
      transparent: "transparent",
      "text-placeholder": "#9BA3AF",
      "transparent-background": "#F8F8F8",
    },
    fontFamily: {
      "display-text": ["Nunito", "ui-monospace", "SFMono-Regular"],
      heading: ["Roboto", "Georgia", "system-ui", "ui-sans-serif"],
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
