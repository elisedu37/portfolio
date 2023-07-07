/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                dancing: ['Dancing Script', 'sans-serif'],
            },
            width: {
                128: '32rem',
            },
            height: {
                128: '32rem',
            },
            backgroundImage: {
                hero: "url('./assets/header.jpg')",
            },
        },
    },
    plugins: [],
};
