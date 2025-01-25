/** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: ["./views/**/*.{html,ejs}"],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// };
module.exports = {
  content: [
    "./public/**/*.html", // Ensure this path includes your HTML files
    "./views/**/*.ejs", // Add your views or template files
    "./src/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
