/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      spacing: {
        // 16
        "section-my-tiny": "4rem",
        // 24
        "section-my-sm": "6rem",
        // 32
        "section-my-md": "8rem",
        "section-my-xl": "12rem",
      },
    },
  },
  plugins: [],
};
