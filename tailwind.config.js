module.exports = {
  purge: [
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      '12': '0.75rem',
      '14': '0.875rem',
      '16': '1rem',
      '18': '1.125rem',
      '20': '1.25rem',
      '24': '1.5rem',
      '44': '2.75rem',
      '64': '4rem',
    },
    lineHeight: {
      '115': '1.15',
      '125': '1.25',
      '150': '1.5',
      '175': '1.75',
    },
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': 'black',
      'white': 'white',
      'green': '#C0C79E',
      'yellow': '#F6EDD4',
      'dark-gray': '#CAD3D7',
      'light-gray': '#ECECEC',
      'blue': '#005FB6',
      'black-a-20': 'rgba(0,0,0,0.2)',
      'black-a-50': 'rgba(0,0,0,0.5)',
      'black-a-70': 'rgba(0,0,0,0.7)',
    },
    extend: {
      maxWidth: {
        '24em': '24em'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
