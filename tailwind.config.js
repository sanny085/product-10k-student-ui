/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "200px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        aliceblue: "#ddf5ff",
        dodgerblue: "#0071ce",
        coral: "#ff8541",
        Green: "#208837",
        Vivid_Tangelo: "#FF8541",
        denim_Blue: "#156BA9"
      },
      fontFamily: {
        "open-sans": "'Open Sans'",
      },
      fontSize: {
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};
