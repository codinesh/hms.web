module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'print': {
          'raw': 'print'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}