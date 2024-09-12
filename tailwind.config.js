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
                "hover-green": "#2A794E",
                "custom-black": "#1D252C"
            },
            backgroundImage: {
                'login': "url('/assets/fundo.jpg')",
            },
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}