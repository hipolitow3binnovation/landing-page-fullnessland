/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Montserrat', 'sans-serif'",
        serif: "'Platypi', 'serif'",
      },
      keyframes: {
        message_feedback: {
          "0%": {
            opacity: "0",
            transform: "translateY(50%)",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        message_feedback: "message_feedback 0.3s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
