import { nextui } from "@nextui-org/react";
const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",

    ],
    darkMode: "class",
    theme: {

    },

    plugins: [

        require("tailwindcss-animate"),
    ],
};