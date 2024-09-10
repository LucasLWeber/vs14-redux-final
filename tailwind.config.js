/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "custom-green": "#56B280",
                "custom-black": "#1D252C"
            }
        },
    },
    plugins: [],
}