/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#454545",
        black: "#000",
        gainsboro: "#e6e6e6",
        whitesmoke: "#f7f7f7",
        gray: "#828282",
      },
      spacing: {
        "spacing-sm": "32px",
        "spacing-m": "48px",
      },
      fontFamily: {
        "small-text": "Inter",
      },
    },
    fontSize: {
      base: "1rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      xl: "1.25rem",
      "21xl": "2.5rem",
      "13xl": "2rem",
      "45xl": "4rem",
      inherit: "inherit",
    },
    screens: {
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
