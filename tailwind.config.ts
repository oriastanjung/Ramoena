import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('/hero-bg.png')",
      }),
      colors : {
        "green" : {
          "500" : "#0CE449"
        },
        "gray" : {
          "100" : "#A8A8AB",
          "500" : "#323437"
        },
        "black" : "#141414",
        "black-1": "#0E100F",
        "white" : "#FEFCE1",
      }
    },
  },
  plugins: [],
};
export default config;
