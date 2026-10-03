export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: '#0D0C0B',
        panel: '#151412',
        raised: '#1D1B18',
        line: '#2D2A25',
        cream: '#F2ECE2',
        muted: '#A79E90',
        gold: { DEFAULT: '#C9A96E', soft: '#E7D5AB', deep: '#8F7543' },
        paper: { DEFAULT: '#ECE7DF', ink: '#5A534B' },
        danger: '#E58A78',
        success: '#9CC79A',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
