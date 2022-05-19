module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gradientFrom: 'hsl(236, 72%, 79%)',
        gradientTo: 'hsl(237, 63%, 64%)',
        veryLightGrayishBlue: 'hsl(240, 78%, 98%)',
        lightGrayishBlue: 'hsl(234, 14%, 74%)',
        grayishBlue: 'hsl(233, 13%, 49%)',
        darkGrayishBlue: 'hsl(232, 13%, 33%)',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'top-bg': "url('/src/images/bg-top.svg')",
        'bottom-bg': "url('/src/images/bg-bottom.svg')",
      },
    },
  },
  plugins: [],
};
