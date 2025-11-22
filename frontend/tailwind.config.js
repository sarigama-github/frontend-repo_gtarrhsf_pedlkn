/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          900: "#0a0b0f",
          800: "#0e1117",
          700: "#111827"
        }
      }
    }
  },
  plugins: []
}
