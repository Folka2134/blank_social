/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,ejs}",
    "./public/**/*.{js,jsx,ts,tsx,ejs}",
    "./views/**/*.{js,jsx,ts,tsx,ejs}",
  ],
  theme: {
    theme: {
      fontFamily: {
        helvetica: ["Helvetica Neue"],
      },
    },
    extend: {},
  },
  plugins: [],
};
