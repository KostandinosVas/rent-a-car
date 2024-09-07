import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       'car-view': "url('../../public/images/car51.png')",
       'hero': "url('../../public/images/car51.png')",
       'selections': "url('../../public/images/car51.png')",
      },
    },
  },
  plugins: [],
};
export default config;
