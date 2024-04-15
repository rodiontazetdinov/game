/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d6efd",
        secondary: "#6c757d",
        dark: "#191919",
        secondaryDark: "#2c2c2c",
        blue: "#296cbd",
        secondaryBlue: "#3e95ff",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        s: "10px",
        m: "12px",
        l: "14px",
        xl: "16px",
        xxl: "18px",
      },
      backgroundImage: {
        potencial: "url('/src/assets/images/potencial.png')",
      },
    },
  },
  plugins: [],
};
