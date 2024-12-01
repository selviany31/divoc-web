/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#17597e',
        light: '#E4EFF5',
        warning: '#F79009',
        'light-warning': '#FFFAEB',
        danger: '#F04438',
        'light-danger': '#FEF3F2',
        success: '#12B76A',
        'light-success': '#ECFDF3',
        secondary: '#EDF4F8',
        'dark-success': '#027A48',
        'dark-secondary': '#667085',
        white: '#fff',
        'border-black': '#D0D5DD',
        black: '#21272D',
      },
    },
  },
  plugins: [],
};
