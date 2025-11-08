/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } }
      },
      animation: { float: "float 8s ease-in-out infinite" },
      boxShadow: { soft: "0 8px 30px rgba(0,0,0,0.08)" }
    }
  },
  plugins: []
};
