/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "rgb(99, 102, 241)",
        secondaryColor: "rgb(143,137,238)",
        primaryText: "rgb(44, 62, 80)",
        secondaryText: "rgb(86, 101, 115)",
        bgDark1: "rgb(247, 249, 249)",
        bgDark2: "rgb(240, 243, 244)",
        bgDark3: "rgb(236, 240, 241)",
        bgDark3Hover: "rgb(55, 56, 62)",
        bgDarkTransparent: "rgb(236, 240, 241, 0.7)",
        bgDarkTransparentDarker: "rgb(236, 240, 241, 0.5)",
        bgDarkTransparentLighter: "rgb(179, 182, 183, 0.3)",
        mainBorder: "rgb(255,255,255,0.15)",
        mainBorderDarker: "rgb(255,255,255,0.07)",
        quoteIconColor: "rgb(178, 184, 205)"
      },
      fontFamily: {
        Inter: "Inter",
      },
      screens: {
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",      
        "2xl": "1536px",
      },
    },
  },
};

