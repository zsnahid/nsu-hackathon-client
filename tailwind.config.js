import withMT from "@material-tailwind/react/utils/withMT";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [forms],
});
