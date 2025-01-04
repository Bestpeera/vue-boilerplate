/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFC857", // Bright Yellow 400
        secondary: "#4B3F72", // Deep Purple 400
        tertiary: "#119DA4", // Green Blue 1000
        special: {
          white: "#FFFFFF", // White 1000
          black: "#000000", // Black 1000
          leaf: "#AFD079", // Leaf 1000
          peach: "#E17990", // Peach 1000
          grape: "#70619E", // Grape 1000
          light: "#ECE9F7", // Light 50
          sky: "#CEE8F8", // Sky 50
          banana: "#FFFECE", // Banana 50
          lime: "#E1EECD", // Lime 50
          papaya: "#FFE5DD", // Papaya 50
        },
        text: {
          1000: "#1A1628", // Text 1000
          666: "#7E7B7B", // Text 666
          333: "#E8E8E9", // Text 333
        },
        yellow: {
          1000: "#59461E",
          900: "#735A27",
          800: "#997834",
          700: "#BF9641",
          600: "#CCA046",
          500: "#E6B44E",
          400: "#FFC857",
          375: "#FCCD9E",
          350: "#FAE3B3",
          300: "#FFEECB",
          200: "#FFF7E6",
          100: "#FFFAEE",
        },
        purple: {
          1000: "#1A1628",
          900: "#1F2041",
          800: "#2D2644",
          600: "#3C325B",
          500: "#443967",
          400: "#4B3F72",
          350: "#E0DAF5",
          300: "#C7C3D3",
          200: "#E4E2EA",
          100: "#EDECF1",
        },
        green: {
          1000: "#063739",
          900: "#08474A",
          800: "#0A5E62",
          700: "#0D767B",
          600: "#0E7E83",
          500: "#0F8D94",
          400: "#119DA4",
          300: "#B5E1E3",
          200: "#DBF0F1",
          100: "#E7F5F6",
        },
      },
    },
  },
  plugins: [],
};
