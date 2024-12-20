import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.tsx",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Merriweather Sans", ...defaultTheme.fontFamily.sans],
      },
    },
    listStyleType: { square: "square" },
  },

  plugins: [forms, require("@tailwindcss/typography")],
};
