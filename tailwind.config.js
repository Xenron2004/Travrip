/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        plusjakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        '16px': '16px',  // Define 16px as a font size
      },
      colors: {
        sectionHeading: '#212B36',
        subheading: '#858687',
        paragraph: '#777A7E',
        primary: '#008080',
        reviewText: '#494949',
        formText: '#87898B',
        navText: "#474747"
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}