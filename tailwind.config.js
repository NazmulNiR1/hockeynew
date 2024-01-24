/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#131318",
          "200": "rgba(19, 19, 24, 0.5)",
          "300": "rgba(19, 19, 24, 0.6)",
          "400": "rgba(19, 19, 24, 0.2)",
          "500": "rgba(19, 19, 24, 0.4)",
          "600": "rgba(19, 19, 24, 0.1)",
          "700": "rgba(19, 19, 24, 0.3)",
          "800": "rgba(19, 19, 24, 0.03)",
          "900": "rgba(255, 255, 255, 0.8)",
          "1000": "rgba(255, 255, 255, 0.6)",
        },
        tomato: {
          "100": "#ff5c59",
          "200": "#ff4240",
        },
        darkorange: "rgba(254, 151, 56, 0.18)",
        cornflowerblue: "rgba(98, 156, 243, 0.1)",
        khaki: "rgba(253, 221, 95, 0.1)",
        yellowgreen: "rgba(188, 237, 109, 0.1)",
        "dark-02": "#424247",
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      "9xl": "28px",
      "3xl": "22px",
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      "17xl": "36px",
      "10xl": "29px",
      inherit: "inherit",
    },
    screens: {
      mq1500: {
        raw: "screen and (max-width: 1500px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
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