/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          1000: "#59461E", // Gold tint 1000
          900: "#735A27", // Gold tint 900
          800: "#997834", // Gold tint 800
          700: "#BF9641", // Gold tint 700
          600: "#CCA046", // Gold tint 600
          500: "#E6B44E", // Gold tint 500
          400: "#FFC857", // Gold tint 400
          300: "#FFFECB", // Gold tint 300
          200: "#FFFEF6", // Gold tint 200
          100: "#FFF6EE", // Gold tint 100
        },
        primary: {
          1000: "#1A1628", // Deep purple tint 1000
          900: "#1F2041", // Deep purple tint 900
          800: "#2D2644", // Deep purple tint 800
          700: "#1F2041", // Deep purple tint 700
          600: "#3C325B", // Deep purple tint 600
          500: "#443967", // Deep purple tint 500
          400: "#4B3F72", // Deep purple tint 400
          300: "#C7C3D3", // Deep purple tint 300
          200: "#E4E2EA", // Deep purple tint 200
          100: "#EDECF1", // Deep purple tint 100
        },
        secondary: {
          1000: "#063739", // Green blue tint 1000
          900: "#08474A", // Green blue tint 900
          800: "#0A5E62", // Green blue tint 800
          700: "#0D767B", // Green blue tint 700
          600: "#0E7E83", // Green blue tint 600
          500: "#0FB094", // Green blue tint 500
          400: "#119DA4", // Green blue tint 400
          300: "#85E1E3", // Green blue tint 300
          200: "#DBF0F1", // Green blue tint 200
          100: "#FFF6EE", // Green blue tint 100
        },
        special: {
          white: {
            1000: "#FFFFFF",
          },
          black: {
            1000: "#000000",
          },
          leaf: {
            1000: "#AFD079",
          },
          peach: {
            1000: "#E17990",
          },
          grape: {
            1000: "#70619E",
          },
          light: {
            1000: "#ECE9F7",
          },
          sky: {
            1000: "#CEE8F8",
          },
          banana: {
            1000: "#FFFECE",
          },
          lime: {
            1000: "#E1EECD",
          },
        },
      },
    },
  },
  plugins: [],
};
