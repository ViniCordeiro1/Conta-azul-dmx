/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: { 
      boxShadow: {
        
      },
      colors: {
        'primary-blue': '#2687e9',
        'primary-gray': '#6F6F6F',
        'second-gray': '#666666',
        'backgrou-gray': '#f1f4f9',
        'primary-green': '#26b547',
        'text-black': '#333',
        'bg-hover': '#eaeef6',
        'bg-primary-blue': '#00aff0',
        'bg-second-blue': '#3dd0f6',
        'bg-fc-blue': '#0c178b'
      }
    },
  },
  plugins: [],
};

