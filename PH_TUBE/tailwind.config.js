// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans your source files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#6E6E6E',
        dark: '#333333',
        light: '#F8F9FA',
      },
    },
  },
  plugins: [],
};
