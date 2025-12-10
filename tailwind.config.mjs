export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        screen360: "360px",
        screen1390: "1390px",
        screen1200: "1200px",
      },
      colors: {
        primary: "#034ea2",
        "orange-primary": "#f26b38",
        "orange-hover": "#fb9440",
        "blue-10": "#034EA2",
        "black-10": "#333333",
      },
    },
  },
  plugins: [],
};
