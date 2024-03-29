module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.svelte',
    './src/**/*.js'
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      'mono': [ 'Roboto Mono', 'monospace' ],
      'sans': [ 'Inter', '-apple-system', 'Roboto' ]
    },
    fontSize: {
      '12': '0.75rem',
      '14': '0.875rem',
      '16': '1rem',
      '18': '1.125rem',
      '20': '1.25rem',
      '22': '1.35rem',
      '24': '1.5rem',
      '28': '1.75rem',
      '32': '2rem',
      '36': '2.25rem',
      '40': '2.5rem',
      '44': '2.75rem',
      '48': '3rem',
      '56': '3.5rem',
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
      'red': 'rgb(232, 132, 93)',
      'green': 'rgb(176, 196, 121)',
      'yellow': 'rgb(255, 219, 133)',
      'dark-gray': '#CAD3D7',
      'darker-gray': 'rgb(213, 203, 195)',
      'light-gray': '#ECECEC',
      'blue': '#0056B6',
      'black-a-10': 'rgba(0,0,0,0.1)',
      'black-a-20': 'rgba(0,0,0,0.2)',
      'black-a-40': 'rgba(0,0,0,0.4)',
      'black-a-70': 'rgba(0,0,0,0.7)',
    },
    letterSpacing: {
      'title': '-0.05em',
      'subtitle': '-0.03em',
      'paragraph': '-0.01em'
    },
    screens: {
      'xs': '23.4375rem',
      'sm': '37.5rem',
      'md': '48rem',
      'lg': '64rem',
      'xl': '80rem',
    },
    extend: {
      listStyleType: {
        roman: 'upper-roman',
      },
      maxWidth: {
        '24em': '24em',
        '30em': '30em'
      },
      boxShadow: {
        'cat': '0 0 3rem 1.25rem rgba(0,0,0,0.35)'
      },
      borderWidth: {
        '3': '3px'
      }
    },
  },
  variants: {
    extend: {
      margin: ['last']
    },
  },
  plugins: [],
}
